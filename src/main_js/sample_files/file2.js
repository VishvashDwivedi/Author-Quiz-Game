import React from "react";

const Element = (props) => {

    const l= [];
    for(var i=1;i<=props.noOfButtons;i++)
        l.push(i);

    const makeElement = function(v){
        
        return (
        <button key={v} id={v} onClick={ (event) => props.onSelection(event.target.id)}>
            { v }  
        </button>
        );
    }

    return (

        <div>
           { 
            l.map((e) => makeElement(e) )
           }

        </div>

    );

}

export default Element