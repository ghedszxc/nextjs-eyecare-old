import { jsonToLayoutAdapter } from "@/coremedia-integration/adapters/JsonToLayoutAdapter";
import { cmsRepo } from "@/graphql/CMSRepo";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import getMetaData from "@/lib/server-actions";

// Components
import GridLayout from "@/components/GridLayout";
import Navigation from "@/widgets/Navigation";
import Footer from "@/widgets/Footer";

// Modules
import { defaultLocale, locales } from "@/middleware";

type Props = {
  params: { lang: string; route: string[] };
};

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata = await getMetaData(params?.lang, params?.route?.join("/"));

  const languages: { [key: string]: string } = {};
  const canonical = ["", ...(params?.route || [])].join("/") || "/";

  
  if (canonical) {
    for (const key in locales) {
      if(params.lang === locales[key] && Object.prototype.hasOwnProperty.call(locales, key)) languages['x-default'] = canonical.replace(`/${params.lang}`, "");
    }
  }

  try {
    const meta: Metadata = {
      metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN}`),
      title: metadata.title || "404 - Page Not Found",
      description: metadata.description,
      robots: {
        index: metadata?.noIndexNoFollow ? false : true,
        follow: metadata?.noIndexNoFollow ? false : true
      },
      icons: [{ type: "image/x-icon", rel: "icon", url: "/favicon.ico" }],
      alternates: {
        canonical: canonical,
        languages: languages
      }
    };

    return meta;
  } catch (err) {
    return {
      title: "404",
      description: "404",
      robots: { index: false, follow: false },
    };
  }
}

export default async function PageGenerator({ params }: Props) {
  try {
    const { route, lang } = params;

    // Fetch data from graphql
    const cmLanguage = `${process.env.NEXT_PUBLIC_CM_SEGMENT}${lang}`;
    const cmsResp = await cmsRepo.getLayoutData(cmLanguage, (route || []).join("/"));
    const layoutData = jsonToLayoutAdapter.adapt(cmsResp);
    
    const url = {
      route: route,
      locale: lang,
    };

    // Check for both layoutData and widgets to ensure we have content
    if (!layoutData?.widgets?.length) {
      notFound();
    }

    return (
      <div>
        <Navigation lang={url.locale} />
        <main>
          <GridLayout data={layoutData} url={url} />
        </main>
        <Footer lang={url.locale} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
