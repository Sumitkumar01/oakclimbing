interface props {
  title: string;
  para?: string;
}

const PageTopBanner: React.FC<props> = ({ title, para }) => {
  return (
    <div className="bg-bgLight flex flex-col justify-center items-center gap-5 py-10 ">
      <h1 className="lg:text-[2.5rem]/none playfair-display text-4xl capitalize font-bold text-primary">
        {title}
      </h1>
      <p className="text-normal font-medium text-sm lg:text-[16px] text-center max-w-[1300px] mx-auto px-[1.2rem] md:px-0">
        {para}
      </p>
    </div>
  );
};

export default PageTopBanner;
