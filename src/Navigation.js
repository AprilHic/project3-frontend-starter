import React from 'react';
// import axios from 'axios';
import './App.css';

class Navigation extends React.Component{
    render(){
        return(
            <div id="navigationDiv">
                <ul id="navigationUl">
                    <li className="navigationLis">home</li>
                    <li className="navigationLis">doctors</li>
                    <li className="navigationLis">schedule</li>
                    <li className="navigationLis">appointments</li>
                </ul>
            </div>
        )
    }
}





export default Navigation;
