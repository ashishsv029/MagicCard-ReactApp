import React, { useReducer, useEffect, useState } from "react";
import {Container,Row,Col} from "reactstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";




const Message=({msg=""})=>{
    return(
        <Container fluid>
            <Row>
                <Col style={{backgroundColor:"black",padding:"15px"}}>
                    <h2 style={{color:"gold",textAlign:"center",marginBottom:"2rem"}}>Magic Card</h2>
                    <h5 style={{color:"white",textAlign:"center"}}>{msg}</h5>
                </Col>
                <br/>
            </Row>
        </Container>
    )
}
export default Message