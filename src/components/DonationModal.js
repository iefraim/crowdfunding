import React from "react"
import Modal from "react-modal"
import { useSelector } from "react-redux"




const DonationModal=(props)=>(<Modal 
    
    isOpen={(useSelector((state)=>state.modalInput)>=0)}
 onRequestClose={()=>props.dispatch({type:"",item:-1})}>entered amount:{useSelector((state)=>state.modalInput)}
 
 {/* TODO stick in react form 
 
find all information on other form
where is code once form is submitted. 
need to add email is sent to donor 
adn email is sent to team leader as a thank you 

*/}
 </Modal>)

export default DonationModal