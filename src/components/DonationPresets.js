import React from "react"



const DonationPresets=(props)=>{
    const donateNow=(e)=>{
        e.preventDefault();
        const entry=parseInt(e.target.elements.entry.value)
        if(entry===NaN){
            return
        }
        props.dispatch({type:"",item:entry})
    }

    return(<div className="mt-4 text-center"><form onSubmit={donateNow}>
    <div className="col-12">  <label>Donation Amount  </label></div> 
    <div className="col-12 mt-2">  <input type="number" min={1} step={1} name="entry" style={{"width": "90px" ,'display': "inline-block"}} className="form-control"></input></div>
   <div className="col-12 mt-2"> <button className="btn btn-primary ">Donate Now!</button></div></form></div>)}

export default DonationPresets