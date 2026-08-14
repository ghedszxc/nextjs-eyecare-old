// Modules
import { ITextCenterCtaInBottom } from "./TextCenterCtaInBottom.interface";
import AppConfig from "@/lib/AppConfig";

// Components
import { Button } from "@/components/global_elements/Button/Button";
import Anchor from "@/components/Anchor/Anchor";
const TextCenterCtaInBottom = ({ title, subtitle, cta, viewType, backgroundColor }: ITextCenterCtaInBottom) => {
  // Hooks
  // Variables
  const headerStyle = "text-[40px] lg:text-[4.16667vw] leading-[45px] lg:leading-[4.6875vw] tracking-wide mt-0 lg:mt-6 mb-6"
  const subtextStyle = "mb-[30px] lg:mb-6 prose-textCenterCtaInBottomMobile lg:prose-textCenterCtaInBottomDesktop"
  const buttonWhiteBgStyle = "mt-[4vh] mb-8 lg:mb-20 rounded-full px-[5vw] lg:px-16 py-3 lg:py-6 font-medium tracking-wider text-[16px] md:text-[20px] lg:text-[1.45833vw] border-[2px] border-black"
  const buttonBlackBgStyle = "mt-[4vh] mb-8 lg:mb-20 rounded-full px-[5vw] lg:px-32 py-3 lg:py-6 font-medium tracking-wider text-[16px] md:text-[18px] lg:text-[1.45833vw] border-[2px] border-white"

  // Functions
  // Effects

  return (
    <div>
      {
        viewType == 'TextCenterCtaGray' &&
        (
          <div className="flex justify-center text-center" style={{ background: '#dfdfe1' }}>
            <div className="w-[90%] lg:w-[70%] px-[10vw] md:px-0 py-[40vw] md:py-[10vw] lg:py-28 font-light">

              <div className={headerStyle}>
                {AppConfig.html(title)}
              </div>

              {
                subtitle && 
                (
                  <div className={subtextStyle}>
                    {AppConfig.html(subtitle.text)}
                  </div>
                )
              }


              {cta?.label && cta?.url && (
                <Anchor
                  href={cta?.url}
                  isExternal={!!cta?.isExternal}
                >
                <Button className={buttonWhiteBgStyle}>
                  {cta?.label}
                </Button>
                </Anchor>
              )}
            </div>
          </div>
        )
      }

      {
        viewType == 'BgColorWhite' &&
        (
          <div className="flex justify-center text-center">
            <div className="w-[90%] lg:w-[70%] py-12 font-light">

              {
                title && (
                  <div className={headerStyle}>
                    {AppConfig.html(title)}
                  </div>
                )
              }

              {
                subtitle && 
                (
                  <div className={subtextStyle}>
                    {AppConfig.html(subtitle.text)}
                  </div>
                )
              }


              {cta?.label && cta?.url && (
                <Anchor
                  href={cta?.url}
                  isExternal={!!cta?.isExternal}>
                  <Button className={buttonWhiteBgStyle}>
                    {cta?.label}
                  </Button>
                </Anchor>
              )}
            </div>
          </div>
        )
      }

      {
        viewType == 'CTABoldParagraph' &&
        (
          <div className="flex justify-center text-center"
          style={{ backgroundColor: backgroundColor, color: backgroundColor == '#ffffff' ? 'black' : 'white' }}>
            <div className="w-[93%] lg:w-[70%] py-[80px] lg:py-12 font-light">

              <div className={headerStyle}>
                {AppConfig.html(title)}
              </div>

              {
                subtitle && 
                (
                  <div className="prose-textCenterCtaInBottomSubtitleMobile lg:prose-textCenterCtaInBottomSubtitleDesktop mb-[30px] lg:mb-6">
                    {AppConfig.html(subtitle.text)}
                  </div>
                )
              }


              {cta?.label && cta?.url && (
                <Anchor
                  href={cta?.url}
                  isExternal={!!cta?.isExternal}>
                  <Button className={backgroundColor == '#ffffff' ? buttonWhiteBgStyle : buttonBlackBgStyle }>
                    {cta?.label}
                  </Button>
                </Anchor>
              )}
            </div>
          </div>
        )
      }

      {
        viewType == 'BgColorDarkerGray' &&
        (
          <div className="flex justify-center text-center text-white" style={{ background: '#666666' }}>
            <div className="w-[90%] md:w-[70%] lg:w-[50%] xl:w-[35%] py-[10vw] lg:py-16 font-light">

              <div className="text-[26px] lg:text-[26px] leading-[32px] tracking-[4px] md:tracking-[5px] font-[100] mb-3 md:mb-6">
                {AppConfig.html(title)}
              </div>

              {
                subtitle && 
                (
                  <div className="text-[15px] md:text-[20px] leading-[27px] font-[300]">
                    {AppConfig.html(subtitle.text)}
                  </div>
                )
              }


              {cta?.label && cta?.url && (
                <Anchor
                  href={cta?.url}
                  isExternal={!!cta?.isExternal}
                >
                <Button className="mt-0 lg:mt-[4vh] mb-8 lg:mb-20 rounded-full px-[8vw] md:px-12 py-3 lg:py-4 font-medium tracking-wider text-[15px] xl:text-[1vw] bg-white text-black">
                  {cta?.label}
                </Button>
                </Anchor>
              )}
            </div>
          </div>
        )
      }

      {
        viewType == 'BgColorWhiteSmallCta' &&
        (
          <div className="flex justify-center text-center py-8 md:py-24">
            <div className="w-[90%] xl:w-[60%] py-12 font-light">

              { title && (
                <div className="text-[18px] xl:text-[1.40625vw] leading-[25px] lg:leading-[32px] font-[900] mb-3">
                  {title}
                </div>
              )}
              {
                subtitle && 
                (
                  <div className="font-[300] text-[18px] xl:text-[1.40625vw] leading-[25px] lg:leading-[32px] mb-9">
                    {AppConfig.html(subtitle.text)}
                  </div>
                )
              }


              {cta?.label && cta?.url && (
                <Anchor
                  href={cta?.url}
                  isExternal={!!cta?.isExternal}>
                  <Button className="mt-0 rounded-full px-8 py-2 font-medium tracking-[3px] text-[15px] xl:text-[1.1vw] bg-white border-[2px] border-black">
                    {cta?.label}
                  </Button>
                </Anchor>
              )}
            </div>
          </div>
        )
      }
    </div>
  );
};
export default TextCenterCtaInBottom;
 