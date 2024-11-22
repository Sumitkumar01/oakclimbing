interface container {
  children: React.ReactNode;
  id?: string;
  className?: string;
}
const Container: React.FC<container> = ({ children, id = "", className="" }) => {
  return (
    <div className={`${className} max-Width`} id={id}>
      {children}
    </div>
  );
};

export default Container;
