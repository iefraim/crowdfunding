import React from "react"
import {useDispatch, useSelector} from "react-redux"
import Donation from "./Donation"
import getTeam from "../functions/getTeam"
import TotalDisplay from "./TotalDisplay"
import TeamTotal from "./TeamTotal"
import { NavLink } from "react-router-dom"
//TODO add filters
//default:recent

const changeFilters=()=>{
    const input=document.getElementById("filterTextInput").value.trim()
    dispatch({item:{text:input},type:""})
}

let filters,dispatch
const checkTextFilter=(i)=>{
    if(!filters.text){//no text filter
        return true
    }
    for(let key of Object.keys(i)){
        const currText=i[key]+""
       if(currText.includes(filters.text)){
        return true
       }
    }
    return false
}

const Donations=()=>{
    filters=useSelector((state)=>state.filters)
    dispatch=useDispatch()
    const team=getTeam({link:useSelector((state)=>state.openTeam)})
    const donations=useSelector((state)=>state.donations).//gets full donation list
    filter((i)=>!team||i.team==team.id).//filter out open team's donations
    filter(checkTextFilter)

    return (  <div>
        <div className="col-xs-12 donatebox donors">
    
    <TotalDisplay/>
    <TeamTotal/>

    <div className="close-team"><p className="text-center"><NavLink to="/">VIEW ALL</NavLink></p></div>
    <div><p>Total Donors: {donations.length}</p></div>
    <input onChange={changeFilters} id="filterTextInput" className="form-control"></input>
    <ul className="" id="" style={{overflowY:"scroll", height:"600px"}}>
        {donations.map((item,key)=>(<Donation key={key} item={item}/>))}
        </ul>
        
        </div> </div>)
}

export default Donations