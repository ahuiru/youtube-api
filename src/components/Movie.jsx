import React from "react";

export const Movie = ({
  handleClick,
  youtubeList,
  isThumbnails,
  setIsThumbnails,
}) => {
  const handleThumbnailClick = (id) => {
    youtubeList.map((youtube, i) => {
      if (youtube.id.videoId === id) {
        return (
          <div key={i}>
            <iframe
              title={youtube.etag}
              id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${youtube.id.videoId}?autoplay=1`}
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameborder="0"
            ></iframe>
          </div>
        );
      }
    });
  };

  return (
    <div>
      {/* {isThumbnails ? ( */}
      {/* <img
        src={`https://i.ytimg.com/vi/${youtubeList.id.videoId}/hqdefault.jpg`}
        alt=""
        onClick={() => handleThumbnailClick(youtubeList.id.videoId)}
      /> */}

      {youtubeList.map((youtube, i) => (
        <div key={i}>
          <img
            src={`https://i.ytimg.com/vi/${youtube.id.videoId}/hqdefault.jpg`}
            alt=""
            onClick={() => handleThumbnailClick(youtube.id.videoId)}
          />
        </div>
      ))}

      {/* ) : (
        <iframe
          title={youtube.etag}
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${youtube.id.videoId}?autoplay=1`}
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"
        ></iframe>
      )} */}
    </div>
  );
};
