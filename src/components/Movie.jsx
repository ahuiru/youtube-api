import React from "react";

export const Movie = ({
  handleClick,
  // youtubeList,
  youtube,
  isThumbnails,
  setIsThumbnails,
}) => {
  const handleThumbnailClick = (id) => {
    // youtubeList.map((youtube, i) => (
    // if (youtube.id.videoId === id) {
    //   return <Movies youtube={youtube} />;
    // }
    setIsThumbnails(false);
    // youtube.id.videoId === id ? (
    //   <div key={i}>
    // <Movies youtube={youtube} />
    //      </div>
    // ) : (
    //   <img/>
    // )
    // ));
  };

  // const handleThumbnailClick = (id) => {
  //   youtubeList.map((youtube, i) => (
  //     // if (youtube.id.videoId === id) {
  //     //   return (
  //     //     <div key={i}>
  //     //       <Movies youtube={youtube} />
  //     //     </div>
  //     //   );
  //     // }
  //     youtube.id.videoId === id ? (
  //       <div key={i}>
  //     <Movies youtube={youtube} />
  //          </div>
  //     ) : (
  //       <img/>
  //     )
  //   ));
  // };

  // const a = (id) => {
  //   youtubeList.map((youtube) => (
  //     if (youtube.id.videoId === id) {

  //   }
  //   ))
  // }

  return (
    <div>
      {isThumbnails ? (
        <img
          src={`https://i.ytimg.com/vi/${youtube.id.videoId}/hqdefault.jpg`}
          alt=""
          onClick={() => handleThumbnailClick(youtube.id.videoId)}
        />
      ) : (
        // {youtubeList.map((youtube, i) => (
        //   <div key={i}>
        //     <img
        //       src={`https://i.ytimg.com/vi/${youtube.id.videoId}/hqdefault.jpg`}
        //       alt=""
        //       onClick={() => handleThumbnailClick(youtube.id.videoId)}
        //     />
        //   </div>
        // ))}

        // <div>
        //   <img
        //     src={`https://i.ytimg.com/vi/${youtube.id.videoId}/hqdefault.jpg`}
        //     alt=""
        //     onClick={() => handleThumbnailClick(youtube.id.videoId)}
        //   />
        // </div>

        <iframe
          title={youtube.etag}
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${youtube.id.videoId}?autoplay=1`}
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
        ></iframe>
      )}
    </div>
  );
};
