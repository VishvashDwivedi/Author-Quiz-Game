import React from "react";
import "../main_css/bootstrap.min.css";
import auth_details from "../main_js/users";
import {shuffle,sample} from "underscore";
import Footer from "./Footer";


var backgroundcolor="white";
var index = 0;
var global = {};
var state = 0;



const random = ( data, index ,state ,ModalFunction ) => {

    console.log(index);
    if(index === 5)
    {
        console.log("------------------");
        ModalFunction();

        index = 0;
        state = 0;

        return {
            authorName:"",
            randombooks:[],
            answer:"",
            src:""
        };
    }

    if( state === 0 ){

        var list = [];
        let answer = [];
        for( var i=0 ; i<data.length ; i++ )
        {
            if(i !== index)
                list.push( ...data[i].books );
            else
                answer = sample(data[i].books);
        }

        var randombooks = shuffle(list).slice(0,4);
        const authorName = data[index].AuthorName;
        randombooks.push(answer);
        randombooks = shuffle(randombooks);

        // console.log(data[3].src);
        global = {
            authorName,
            randombooks,
            answer,
            src:data[index].src
        }
        return global;

    }
    else{
        return global;
    }

}



const checkCorrctness = ( object , bookname , render ) => {

    // console.log(object.answer);
    // console.log(bookname);
    
    if(object.answer !== bookname)
    {
        backgroundcolor = "red";
        state = 1;
        render();
    }
    else
    {
        backgroundcolor = "green";
        state = 2;
        render();
//        index=index+1;
    }

}



const createWidget = ( object , render ) => {

    return (
    
    <>{  
        object.randombooks.map((bookname,pos) =>  (
            
            <div 
                key={pos}
                className="row tile"
                onClick={ () =>  checkCorrctness( object, bookname , render )  }
            >
                {bookname}
            </div>

        ) )
           
    }</>

    );

}



const Middle = (props) => {


    const object = random( auth_details , index , state , props.ModalFunction );

    return (
            <>
                <div style = {{backgroundColor:backgroundcolor , paddingTop:20 }}>
                    
                        <div className="container">              
                            <div className="row">
                                
                                <div className="col-md-4">
                                    <div>  <img src={object.src} alt="..." />    </div>
                                    <div className="author-title">  <h4> {object.authorName}  </h4>    </div>
                                </div>
                                    
                                <div className="col-md-8">
                                    {   createWidget( object , props.render )    }
                                </div>

                            </div>
                        </div>

                </div>

                <div>
                {
                    (state === 2 ) ? 
                    <Foot render = {props.render} />
                    :
                    <Footer />
                }
                </div>        

            </>

    );
    
}



const Foot = (props) => {

    return (
        <div className = "container text-right" style = {{padding: 30}}>        
            <button className = "btn btn-primary" onClick = { () => {  
                    state = 0;
                    index = index + 1;
                    backgroundcolor = "white";
                    props.render();
              } } >
                Next
            </button>
        </div>
    );

}





export default Middle;

