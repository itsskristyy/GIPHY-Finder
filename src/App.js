import { useEffect, useState, componentDidMount } from "react";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchField"
import ImageTable from "./components/ImageTable"
import fetchImg from './scripts/fetchImg'
import './App.css'
import image from "./image/GIPHY_Images.png"


const apiKey = "ebk9TgbXWDj65HhL7XZbexSaBR4XYyQJ"



function App() {
    const [keyword, setKeyword] = useState("what")
    const [imgArr, setImgArr] = useState([])

    function handleScroll(e){
      const bottom = e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop === e.target.scrollingElement.clientHeight;
      if (bottom) {
        console.log("fetching new images")
        fetchImg(keyword, imgArr, setImgArr, apiKey)
      }
    }

    useEffect(()=>{
        fetchImg(keyword, imgArr, setImgArr, apiKey)
    }, [keyword])

    useEffect(()=>{
      window.addEventListener('scroll', handleScroll)
    }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>

      {  <Navbar/> /* Navbar goes here */}
        <SearchBar/>
        <ImageTable imgArr={imgArr} />
    </div>
  );
}

export default App;
