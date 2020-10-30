//TODO: create contact using all actions

import { act } from "react-dom/test-utils";
import {
  SET_CONTACT,
  SET_LOADING,
  CONTACT_TO_UPDATE,
  SET_SINGLE_CONTACT
} from "./action.types";

//TODO: use switch case

export default (state,action)=>{

  switch (action.type) {
    case SET_CONTACT:  //load all contacts coming from the database to the initialstate 
      console.log("contact payload=",action.payload)
      return action.payload==null ? {...state,contacts:[]} : {...state,contacts: action.payload}   
      
    case SET_LOADING:    //set the isLoading property of state to true/false
      return {...state,isLoading:action.payload}
      
    case CONTACT_TO_UPDATE:
      return {...state,contactToUpdate:action.payload,contactToUpdateKey:action.key}
      
    case SET_SINGLE_CONTACT:
      return {...state,contact:action.payload}  //adding a contact
      
    default:
      return state;
      
  }

}