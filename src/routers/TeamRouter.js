import React from "react"
import {Route,Routes,useParams} from "react-router-dom"
import {useDispatch} from "react-redux"

const TeamSwitch=()=>{
    const params=useParams()
    const teamName=params.teamName===undefined?"":params.teamName
    useDispatch()({type:"",item:teamName})
}

const Router=(props)=>(<Routes>
        <Route path="/crowdfund/public/:teamName?" element={<TeamSwitch/>} exact/>
    </Routes>)


export default Router