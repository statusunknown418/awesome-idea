import clsx from "clsx";
import { NextPage } from "next";
import Link from "next/link";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  Icon?: React.ReactElement;
  variant: "primary" | "secondary" | "link";
  href?: string;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Base = ({
  text,
  Icon,
  variant,
  onClick,
  loading,
  className: extraClassNames,
  ...props
}: IProps) => {
  return (
    <button
      className={clsx(
        "border py-1 px-3 rounded-md flex items-center justify-between gap-2",
        variant === "primary" && ["bg-purple-900 text-white"],
        variant === "secondary" && ["bg-neutral-800 text-white", "hover:bg-neutral-700"],
        variant === "link" && ["hover:text-purple-500"],
        "disabled:bg-neutral-600 disabled:backdrop-blur-sm",
        extraClassNames
      )}
      onClick={onClick}
      {...props}
    >
      {Icon && <span>{Icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

const ActionButton: NextPage<IProps> = (mainComponentProps) => {
  const { href, variant } = mainComponentProps;

  if (variant !== "link") {
    return <Base {...mainComponentProps} />;
  }

  return (
    <Link href={href || "/"} passHref>
      <Base {...mainComponentProps} />
    </Link>
  );
};

export default ActionButton;
