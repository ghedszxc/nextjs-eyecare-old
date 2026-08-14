// Modules
import { cmsRepo } from "@/graphql/CMSRepo";
import { FooterAdapter } from "./adapter";

// Components
import FooterLogos from "./components/FooterLogos";
import FooterLinks from "./components/FooterLinks";
import FooterCopyright from "./components/FooterCopyright";

interface IFooterProps {
  lang: string;
}

const Footer = async ({ lang }: IFooterProps) => {
  const cmLanguage = `${process.env.NEXT_PUBLIC_CM_SEGMENT}${lang}/headerfooternavigation`;
  const footerData = await cmsRepo.getFooter(cmLanguage, [
    "footerLogos",
    "footer_disclaimer",
    "footer_navigation",
  ]);
  const adaptedData = new FooterAdapter().adapt(footerData);

  return (
    <footer className="py-[20vw] lg:py-[4.16667vw] bg-black lg:flex">
      {/* Logos */}
      {(adaptedData?.logoList && adaptedData?.copyRight) && <FooterLogos copyRight={adaptedData.copyRight} logos={adaptedData.logoList} />}

      {/* Links */}
      {adaptedData?.linkList && <FooterLinks links={adaptedData.linkList} />}

      {/* Copyright */}
      {adaptedData?.copyRight && <FooterCopyright copyrights={adaptedData.copyRight} />}
    </footer>
  );
};
export default Footer;
