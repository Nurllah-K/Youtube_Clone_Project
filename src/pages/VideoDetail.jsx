import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
ReactPlayer;
import { getData } from "./../utils/getData";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import millify from "millify";
import StringArea from "../components/StringArea";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  useEffect(() => {
    setVideo(null);
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, [searchParams]);

  return (
    <div className="detail-page p-5 h-screen overflow-auto gap-20">
      <div>
        <ReactPlayer
          width={"100%"}
          height={"50vh"}
          playing
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        {!video ? (
          <p>Yükleniyor...</p>
        ) : (
          <>
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            <div className="flex justify-between ">
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12 cursor-pointer"
                  src={
                    video.channelThumbnail[video.channelThumbnail.length - 1]
                      .url
                  }
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-white rounded-full text-black px-3 h-9 font-bold transition hover:bg-gray-400">
                  Abone Ol
                </button>
              </div>
              <div className="flex  cursor-pointer item-center bg-[#272727] rounded-full">
                <div className="flex items-center gap-3 py-2 px-4 border-r">
                  <AiFillLike />
                  <p>{video.likeCount}</p>
                </div>
                <div className="flex items-center gap-3 py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
            </div>
            <div className="bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80 ">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} Görüntülenme</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <StringArea text={video.description} />
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col gap-5">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && <VideoCard isRow={true} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
