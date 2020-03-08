 
import React, { Component } from 'react';
import Capture from '../Capture.PNG'
    class Header  extends Component {
        constructor(props) {
            super(props);
            this.state = { classDrop: false }
        }
        render() { 
            return (  <div className="Header">
              
            <img src={Capture} alt=""/>
           
            <ul className="dropdown">
                <li>About Us</li>
                <li>Carrier </li>
                <li onClick={() => this.setState({ classDrop: !this.state.classDrop })}>Departements
                    <ul className={this.state.classDrop ? "dropdown-content" : "dropdown-content-none"} >
                        <li>Marketing & PR</li>
                        <li>Custumer Succes & Sales</li>
                        <li>IT, Product, Design & UX, Data</li>
                        <li>Finance & Administration</li>
                        <li>HR & More</li>
                    </ul>
                </li>
                    
            </ul>

         
        </div>);
        }
    }
     
    export default Header;
 



