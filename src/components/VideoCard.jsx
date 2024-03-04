import millify from "millify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      className={`cursor-pointer ${isRow && "flex gap-2 items-center"}`}
    >
      <div>
        <img
          className={`max-w-none rounded-lg w-full  ${isRow && "w-40 h-20"}`}
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[video.richThumbnail.length - 1].url
              : video.thumbnail && video.thumbnail.length > 0
              ? video.thumbnail[video.thumbnail.length - 1].url
              : ""
          }
        />
      </div>
      <div className="flex gap-4 mt-5">
        {video &&
          video.channelThumbnail &&
          video.channelThumbnail.length > 0 && (
            <img
              src={video.channelThumbnail[0].url}
              className={`w-14 h-14 rounded-full ${isRow && "hidden"}`}
            />
          )}
        <div className="text-[#aaa] ">
          <h4 className={`font-bold text-white ${isRow && "line-clamp-1"} `}>
            {video.title}
          </h4>

          <p> {video.channelTitle} </p>
          <div className={`flex gap-2 ${isRow && "text-sm"}`}>
            <p>{millify(video.viewCount)} Görüntülenme</p>
            <p className="ml-4">{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
