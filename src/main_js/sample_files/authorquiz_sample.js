import React, { useState } from 'react';
import Statefull from "./file1";
import "../main_css/bootstrap.min.css";
import Element from "./file2";
// import './main_css/App.css';


function Danger(props) {
  
  return (
            <div dangerouslySetInnerHTML={{__html:props.danger}} />
        );

}


function AuthorQuiz(props) {

  const [ c,sc ] = useState(0);

  return (

        <div  className="container">
            <div>

                <div>
                  Author : {c}
                </div>
                <button className="btn btn-primary" onClick = { () => sc(c+1) }>
                    +1
                </button> 

            </div>

            <br/>

            <Statefull sub_clicks = {sc} value = {c} />
            <br />
            <Element onSelection={ (n) => console.log(n) } noOfButtons={10}  />
            <Danger danger="<i> Hello ! </i>" />
        </div>

    );
}

// module.exports = AuthorQuiz;

export default AuthorQuiz;




    //  <div onClick={props.onclick}>
    //     This is ittt  {props.points}
    //  </div>
    
    //  <div onClick = {() => props.now()}>
    //     Author Quiz - 66
    //  </div>

    // <div onClick = { () => props.function(`Shri Ram`) } >
    //     Shri Ram ! - Charansparsh 
    //     <br />
    //     A = {props.a} , B = {props.b}
    // </div>