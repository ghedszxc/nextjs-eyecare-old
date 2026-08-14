// Modules
import Link from "next/link";
import { IAnchor } from "./Anchor.interface";
import { getAkamayUrl, localeSegmentRemoval } from "@/logic/utilities";

// Components
const Anchor = ({ children, className, isExternal, ...props }: IAnchor) => {
  if (!props.href) return null;
  const formattedLink = localeSegmentRemoval(props?.href.toString());
  const isExternalLink = props.href.toString().includes("http") || props.href.toString().includes("https");
  
  return (
    <Link
      {...props}
      href={isExternalLink ? props.href.toString() : formattedLink}
      target={isExternalLink ? "_blank" : "_self"}
      className={className}
    >
      {children}
    </Link>
  );
};
export default Anchor;
