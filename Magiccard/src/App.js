import React, { useReducer, useEffect, useState } from "react";
import {Container,Row,Col} from "reactstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./context/UserContext"
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import Page4 from "./components/Page4"
import Home from "./components/Home"
import Message from "./components/Message";

const App = () => {
  const [sum, setSum] = useState(0);
  return (
   
    
    <Router>
      <UserContext.Provider value={{sum,setSum}}>
        <ToastContainer />  
        <Container style={{backgroundColor: "#1a1111",backgroundImage:" linear-gradient(156deg, #1a1111 0%, #fffb7d 100%)"}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Page1" component={Page1} />
            <Route exact path="/Page2" component={Page2} />
            <Route exact path="/Page3" component={Page3} />
            <Route exact path="/Page4" component={Page4} />
          </Switch>
          <div style={{backgroundColor:"black",marginTop:"5rem"}}>
            <br/>
            <h5 style={{color:"gold",textAlign:"center",padding:"1.2rem"}}>Designed and Developed by <br/><span style={{color:'white'}}> Nag Ashish S V</span></h5>
          </div>
      </Container>  
      </UserContext.Provider>
    </Router>
    

  );
};

export default App;
