import parse, { HTMLReactParserOptions } from "html-react-parser";
import { getAkamayUrl, getCoreMediaUrl } from "@/lib/utilities";
import { META_IMAGES_NAMES } from "./constants/METATAGS";
import { TPadding } from "@/models/IPadding";
import { FORM_TRANSLATIONS } from "@/lib/constants/FORM_TRANSLATIONS";

const AppConfig = (() => {
  const specialCharMap: { [key: string]: string } = {
		'&lt;': '<',
		'&gt;': '>',
		'&amp;': '&',
		'&quot;': '"',
		'&apos;': "'"
	};

	const replaceSpecialCharsUsingMap = (str: string) => {
		return str.replace(/&lt;|&gt;|&amp;|&quot;|&apos;/g, (match) => specialCharMap[match]);
	}

  // Newline Parser
  const newLineToHTML = (str: string) => {
    if (typeof str === "string") {
      return (str || "")
        ?.replace(/&lt;hr&gt;/g, "<hr />")
        ?.replace(/&lt;br&gt;/g, "<br />")
        ?.replace(/\n/g, "<br />");
    } else {
      return "";
    }
  };

  // URI Temp
  const setUriTemplates = (str: string = ""): string | null => {
    if (!str) return null;
  
    const processTemplate = (template: string, replacer: (match: string) => string) => {
      const regex = new RegExp(`${template}"(.+?)"`, "g");
      return str.replace(regex, (_, match) => replacer(match));
    };
  
    str = processTemplate("data-src=", (match) =>
      `src="${getAkamayUrl(match.replace("{cropName}/{width}/", ""))}"`
    );
  
    str = processTemplate("data-href=", (match) => {
      const rawHref = match.replace("eyc-", "");
      const href = rawHref.includes("coremedia://")
        ? rawHref.replace("coremedia://", "")
        : rawHref.includes("media://")
        ? rawHref.replace("media://", "")
        : rawHref;
  
      return `href="${href.endsWith("/") ? href : getAkamayUrl(href) + "/"}" target="_blank"`;
    });
  
    return str;
  };

  // Decode HTML Entities
  const decodeHTMLEntities = (str: string) => {
    const textArea = globalThis?.window?.document?.createElement("textarea");
    let convertedEntities = str;

    if (textArea) {
      textArea.innerHTML = str;
      convertedEntities = textArea.value;

      return convertedEntities;
    }

    return convertedEntities;
  };

  // Styled HTML Text
  const styledHTMLText = (str: string) => {
    const decodedEntities: string = decodeHTMLEntities(str || "");
    let convertedEntities = "";
    convertedEntities = decodedEntities
      .toString()
      .replace(
        /<iframe /g,
        "<div class='longtext-iframe' style='position: relative; width: 100%; padding-bottom: 56.326%'><iframe style='position: absolute; left: 0; top: 0; width: 100%; height: 100%;' "
      );
    convertedEntities = convertedEntities.replace(
      /<\/iframe>/g,
      "</iframe></div>"
    );
    convertedEntities = convertedEntities.replace(
      /<table>/g,
      "<div class='longtext-table' style='overflow-x: auto;'><table>"
    );
    convertedEntities = convertedEntities.replace(
      /<\/table>/g,
      "</table></div>"
    );

    return convertedEntities;
  };

  // HTML Parse
  const html = (str?: string | null, options?: { ignoreTarget?: boolean, targetWindow?: '_self' | '_blank' }) => {
    const newLine = replaceSpecialCharsUsingMap(styledHTMLText(str || "") || "");
    const templated = setUriTemplates(newLine) || "";

    const parserOptions: HTMLReactParserOptions = {
      replace: (domNode: any) => {
        // parse images
        if (domNode?.name === "img" && domNode?.type === "tag") {
          const template = domNode?.attribs?.["data-uritemplate"];
          if (template) {
            const image = template.replace("{cropName}/{width}/", "");
            domNode.attribs["src"] = getAkamayUrl(image);
          }
        }

        // parse links and footnotes
        if (domNode?.name === "a" && domNode?.type === "tag") {
          const template =
            domNode?.attribs?.["data-href"] || domNode?.attribs?.["href"];
          if (template) {
            // parse coremedia urls
            const href = getCoreMediaUrl((template || "").replace(/ww\//g, ""));

            domNode.attribs.className = "article-anchor";
            domNode.attribs["href"] = href;
          }

          // Skip target attribute if ignoreTarget is true
          if (!options?.ignoreTarget) {
            // If targetWindow is provided, use it
            if (options?.targetWindow) {
              domNode.attribs["target"] = options.targetWindow;
            } else if (
              domNode?.attribs?.href?.charAt(0) === "/" ||
              domNode?.attribs?.href?.startsWith("#") ||
              domNode?.attribs?.href?.includes("luxotticaeyecare.luxottica.com") ||
              domNode?.attribs?.href?.includes("localhost:3000") ||
              domNode?.attribs?.href?.includes("preview-stageuatelec.luxgroup.net") ||
              domNode?.attribs?.href?.includes("preview-stageelec.luxgroup.net")
            ) {
              domNode.attribs["target"] = "_self";
            } else {
              domNode.attribs["target"] = "_blank";
            }
          }
        }

        return domNode;
      },
    };

    return parse(templated?.replace(/eyc-/g, ""), parserOptions);
  };

  // Placement Merger
  const mergePlacement = (
    data: any,
    newViewType: string,
    viewTypeToMerge: string[]
  ) => {
    const dataWithId = data?.map((placement: any, key: number) => ({
      ...placement,
    }));

    const ifFirstIndexAvailable = dataWithId?.find(
      (obj: any) => obj?.placements[0]?.viewtype === viewTypeToMerge[0]
    );

    if (!ifFirstIndexAvailable) return null;

    const filteredData = dataWithId
      ?.filter((obj: any) => {
        return viewTypeToMerge.includes(obj?.placements[0]?.viewtype);
      })
      ?.map((obj: any) => obj);

    return {
      placements: [
        {
          name: newViewType,
          viewtype: newViewType,
          items: filteredData,
        },
      ],
    };
  };

  // Get Meta Tags
  const getMetaTagsLinks = (metaTagsData?: any): [] => {
    try {
      const html = metaTagsData?.placements[0]?.items[0]?.html;
      const image = metaTagsData?.placements[0]?.items[1]?.data?.uri || "";

      const list = html?.split("<meta")?.map((link: any) => {
        const cleanupLink = link?.trim()?.replace(/\\n/g, "");

        const name = (cleanupLink?.split('name="')[1] || "")?.split('"')[0];
        const property = (cleanupLink?.split('property="')[1] || "")?.split(
          '"'
        )[0];

        const isImage = META_IMAGES_NAMES?.some(
          (itemName: string) => itemName === name || itemName === property
        );
        const content = !isImage
          ? (cleanupLink?.split('content="')[1] || "")?.split('"')[0]
          : getAkamayUrl(image || "");

        return { property, content, name };
      });

      list?.shift();

      return list || [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  // Strip elements
  const stripHtml = (html: string) => {
    const tmp = globalThis?.window?.document?.createElement("DIV");

    if (!tmp) return html;

    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // Get widget Paddings
  type IBreakPoint = "lg" | "md" | "xl" | "sm" | "xs";
  const getWidgetPadding = (padding: TPadding, breakpoint?: IBreakPoint) => {
    if (padding === "bottom") {
      switch (breakpoint) {
        case "lg":
          return "lg:pt-0";
        case "md":
          return "md:pt-0";
        case "xl":
          return "xl:pt-0";
        case "sm":
          return "sm:pt-0";
        case "xs":
          return "xs:pt-0";
        default:
          return "pt-0";
      }
    } else if (padding === "top") {
      switch (breakpoint) {
        case "lg":
          return "lg:pb-0";
        case "md":
          return "md:pb-0";
        case "xl":
          return "xl:pb-0";
        case "sm":
          return "sm:pb-0";
        case "xs":
          return "xs:pb-0";
        default:
          return "pb-0";
      }
    } else {
      return "";
    }
  };

  // Get translated value by type
  const getTranslatedValue = (lang?: string, type?: string) => {
    if (!lang || !type) return "Missing lang or type";
    return FORM_TRANSLATIONS?.[lang]?.[type] || "";
  };

  return {
    html,
    mergePlacement,
    setUriTemplates,
    getMetaTagsLinks,
    stripHtml,
    styledHTMLText,
    getWidgetPadding,
    getTranslatedValue,
  };
})();

export default AppConfig;
