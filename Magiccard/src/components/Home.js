import React from "react"
import { useHistory } from "react-router-dom";
import {Container,Form,FormGroup,Label,Input,Button,Spinner,Row,Col} from "reactstrap";
import Message from "./Message";
const Home= ()=>{
    const history = useHistory();
    const goForward=()=>{
        history.push('./page1')
        
    }
    return (
        <>
        <Message msg="Think about any player...I can predict whom u picked...!!"/>
        <Container fluid className="mt-5">
            <Row>
                <Col md="6" className="offset-md-3 p-2" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
                    <div style={{padding:"2rem"}}>
                    <div><h3>Dhoni</h3></div>
                    <div><h3>Raina</h3></div>
                    <div><h3>Sachin</h3></div>
                    
                    <div><h3>Rohit</h3></div>
                    <div><h3>Shami</h3></div>
                    <div><h3>Bumrah</h3></div>
                    <div><h3>Yuvraj Singh</h3></div>
                    <div><h3>Hardik Pandya</h3></div>
                    <div><h3>Yuzvendar Chahal</h3></div>
                    <div><h3>Surya kumar yadav</h3></div>
                    <Button style={{backgroundColor:"gold",color:"black",marginTop:"1rem"}} onClick={goForward}>Lets Go...</Button>
                    </div>
                </Col>
                
            </Row>
            
            
        </Container>
        </>
    )
}

export default Home;