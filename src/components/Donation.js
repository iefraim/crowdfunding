import React from "react"
import getTeam from "../functions/getTeam"

const Donation=(props)=>{
    const team=getTeam({id:props.item.team})
    return (<li>{props.item.name}<span className="rtamt donation__amount">
     {props.item.amount.toLocaleString()}</span>
    <br /><small>
    {props.item.note &&(<span>{props.item.note} <br /></span>) }Team {team.name}</small></li>)
}

export default Donation