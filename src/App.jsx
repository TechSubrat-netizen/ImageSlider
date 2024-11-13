import { useState } from 'react'

import './App.css'

function App() {
  const [current,setCurrent] = useState(0)
  const images=["../public/magnus.jpg","../public/messi.jpg","../public/ronaldo.jpg","../public/usain.jpg","../public/Michaeljordan.jpg"]
  function  nextSlide(){
   setCurrent(current==images.length-1?0:current+1)
  }
  function prevSlide(){
    setCurrent(current==0?images.length-1:current+1)
  }


  return (
    <>
       <h2>Image Slider</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        </div>
        
          {images.map(
            (image, index) =>
              current === index && (
                <div key={image} className="slide">
                  <img src={image} alt="images" />
                </div>
              )
          )}
        
       
    </>
  )
}


export default App
