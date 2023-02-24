import { useState } from "react"
import "./App.css"
import YoutubePlayer from "./YoutubePlayer"
import neutralVideos from "./videos/neutral"
import About from "./About"

function App() {
  //videoların youtube id'lerini tutan state listesi
  let [vID, setVID] = useState(0)

  //sıradaki vidoyu oynatan fonksiyon
  let changeVideo = () => {
    setVID((id) => {
      if (id == neutralVideos.length - 1) {
        return 0
      } else {
        return id + 1
      }
    })
  }

  return (
    <div className="App">
      <YoutubePlayer
        videoId={neutralVideos[vID]}
        setVideo={changeVideo}
      ></YoutubePlayer>
      <About></About>
    </div>
  )
}

export default App
