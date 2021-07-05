
import data from "./data";
import {useState} from "react";
import Review from "./Review";



function App() {
  const [index , setIndex] = useState(0);
  const singleReview = data[index];
  const handlePrev = ()=> {
      if(index===0) {
          setIndex(data.length - 1);
          return;

      }
      setIndex(index-1);

  }
  const handleNext = ()=> {
      if(index===data.length-1) {
          setIndex(0);
          return;

      }
      setIndex(index+1);
  }
  const handleShuffle = ()=> {
      const randomIndex = Math.floor(Math.random() * (data.length ));

      console.log(randomIndex);
      if (randomIndex===index || randomIndex===0) {
          handlePrev()
          return;
      }
      if(randomIndex===data.length-1) {
          handleNext()
          return;
      }
      setIndex(randomIndex);

  }
  return (
      <main>

        <Review {...singleReview}/>
          <div className="button-grp">
              <button onClick={handlePrev}>prev</button>
              <button onClick={handleShuffle}>shuffle</button>
              <button onClick={handleNext}>next</button>
          </div>

      </main>

  );
}

export default App;
