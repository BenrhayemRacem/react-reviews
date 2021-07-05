import {Alert, Col, Container, Row} from "react-bootstrap";


const Review =({id,name,job,image,text}) => {


    return (
        <Container className="review">
        <article>
            <img src={image} alt={name}/>
            <Row >
                <Col xs={12}>
            <h3>{name}</h3>
                 </Col>
                <Col xs={12}>
            <h4>{job}</h4>
                </Col>
            </Row>

                <Alert variant="secondary">
                    <Row className="justify-content-md-center" >
                <Col xs={9}>
                    <p>
                        {text}
                    </p>
                </Col>
                    </Row>
                </Alert>



        </article>
        </Container>
    )

}

export default Review;