interface Props {
  title: string;
  span?: string;
  h1?: boolean;
  description?: string;
  className?: string;
  color?: string;
}

const SectionHeading: React.FC<Props> = ({
  title,
  span,
  h1 = false,
  description,
  className = "",
  color = "",
}) => {
  return (
    <article className={`text-center flex flex-col gap-4 ${className}`}>
      {h1 ? (
        <>
          {span && <span className="font-normal lg:text-5xl playfair-display text-3xl uppercase text-dark">{span}</span>}
          <h1 className="lg:text-5xl/tight playfair-display text-3xl uppercase font-bold text-primary">
            {title}
          </h1>
        </>
      ) : (
        <h2 className="lg:text-[2.5rem]/none playfair-display text-2xl capitalize font-semibold text-primary">
          {span && <span className="font-normal">{span}</span>} {span && <br />}
          {title}
        </h2>
      )}
      {description && (
        <p
          className={` font-normal lg:text-[16px] text-base ${color ? color : "text-normal"}`}
        >
          {description}
        </p>
      )}
    </article>
  );
};

export default SectionHeading;
