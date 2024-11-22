interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
  lgPy?: string;
}

const Section: React.FC<Props> = ({
  className = "",
  children,
  id = "",
  lgPy,
}) => {
  return (
    <section
      className={`${className}  ${lgPy ? `lg:${lgPy}` : "lg:py-10"} py-6 max-w-[1590px] mx-auto`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
