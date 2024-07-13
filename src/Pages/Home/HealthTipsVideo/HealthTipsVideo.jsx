// import { createElement } from "react";
import { useEffect, useState } from "react";
import HealthVideoCard from "../HealthVideoCard/HealthVideoCard";

const HealthTipsVideo = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetch("video.json")
      .then((res) => res.json())
      .then((data) => setVideo(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {video.map((sVideo) => (
          <HealthVideoCard key={sVideo.id} sVideo={sVideo}></HealthVideoCard>
        ))}
      </div>
    </>
  );
};

export default HealthTipsVideo;
