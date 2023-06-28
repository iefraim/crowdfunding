import React from "react"


export default class About extends React.Component{

    state={open:false}

    toggle=()=>this.setState((prevState)=>({open:!prevState.open}))

    render=()=>(<div><h4 onClick={this.toggle}>Click to learn about our org</h4>
    {this.state.open && <p>	Lots of text about the organization <br />
    Lots of text about the organization <br />
    Lots of text about the organization <br />
    Lots of text about the organization <br />
    Lots of text about the organization <br /></p>}</div>)
}