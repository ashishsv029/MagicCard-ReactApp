import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom";
import {Container,Form,FormGroup,Label,Input,Button,Spinner,Row,Col} from "reactstrap";
import {ToastContainer, toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import Message from "./Message";
const Page1= ()=>{
    const history = useHistory();
    const [pageval]=useState(1);

    
    const context=useContext(UserContext)

    const goForward=(val)=>
    {
        
        val==1?context.setSum(context.sum+pageval):context.setSum(context.sum)
        history.push('./page2')
    } 
  
    /*
    useEffect(() => {
        return () => {
            showval();
        }
    }, [context.sum])
    */
    return (
        <>
            <Message msg="Press Yes if your selected player is in the below Legendary list"/>
            <Container fluid className="mt-5">
                <ToastContainer />
               <h2 style={{color:'gold',textAlign:"center",marginBottom:"2rem",fontWeight:"bold"}}>Legendary</h2>
                <Row>
                    <Col md="6" className="offset-md-3 p-2" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>          
                    <div style={{padding:"2rem"}}>
                        <div><h3>Rohit</h3></div>
                        <div><h3>Bumrah</h3></div>
                        <div><h3>Shami</h3></div>
                        <div><h3>Rayudu</h3></div>
                        <div><h3>Yuzvendar Chahal</h3></div>
                        
                        <div><h3>Dinesh Karthik</h3></div>
                        <div><h3>Ravindra Jadega</h3></div>
                        <div><h3>Hardik Pandya</h3></div>
                        
                        <Button style={{backgroundColor:"gold",color:"black",marginRight:"1rem",marginTop:"1rem"}} onClick={()=>{goForward(1)}}>Yes</Button>
                        <Button style={{backgroundColor:"gold",color:"black",marginTop:"1rem"}} onClick={()=>{goForward(0)}}>No</Button>
                    </div>
                    </Col>        
                </Row>
            </Container>
        </>
        )
}

export default Page1;