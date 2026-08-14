import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    }
  },
  theme: {
    extend: {
      colors: {},
      typography: () => ({
        DEFAULT: {
          css: {},
        },
        heroBannerDesktop: {
          css: {
            'h1, h2': {
              fontSize: "5.75vw",
              letterSpacing: "0.5vw",
              lineHeight: '1.1',
              fontWeight: "300",
              color: "#FFFFFF",
              textAlign: "center",
              marginBottom: "2vw",

              "&:has(+ h1)": {
                marginBottom: "0",
              },
            },
            p: {
              fontSize: "1.5rem",
              fontWeight: "500",
              color: "#FFFFFF",
              padding: "0 8vw 2vw",
              textAlign: "center",
              lineHeight: '1.2',
            }
          },
        },
        heroBannerMobile: {
          css: {
            'h1, h2': {
              fontSize: "45px",
              letterSpacing: "3px",
              // lineHeight: "32px",
              lineHeight: "1.1",
              marginTop: "5px",
              marginBottom: "35px",
              color: "#FFFFFF",
              textAlign: "center",
              padding: "0 5vw",

              "&:has(+ h1)": {
                marginBottom: "0",
              },
              "&:has(+ h2)": {
                marginBottom: "0",
              },
            },
            p: {
              // fontSize: "11px",
              fontSize: "16px",
              fontWeight: "300",
              padding: "0 8vw 2vw",
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: "normal",
            }
          },
        },
        textCenterCtaInBetweenDesktop: {
          css: {
            h3: {
              // border: '1px solid green'
              fontSize: "1.40625vw",
              lineHeight: "1.875vw",
              marginBottom: "3.64583vw",
              padding: "0 15vw",
              marginTop: "0"
            }
            // h2: {
            //   fontSize: "110px",
            //   letterSpacing: "12px",
            //   lineHeight: "117px",
            //   marginTop: "16px",
            //   marginBottom: "35px",
            //   fontWeight: "300"
            // },
            // p: {
            //   fontSize: "30px",
            //   fontWeight: "400"
            // }
          },
        },
        iconCtaDesktop: {
          css: {
            h2: {
              fontSize: "4.16667vw",
              fontWeight: "100",
            },
            p: {
              fontSize: "2.29167vw", //"30px",
              fontWeight: "100",
              textAlign: "center",
              color: "#53575F",
              marginBottom: "10px"
            }
          },
        },
        iconCtaMobile: {
          css: {
            h2: {
              fontSize: "35px",
              fontWeight: "100",
            },
            p: {
              fontSize: "20px", //"30px",
              fontWeight: "100",
              textAlign: "center",
              color: "#53575F",
              marginBottom: "10px"
            }
          },
        },
        textCenterWithMediaDesktop: {
          css: {
            h3: {
              fontSize: "2.23958vw",
              marginBottom: "6.25vw",
            },
            a: {
              fontSize: "1.66667vw",
              textDecoration: "underline",
              marginBottom: "3.125vw",
              fontWeight: "bold"
            },
            img: {
              marginTop: "0",
              width: "100vw"
            },

            h2: {
              fontSize: "1.40625vw",
              marginTop: "2.60417vw",
              marginBottom: "2.60417vw",
              fontWeight: "100",
              color: "#53575f"
            }
          },
        },
        textCenterWithMediaMobile: {
          css: {
            h3: {
              fontSize: "17px",
              marginBottom: "45px",
            },
            a: {
              fontSize: "15px",
              textDecoration: "underline",
              marginBottom: "15px",
              fontWeight: "bold"
            },
            img: {
              marginTop: "10px",
              width: "100vw"
            },
            
            h2: {
              fontSize: "17px",
              marginTop: "25px",
              marginBottom: "25px",
              fontWeight: "100",
              color: "#53575f"
            }
          },
        },
        Teaser3070withCTADesktop: {
          css: {
            h2: {
              fontSize: "2.23958vw",
              fontWeight: "300",
              lineHeight: "normal",
              marginBottom: "2.12vw"
            },
            h3: {
              fontSize: "1.40625vw",
              marginBottom: "-10px",
              letterSpacing: "normal",
              color: "#53575F",
              fontWeight: "300",
              lineHeight: "2.5vw"
            }
          },
        },
        Teaser3070withCTAMobile: {
          css: {
            h2: {
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "normal",
              marginBottom: "2.12vw"
            },
            h3: {
              fontSize: "17px",
              marginBottom: "-10px",
              letterSpacing: "normal",
              color: "#53575F",
              fontWeight: "300",
              lineHeight: "normal"
            }
          },
        },
        teaser5050withCTADesktop: {
          css: {
            p: {
              fontWeight: "100",
              color: "#53575f",
              fontSize: "1.40625vw",
              lineHeight: "1.875vw"
            },
            strong: {
              fontWeight: "900",
              fontSize: "1.40625vw",
              color: "#53575f"
            }
          }
        },
        teaser5050withCTAMobile: {
          css: {
            p: {
              fontWeight: "100",
              color: "#53575f",
              fontSize: "18px",
              lineHeight: "36px"
            },
            strong: {
              fontWeight: "900",
              fontSize: "18px",
              color: "#53575f"
            }
          }
        },
        longTextCenterCtaBottomDesktop: {
          css: {
            h3: {
              fontSize: "4.16667vw",
              lineHeight: "1.2",
              fontWeight: "300",
              marginTop: "3vw",
              marginBottom: "2vw",

              "& + h3": {
                marginTop: "0",
              },
              "&:has(+ h3)": {
                marginBottom: "0",
              },
            },
            p: {
              fontSize: "1.40625vw",
              color: "rgb(83, 87, 95)",
              marginTop: "0",
              lineHeight: "1.7",
              strong: {
                fontWeight: "900",
                color: "rgb(83, 87, 95)"
              }
            },
            sup: {
              fontSize: "1.40625vw",
              color: "rgb(0, 0, 0)"
            },
            sub: {
              fontSize: "1vw",
              color: "rgb(10, 10, 10)",
            },
            ul: {
              listStyle: "disc",
              width: "85%",
              margin: "auto",
              fontSize: "1.4vw",
              lineHeight: "2.4vw",
              color: "rgb(83, 87, 95)",
              textAlign: "left",
              marginBottom: "2vw"
            },
            li: {
              padding: "0.5em",
            },
            strong: {
              fontWeight: "300",
              color: "#000",
            },
          },
        },
        longTextCenterCtaBottomMobile: {
          css: {
            h3: {
              fontSize: "30px",
              lineHeight: "35px",
              fontWeight: "300",
              marginTop: "3vw",
              marginBottom: "2vw",
              
              "& + h3": {
                marginTop: "0",
              },
              "&:has(+ h3)": {
                marginBottom: "0",
              },
            },
            p: {
              fontSize: "16px",
              color: "rgb(83, 87, 95)",
              strong: {
                fontWeight: "900",
                color: "rgb(83, 87, 95)"
              }
            },
            sup: {
              fontSize: "16px",
              color: "rgb(0, 0, 0)"
            },
            sub: {
              fontSize: "1vw",
              color: "rgb(10, 10, 10)",
            },
            ul: {
              listStyle: "disc",
              width: "95%",
              margin: "auto",
              fontSize: "16px",
              lineHeight: "normal",
              color: "rgb(83, 87, 95)",
              textAlign: "left",
              paddingLeft: "1.5em",
              marginBottom: "5vw"
            },
            li: {
              padding: "0.5em",
            },
            strong: {
              fontWeight: "300",
              color: "#000",
            },
          },
        },
        textCenterCtaInBottomDesktop: {
          css: {
            h1: {
              fontSize: "2.2vw",
              lineHeight: "3.2vw",
              fontWeight: "900",
              marginBottom: "2.34375vw"
            },
            h2: {
              fontSize: "2vw",
              color: "rgb(83, 87, 95)",
              marginBottom: "0"
            },
            h3: {
              fontSize: "2.23958vw",
              lineHeight: "3.48958vw",
              marginTop: "3vw",
              marginBottom: "2vw"
            },
            p: {
              lineHeight: "1.7",
              fontWeight: "100",
              fontSize: "1.40625vw",
              marginBottom: "30px",
              color: "rgb(83, 87, 95)"
            },
            blockquote: {
              p: {
                fontSize: "1.40625vw",
                lineHeight: "1.875vw",
                marginBottom: "3.64583vw",
                color: "#000000"
              }
            }
          },
        },
        textCenterCtaInBottomMobile: {
          css: {
            h1: {
              fontSize: "30px",
              lineHeight: "35px",
              fontWeight: "bold",
              marginBottom: "30px"
            },
            h2: {
              fontSize: "22px",
              color: "rgb(83, 87, 95)",
              marginBottom: "30px"
            },
            h3: {
              fontSize: "18px",
              lineHeight: "36px",
              marginTop: "30px"
            },
            p: {
              lineHeight: "1.5",
              fontWeight: "100",
              fontSize: "16px",
              marginBottom: "10px",
              color: "rgb(83, 87, 95)"
            },
            blockquote: {
              p: {
              fontSize: "20px",
              lineHeight: "38px",
              marginBottom: "30px",
              color: "#000000"
              }
            }
          },
        },
        
        textCenterCtaInBottomSubtitleDesktop: {
          css: {
            p: {
              fontSize: "2.23958vw",
              lineHeight: "2.70833vw"
            },
            strong: {
              fontSize: "2.23958vw",
              lineHeight: "2.70833vw",
              fontWeight: "500"
            }
          }
        },
        textCenterCtaInBottomSubtitleMobile: {
          css: {
            p: {
              fontSize: "27px",
              lineHeight: "40px"
            },
            strong: {
              fontSize: "27px",
              lineHeight: "40px",
              fontWeight: "500"
            }
          }
        },
        
        
        modalDesignDesktop: {
          css: {
            display: "none",
            position: "fixed",
            zIndex: "50",
            left: "11.5vw",
            top: "7vh",
            width: "76vw",
            height: "70vh",
            backgroundColor: "#ffffff",
            textAlign: "left",
          }
        },
        modalDesignMobile: {
          css: {
            display: "none",
            position: "fixed",
            zIndex: "50",
            left: "2vw",
            top: "17vh",
            width: "96vw",
            height: "31vh",
            backgroundColor: "#e9e9e9",
            textAlign: "left",
          }
        },
        
        TextCenterWidePaddingDesktop: {
          css: {
            h3: {
              fontSize: "4.16667vw",
              lineHeight: "4.6875vw",
              fontWeight: "300",
              marginBottom: "2.60417vw",
              marginInline: "10vw",
            },
            p: {
              fontSize: "1.40625vw",
              lineHeight: "1.875vw",
              color: "rgb(0, 0, 0)",
              marginRight:"10vw",
              marginLeft:"10vw",

              strong: {
                fontWeight: "700",
              },
            },
            a: {
              textDecoration: "auto",
              color: "slateblue",
              "&:hover": {
                color: "#000",
                textDecoration: "underline",
              }
            },
          },
        },
        TextCenterWidePaddingMobile: {
          css: {
            h3: {
              fontSize: "40px",
              lineHeight: "45px",
              marginBottom: "15px",
            },
            p: {
              fontSize: "18px",
              lineHeight: "36px",
              color: "rgb(0, 0, 0)",
              marginRight:"30px",
              marginLeft:"30px",
              
              strong: {
                fontWeight: "700",
              },
            },
            a: {
              textDecoration: "auto",
              color: "slateblue",
              "&:hover": {
                color: "#000",
                textDecoration: "underline",
              }
            },
          },
        },
       
        lrDynamicCtaDesktop: {
          css: {
            blockquote: {
              p: {
                fontSize: "2.23958vw",
                color: "#53575f",
                fontWeight: "800",
                // marginBottom: "15px",
                lineHeight: "normal"
              }
            },
            p: {
              fontSize: "1.40625vw",
              lineHeight: "1.875vw",
              color: "#53575f",
              fontWeight: "200",
              strong: {
                fontWeight: "bold"
              }
            }
          }
        },
        lrDynamicCtaMobile: {
          css: {
            blockquote: {
              p: {
                fontSize: "2.23958vw",
                color: "#53575f",
                fontWeight: "800",
                // marginBottom: "20px",
                lineHeight: "40px"
              }
            },
            p: {
              fontSize: "1.40625vw",
              lineHeight: "1.875vw",
              color: "#53575f",
              fontWeight: "200",
            }
          }
        },
        longTextJustifyWithCtaDesktop: {
          css: {
            'h1, h3': {
              fontSize: "4.16667vw",
              lineHeight: "4.6875vw",
              fontWeight: "300",
              margin: "0 10vw 2.60417vw 10vw"
            },
            p: {
              fontSize: "1.4vw",
              color: "rgb(83, 87, 95)",
              lineHeight: "1.875vw",
              margin: "0 12vw 0 12vw",
              textAlign: "justify",
              sup: {
                fontSize: "1.40625vw",
                color: "rgb(0, 0, 0)"
              },
            },
          },
        },
        longTextJustifyWithCtaMobile: {
          css: {
            'h1, h3': {
              fontSize: "35px",
              lineHeight: "45px",
              fontWeight: "300",
              margin: "0 0 10px 0"
            },
            p: {
              fontSize: "1.4vw",
              color: "rgb(83, 87, 95)",
              lineHeight: "30px",
              margin: "10px 10px 0 10px",
              textAlign: "justify",
              sup: {
                fontSize: "16px",
                color: "rgb(0, 0, 0)"
              },
            },
          },
        },
        textFootnoteDesktop: {
          css: {
            p: {
              fontSize: "1.3vw",
              color:"rgb(0, 0, 0)",
              margin: "0 10vw 0 10vw",
              lineHeight:"1.875vw",
              textAlign: "justify"
            },
          },
        },
        textFootnoteMobile: {
          css: {
            p: {
              fontSize: "18px",
              color: "rgb(0, 0, 0)",
              margin: "0 30px 0 30px",
              textAlign: "justify"
            },
          },
        },
        textCenterWithColumns: {
          css: {
            table: {
              display: 'grid',
              gridTemplateColumns: '50% 45%',
              gap: '3vw',
              border: 'none',
              width: '100%',
              margin: '0',
              padding: '0 2vw',
              
              'tbody, tr': {
                display: 'contents',
                border: 'none',
                padding: '0',
              },
              'td': {
                display: 'block',
                width: '100%',
                padding: '0',
                border: 'none',
              }
            },
            'sup': {
              fontSize: '4.16667vw',
              lineHeight: '4.94792vw',
              fontWeight: '300',
              color: '#000000',
              marginBottom: '1.5vw',
              display: 'block',
              verticalAlign: 'baseline',
              top: '0',
              letterSpacing: '0.05em',
            },
            'ol, ul': {
              listStyleType: 'decimal',
              paddingLeft: '1.5vw',
              marginBottom: '1.5vw',
              'li': {
                fontSize: '1.5vw',
                fontWeight: '300',
                color: '#53575F',
                marginBottom: '1vw',
                paddingLeft: '0.5vw',
                '&::marker': {
                  color: '#000000',
                }
              }
            },
            'ul': {
              listStyleType: 'disc',
            },
            'strong': {
              color: '#53575F',
              fontWeight: '500',
              fontSize: '1.5vw',
            },
            'h2': {
              fontSize: '30px',
              fontWeight: '300',
              color: '#000000',
              textTransform: 'uppercase',
              marginBottom: '20px'
            },
            'p': {
              fontSize: '1.5vw',
              lineHeight: '1.5',
              fontWeight: '300',
              color: '#53575F',
            },
          }
        },
        textCenterWithColumnsMobile: {
          css: {
            table: {
              display: 'grid',
              gridTemplateColumns: '100%',
              gap: '4vw',
              border: 'none',
              width: '100%',
              margin: '0',
              padding: '0 4vw',
              
              'tbody, tr': {
                display: 'contents',
                border: 'none',
                padding: '0',
              },
              'td': {
                display: 'block',
                width: '100%',
                padding: '0',
                border: 'none',
              }
            },
            'sup': {
              fontSize: '33px',
              lineHeight: 'normal',
              fontWeight: '300',
              color: '#000000',
              marginBottom: '1.5vw',
              display: 'block',
              verticalAlign: 'baseline',
              top: '0',
            },
            'p': {
              fontSize: '16px',
              lineHeight: '1.8',
              fontWeight: '300',
              color: '#53575F',
            },
            'ol, ul': {
              listStyleType: 'decimal',
              paddingLeft: '1.5vw',
              marginBottom: '1.5vw',
              'li': {
                fontSize: '16px',
                fontWeight: '300',
                color: '#53575F',
                marginBottom: '1vw',
                paddingLeft: '0.5vw',
                '&::marker': {
                  color: '#000000',
                }
              }
            },
            'ul': {
              listStyleType: 'disc',
            },
            'strong': {
              color: '#53575F',
              fontWeight: '500',
              fontSize: '16px',
            },
            'h2': {
              fontSize: '30px',
              fontWeight: '300',
              color: '#000000',
              textTransform: 'uppercase',
              marginBottom: '20px'
            },
          }
        },
        iconTeamDesktop: {
          css: {
            p: {
              fontWeight: "100",
              color: "#727b7b",
              fontSize: "11px",
              a: {
                '&:hover': {
                  textDecoration: "underline"
                },
                strong: {
                  fontWeight: 100,
                  color: "#000000",
                  float: "left",
                  marginRight: "0",
                  '&:hover': {
                    textDecoration: "underline"
                  },
                }
              }
              
            },
          }
        },
        iconTeamMobile: {
          css: {
            p: {
              fontWeight: "100",
              color: "#727b7b",
              fontSize: "11px",
              a: {
                '&:hover': {
                  textDecoration: "underline"
                },
                strong: {
                  fontWeight: 100,
                  color: "#000000",
                  float: "right",
                  marginRight: "-30px",
                  '&:hover': {
                    textDecoration: "underline"
                  },
                }
              }
              
            },
          }
        },

        displayBullet: {
          css: {
            ul: {
              listStyle: "disc",
            },
            li: {
              padding: "0.5em",
            },
          }
        },

        textPolicies: {
          css: {
            maxWidth: 'min(80vw, 1200px)',
            margin: '0 auto',
            padding: '0 clamp(1rem, 5%, 2rem)',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
            
            // Modified table styles
            'table': {
              width: '100%',
              tableLayout: 'fixed',
              border: '1px solid black',
            },
            'table tr:first-child': {
              backgroundColor: 'lightgray',
            },
            'table td, table th': {
              border: '1px solid black',
              padding: '0.5rem'
            },
            // Override the typography plugin's default padding
            'tbody td:first-child, tfoot td:first-child': {
              paddingLeft: '0.5rem',
              paddingInlineStart: '0.5rem',
            },

            // Existing styles
            color: '#000',
            fontWeight: '300',
            
            // Headings
            'h1, h2, h3, h4, h5, h6': {
              color: '#000',
              fontWeight: '600',
            },

            'h4': {
              fontSize: '18px',
            },

            'h1.align--center': {
              textAlign: 'center',
            },
            
            // Lists
            'ol': {
              listStyleType: 'decimal',
              marginLeft: '1.5em',
            },
            
            // Paragraphs and spacing
            'p': {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            
            'p.align--center': {
              textAlign: 'center',
            },
            
            // Strong/bold text
            'strong': {
              color: '#000',
              fontWeight: 'bold',
            },

            // Links
            'a, a strong': {
              color: '#0000EE',
              textDecoration: 'none',
              '&:hover': {
                color: '#000',
                textDecoration: 'underline',
              },
            },
            
            // Horizontal rules
            'hr': {
              borderColor: '#000',
              marginTop: '2em',
              marginBottom: '2em',
            },
          },
        },

        
        readMoreModalDesktop: {
          css: {
            display: "none",
            position: "fixed",
            zIndex: "50",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "transparent",
            textAlign: "left",
            padding: "30vh 25vw 0 25vw"
          }
        },
        readMoreModalMobile: {
          css: {
            display: "none",
            position: "fixed",
            zIndex: "50",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "transparent",
            textAlign: "left",
            padding: "27vh 2vw 0 2vw"
          }
        },

        textLineQuoteDesktop: {
          css: {
            p: {
              fontSize: "1.125em",
              letterSpacing: ".0625em",
              lineHeight: "1.125em",
              strong: {
                fontWeight: "900"
              }
            },
            blockquote: {
              borderLeft: "5px solid #eee",
              padding: "5px 0 1px 30px",
              margin: "15px 0 15px",
              
              fontSize: "1.125em",
              lineHeight: "1.125em",
              strong: {
                fontWeight: "900",
              },
              
              ul: {
                listStyle: "disc",
                marginBottom: "30px"
              },
              li: {
                margin: "5px 0 0 40px",
                fontSize: "17.5px",
              },
            }
          }
        },
        textLineQuoteMobile: {
          css: {
            p: {
              lineHeight: "1.125em",
              fontWeight: "100",
              strong: {
                fontWeight: "900"
              }
            },
            blockquote: {
              borderLeft: "5px solid #eee",
              padding: "5px 0 1px 20px",
              margin: "15px 0 15px",
              
              lineHeight: "1.125em",
              fontWeight: "100",
              strong: {
                fontWeight: "900"
              },
              
              ul: {
                listStyle: "disc",
                marginBottom: "30px"
              },
              li: {
                margin: "5px 0 0 30px",
                fontSize: "15px",
                lineHeight: "20px"
              },
            }
          }
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
