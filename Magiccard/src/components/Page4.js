import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import {Container,Form,FormGroup,Label,Input,Button,Spinner,Row,Col} from "reactstrap";
import {ToastContainer, toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import Message from "./Message";
const Page4= ()=>{
    const history = useHistory();
    const context=useContext(UserContext)
    const [pageval]=useState(4)
    const [reveal,setReveal]=useState(0)
    const answers={
        1:"Rohit",
        2:"Dhoni",
        3:"Raina",
        4:"Bumrah",
        5:"Yuzvendar chahal",
        6:"Yuvraj singh",
        7:"Sachin",
        8:"Shami",
        9:"Surya Kumar Yadav",
        10:"Hardik Pandya"
    }
    const goForward=(val)=>{
        if(reveal==0){
        val==1?context.setSum(context.sum+pageval):context.setSum(context.sum)
        setReveal(1)
        
        }
        
        
    }

    const reload=()=>{
        context.setSum(0);
        setReveal(0);
        history.push("/")
    }

    useEffect(() => {
        
        return () => {
            toast("I predicted..hurrah!!",{type:"warning"})
        }
    }, [reveal])
    return (
        <>
        <Message msg="Press Yes if your selected player is in the below Greats list"/>
        <Container fluid className="mt-5">
        <ToastContainer />
            <h2 style={{color:'gold',textAlign:"center",marginBottom:"2rem"}}>Greats..</h2>
            <Row>
                <Col md="6" className="offset-md-3 p-2" style={{backgroundColor:"black",color:"white",textAlign:"center",padding:"7rem"}}>
                  <div style={{padding:"2rem"}}>
                    <div><h3>Shami</h3></div>
                    <div><h3>Yuvraj</h3></div>
                    <div><h3>Sachin</h3></div>
                    <div><h3>Rayudu</h3></div>
                    <div><h3>Hardik Pandya</h3></div>
                    <div><h3>Dinesh Karthik</h3></div>
                    
                    <div><h3>Yuzvendar Chahal</h3></div>
                    <div><h3>Ravindra Jadeja</h3></div>
                    
                    <div><h3>Surya Kumar Yadav</h3></div>
                    
                    <Button style={{backgroundColor:"gold",color:"black",marginRight:"1rem",marginTop:"1rem"}} onClick={()=>{goForward(1)}}>Yes</Button>
                    <Button style={{backgroundColor:"gold",color:"black",marginTop:"1rem"}} onClick={()=>{goForward(0)}}>No</Button>
                    </div>
                </Col>
                
                    {
                        reveal===1?(
                            <Col md="6" className="offset-md-3 p-2" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
                                <div><h3>You Selected:-<span style={{color:"gold"}}>{answers[context.sum]}</span></h3></div>
                                <br/>
                                <Button style={{backgroundColor:"gold",color:"white",marginRight:"1rem",marginTop:"1rem",marginBottom:"1rem"}} onClick={reload}>Want to play again?</Button>
                                
                                
                                </Col>
                        ):(
                            <Col md="6" className="offset-md-3 p-2" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>

                                </Col>
                        )
                    }
                
                
            </Row>
            
            
        </Container>
        </>
    )
    
}

export default Page4;