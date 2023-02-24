import React, { useEffect, useRef } from "react"

const YoutubePlayer = ({ videoId, setVideo }) => {
  const playerRef = useRef(null)

  useEffect(() => {
    //sayfa ilk yuklendiğinde yt player oluştur.
    const player = new window.YT.Player(playerRef.current, {
      height: "360",
      width: "640",
      videoId: videoId,
      events: {
        onReady: (event) => {
          event.target.playVideo()
        },
        //video bittiğinde sıradaki videoyu oynatan fonksiyonu cagir
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            setVideo()
          }
        },
      },
    })

    return () => {
      player.destroy()
    }
  }, [videoId])

  return <div ref={playerRef} />
}

export default YoutubePlayer
