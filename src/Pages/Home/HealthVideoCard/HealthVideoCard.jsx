import ReactPlayer from "react-player";

const HealthVideoCard = ({ sVideo }) => {
  const { url, title } = sVideo;
  return (
    <>
      <div className="card">
        <figure>
          <ReactPlayer controls muted url={url}></ReactPlayer>
        </figure>
        <h2 className="text-xl text-center font-bold mt-2">{title}</h2>
      </div>
    </>
  );
};

export default HealthVideoCard;
