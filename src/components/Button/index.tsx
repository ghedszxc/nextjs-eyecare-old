// Modules
import { cva, cx, VariantProps } from "class-variance-authority";
import Link from "next/link";

// Components

const button = cva(
  [
    "overflow-hidden",

    // Fonts
    "font-medium",

    // Outline
    "outline",

    // Spacings
    "relative",

    // Transitions
    "transition-all ease-out duration-500",

    // Before
    "before:h-full before:w-full",
    "before:absolute before:top-0 before:left-0",
    "before:z-0",

    "before:ease-out before:duration-500",
  ],
  {
    variants: {
      intent: {
        primary: [
          "text-[1.45833vw]",
          "px-[3vw]",
          "py-[1.5vw]",

          "bg-transparent",

          "font-[500]",
          "tracking-[3px]",
          "rounded-[450px]",
        ],
      },
      size: {
        default: ["outline-1", "-outline-offset-2"],
      },
    },
  }
);

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
  href?: string;
  isExternal?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  href,
  intent = "primary",
  size = "default",
  className,
  isExternal,
  ...props
}) => {
  // Variables
  const cvaClass = button({ intent, size, className: className });

  return (
    <>
      {href ? (
        <Link
          href={href}
          target={isExternal ? "_blank" : "_self"}
          className="w-fit contents"
        >
          <button {...props} className={cvaClass}>
            <span className="z-10 relative flex align-middle justify-center">
              <span className="self-center">{children}</span>
            </span>
          </button>
        </Link>
      ) : (
        <button {...props} className={cvaClass}>
          <span className="z-10 relative flex align-middle justify-center">
            <span className="self-center">{children}</span>
          </span>
        </button>
      )}
    </>
  );
};

export default Button;
