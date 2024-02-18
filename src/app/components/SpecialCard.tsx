type Props = {
  children: any;
  backgroundImage?: string;
};
const SpecialCard: React.FC<Props> = ({ children, backgroundImage }) => {
  return (
    <div
      className="border border-gray-400 rounded-lg p-1 shadow-lg m-10 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-400 bg-opacity-50 rounded-lg"></div>
      <div className="relative bg-transparent bg-opacity-60 rounded p-2 z-2">
        {children}
      </div>
    </div>
  );
};

export default SpecialCard;
