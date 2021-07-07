import Review from "./Review";
import {Button, ButtonGroup, Container} from "react-bootstrap";
import {FcNext, FcPrevious} from "react-icons/fc";
import {FaRandom} from "react-icons/fa";
import {useState} from "react";
import data from "./data";
import "./FirstReviews.css"


const FirstReviews =() => {
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
       <section>
        <Review {...singleReview}/>
        <Container>
            <ButtonGroup size="lg" className="mb-2">
                <Button variant="outline-primary" onClick={handlePrev}><FcPrevious/></Button>
                <Button variant="outline-primary" onClick={handleShuffle}><FaRandom/></Button>
                <Button variant="outline-primary" onClick={handleNext}><FcNext/></Button>
            </ButtonGroup>
        </Container>
    </section>
   )
}

export default FirstReviews;