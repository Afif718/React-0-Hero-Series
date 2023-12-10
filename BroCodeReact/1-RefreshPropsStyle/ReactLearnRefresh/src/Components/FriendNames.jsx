const FriendNames = ({ names }) => {
  return (
    <>
      {names.map((nama) => (
        <li key={nama}>{nama}</li>
      ))}
    </>
  );
};

export default FriendNames;
