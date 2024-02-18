type Props = {
  children: any;
};
const SpecialCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="border border-gray-400 border-opacity-40 rounded-lg p-1 shadow-lg m-10">
      <div className="bg-transparent bg-opacity-60 rounded p-2">{children}</div>
    </div>
  );
};

export default SpecialCard;
