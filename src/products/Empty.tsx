type Props = {
  message: string;
};

const Empty = ({ message }: Props) => {
  return (
    <div className="text-center text-gray-600 mt-20 space-y-2">
      <p className="text-xl">{message}</p>
    </div>
  );
};

export default Empty;
