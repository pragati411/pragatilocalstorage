export const CardItem = ({ isLiked, data, handleLikeFunc }) => {
  const isLikedCSS = {
    color: "white",
    backgroundColor: "red",
  };
  return (
    <div
      style={isLiked ? isLikedCSS : null}
      className="card-item"
      onClick={(e) => handleLikeFunc(data.id, isLiked)}
    >
      <p className="profileName">{data.name}</p>
    </div>
  );
};
