import {configureStore, combineReducers} from "@reduxjs/toolkit"
/*import itemsJson from "../json/data.json"

const intDonationState=itemsJson.donations

const teams=itemsJson.teams*/

const defaultFilters={text:"",by:"date"}

const newDonation=(state=[],action)=>action.type=="BASE_DONATIONS"?action.item:typeof action.item=='object'&&!action.type?[...state,action.item]:state
const presetTeams=(state=[],action)=>action.type=="BASE_TEAMS"?action.item:state
const switchModal=(state=-1,action)=>typeof action.item=='number'?action.item:state
const switchTeam=(state="",action)=>typeof action.item=='string'?action.item:state
const changeFilters=(state=defaultFilters,action)=>typeof action.item=='object'&&!action.type?action.item:state


const reducers=combineReducers({donations:newDonation,modalInput:switchModal,
    openTeam:switchTeam,teams:presetTeams,filters:changeFilters})


export default configureStore({reducer:reducers,
devTools:true})