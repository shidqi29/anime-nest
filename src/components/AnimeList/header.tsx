import Link from "next/link";

type HeaderProps = {
  title?: string;
  linkHref?: string;
};

export const Header = ({ title, linkHref }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4">
      <h2 className="text-2xl font-bold capitalize">{title}</h2>
      {linkHref && (
        <Link
          href={linkHref}
          className="transition-colors hover:text-default-500"
        >
          See More
        </Link>
      )}
    </div>
  );
};
