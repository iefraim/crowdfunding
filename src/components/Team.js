import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import {NavLink} from "react-router-dom"
import ProgressBar from "@ramonak/react-progress-bar";

const Team=(props)=>{
    const donations=useSelector((state)=>state.donations).filter((i)=>i.teamid==props.item.id)
    const totalDonations=donations.reduce((prev,curr)=>prev+parseInt(curr.amount),0)
    return (
     
        
        <li className="col-xs-12 col-sm-6">   
        <NavLink to={`/${props.item.link}`}>
       <span className="col-xs-12 teambox">
        <h5>{props.item.name}</h5>
        <ProgressBar completed={totalDonations/props.item.goal*100}/>
   
    <p className="teamgoallisting"><strong>${totalDonations.toLocaleString()}</strong><br /> out of ${props.item.goal.toLocaleString()}</p>
    </span>   </NavLink>
    </li>
    
 )
}

export default Team