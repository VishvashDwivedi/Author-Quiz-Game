import React from 'react';
import ReactDOM from 'react-dom';
import Main from "../src/main_js/AuthorQuiz"
import * as serviceWorker from './serviceWorker';



const render = () => {

  ReactDOM.render(
    <Main render = {render} /> , document.getElementById('root')
);

}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

render();
serviceWorker.register();

//  <AuthorQuiz points = {models.clicks} onclick={ () => { models.clicks+=1; render(); } } /> ,
//  <AuthorQuiz now = {abc} />,
   
//  <AuthorQuiz function = { (o) => console.log(o) }    { ...obj } />
