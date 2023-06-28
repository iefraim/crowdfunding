import { useSelector } from "react-redux";

export default (info)=>{
    const teams=useSelector((state)=>state.teams)
    const team= teams.filter((i)=>(
        info.name===i.name ||
        info.id===i.id||
        info.link===i.link
    ))[0]

    return team//?team:teams[0]
}