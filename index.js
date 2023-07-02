import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#DDE6ED';
        body.style.color = '#3C2C3E';
        body.style.transition = '5s';

    }else{
        body.style.background = '#5D5656';//black
        body.style.color = '#3C2C3E';
        body.style.transition = '5s';

    }
});