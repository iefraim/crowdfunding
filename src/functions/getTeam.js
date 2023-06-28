import { useSelector } from "react-redux";

export default (info)=>{
    const teams=useSelector((state)=>state.teams)
    return teams.filter((i)=>(
        info.name===i.name ||
        info.id===i.id||
        info.link===i.link
    ))[0]
}