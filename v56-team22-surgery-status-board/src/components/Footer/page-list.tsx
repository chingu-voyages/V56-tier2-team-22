import { Link } from 'react-router';

type Navlink = {
  label: string;
  href: string;
};

type PagesListProps = {
  pages: Navlink[];
};

export const PageList = ({ pages }: PagesListProps) => {
  return (
    <div className="my-4 md:my-0">
      <h1 className="px-4 mb-3 text-lg font-semibold text-white ">Pages</h1>
      <div className="flex flex-col gap-2 px-4">
        {pages.map((page, index) => (
          <Link
            key={index}
            to={page.href}
            className="font-mono text-md hover:text-white transition-colors"
          >
            {page.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
