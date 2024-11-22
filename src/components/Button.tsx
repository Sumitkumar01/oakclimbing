import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const Button: React.FC<Props> = ({ children, className, href }) => {
  return (
    <Link
      href={href}
      className={`${className} w-fit source-code-pro rounded-lg capitalize px-5 py-2 bg-primary text-white flex items-center justify-center hover:scale-x-105 transition-all ease-in-out hover:bg-bgLight hover:text-primary hover:shadow-2xl font-medium border border-primary`}
    >
      {children}
    </Link>
  );
};

export default Button;
