// Modules
import { cmsRepo } from "@/graphql/CMSRepo";
import { NavigationAdapter } from "./adapter";

// Components
import Logo from "./components/Logo";
import LogoList from "./components/LogoList";
import LinkList from "./components/LinkList";
import Burger from "./components/Burger";

export default async function Navigation({ lang }: { lang: string }) {
  const cmLanguage = `${process.env.NEXT_PUBLIC_CM_SEGMENT}${lang}`;
  const navData = await cmsRepo.getNavigation(`${cmLanguage}/headerfooternavigation`);
  const adaptedData = new NavigationAdapter().adapt(navData);

  return (
    <nav className="sticky top-0 z-50 bg-white transition-all">
      <div className="py-[15px] px-[30px] lg:pt-[20px] lg:pb-0 lg:px-[15px] m-auto xl::max-w-[750px] sm:max-w-[992px] md:max-w-[1170px] lg:max-w-[970px] xl:max-w-[1170px]">
        {/* Logo */}
        <div className="flex items-center justify-between lg:justify-center min-h-[33px] md:min-h-[75px] lg:min-h-[unset]">
          {adaptedData?.mainLogo && <Logo logo={adaptedData?.mainLogo} />}

          {/* Mobile links are inside burger component */}
          {adaptedData?.links && <Burger links={adaptedData?.links} loginLink={adaptedData.loginLink} />}
        </div>

        {/* Secondary Logos */}
        <div>
          {adaptedData?.logoList && <LogoList logos={adaptedData?.logoList} />}
        </div>

        {/* Links */}
        {adaptedData?.links && <LinkList links={adaptedData?.links} loginLink={adaptedData?.loginLink} />}
      </div>
    </nav>
  );
}
