import React from "react"
import getTeam from "../functions/getTeam"

const Donation=(props)=>{
    const item=props.item
    const team=getTeam({id:props.item.teamid})
    // debugger
    return (<li>{props.item.name}<span className="rtamt donation__amount">
     {parseInt(props.item.amount).toLocaleString()}
     </span>
    <br /><small>
    {props.item.note &&(<span>{props.item.note} <br /></span>) }Team {team.name}</small></li>)
}

export default Donation