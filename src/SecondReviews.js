import {useEffect, useState} from "react";
import data from "./data";
import Review from "./Review";
import {Button, ButtonGroup, Container} from "react-bootstrap";
import {FcNext, FcPrevious} from "react-icons/fc";
import "./SecondReviews.css";



const SecondReviews = ()=> {
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
    useEffect(()=> {
        let interval = setInterval(()=> handleNext() , 2500);
        return ()=> clearInterval(interval);
    }, [index])


    return (
        <section className="secondReview">
           <Review {...singleReview}/>
            <Container>
                <ButtonGroup size="lg" className="mb-2">
                    <Button variant="light" onClick={handlePrev}><FcPrevious/></Button>
                    <Button variant="light" onClick={handleNext}><FcNext/></Button>
                </ButtonGroup>
            </Container>
        </section>
    )

}


export default SecondReviews;