// Modules

import Picture from "@/components/Picture/Picture";
import { URL } from "../INavigation.interface";
import Anchor from "@/components/Anchor/Anchor";

// Components

type ILogoProps = {
  logo: URL;
};

const Logo: React.FC<ILogoProps> = ({ logo }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Anchor href="/">
      <Picture
        src={logo}
        alt="Essilor Luxottica Eyecare"
        width={464}
        className="w-[50vw] lg:w-[464px]"
        unoptimized
      />
    </Anchor>
  );
};
export default Logo;
