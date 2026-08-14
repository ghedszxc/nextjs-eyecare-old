// Modules
import { TLink } from "../INavigation.interface";
import { Button } from "@/components/global_elements/Button/Button";

// Components
import Anchor from "@/components/Anchor/Anchor";

const LinkList = ({ links, loginLink }: { links: TLink[], loginLink: TLink }) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  const levelOneLinks = links.filter((link) => link.type !== "CTA");
  const CTA = links.filter((link) => link.type === "CTA");

  const renderLink = (link: TLink) => {
    switch (link.type) {
      case "singleLink":
        return (
          <div key={link.label} className="flex">
            <Anchor href={link.url} className="pr-[12px] leading-[17px]">{link.label}</Anchor>
          </div>
        );
      case "multipleLink":
        return <DropdownLink link={link} />;
      case "extLink":
        return (
          <div key={link.label} className="flex">
            <Anchor href={link.url} isExternal className="pr-[12px] leading-[17px]">
              {link.label}
            </Anchor>
          </div>
        );
      case "CTA":
        return (
          <Anchor key={link.label} href={link.url} className="h-fit w-fit">
            <Button className="rounded-full py-[11px] px-[18px] font-medium tracking-[.08em] text-sm border-[1px] border-black w-full whitespace-nowrap">
              {link.label}
            </Button>
          </Anchor>
        );
    }
  };

  return (
    <div className="hidden lg:flex items-center justify-between pb-[20px]">
      <div className="font-medium uppercase text-sm tracking-[.08em] flex justify-between items-center w-full">
        <div></div>
        {levelOneLinks.map((link, key) => {
          return (
            <div key={key} className="min-w-[120px] flex justify-center shrink-0 float-none">
              {renderLink(link)}
            </div>
          );
        })}
        <div></div>
      </div>

      {/* CTA */}
      <div className="flex flex-col relative">
        <Anchor
          className="text-sm font-light self-end py-[10px] absolute -top-[53px] uppercase"
          href={loginLink?.url}
        >
          {loginLink?.label}
        </Anchor>
        {renderLink(CTA[0])}
      </div>
    </div>
  );
};

const DropdownLink = ({ link }: { link: TLink }) => {
  return (
    <div className="group cursor-default relative pr-[12px]">
      <div key={link.label} className="leading-[17px]">{link.label}</div>

      <div className="bg-white z-40 p-[15px] absolute hidden group-hover:grid">
        {link.subLinks?.map((sublink, key) => (
          <Anchor href={sublink.url} key={key} className="mb-[10px] pb-[6px] hover:underline last-of-type:mb-0 last-of-type:pb-0 text-center max-w-full capitalize">
            {sublink.label}
          </Anchor>
        ))}
      </div>
    </div>
  );
};

export default LinkList;
