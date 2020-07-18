import React from "react";
import "../main_css/bootstrap.min.css";

class Statefull extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = { c:0,d:0 };
    }

    render()
    {
        return (

            <div>
    
                <div>
                    This State : {this.state.c}
                </div>
                <div>
                    This State : {this.state.d}
                </div>
                <button className="btn btn-danger" onClick = { () => this.setState({ c:this.state.c+1 }) }>
                    +1
                </button>
                <br/>
                <button style={{marginRight:10 , marginLeft:10}} className="btn btn-success" onClick = { () => {  this.props.sub_clicks(this.props.value-1);  this.setState({ c:this.state.c-1 });  }}>
                    -1
                </button>
                <button  className="btn btn-dark" onClick = { () => { this.props.sub_clicks(0);  this.setState({ c:0 }); }}>
                    Reset
                </button>
                <button  className="btn btn-dark" onClick = { () => { this.setState({ d:6 }); }}>
                    Manage D
                </button>

            </div>

        );


    }

}


export default Statefull;