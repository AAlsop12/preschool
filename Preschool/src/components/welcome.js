import React, { Component } from 'react';
import PageTitle from './pageTitle';
import Quote from './quote';

class Welcome extends Component {

    handleClick = () => {
        if(document.getElementById('welcome').classList.contains('welcome-hidden')) {
            document.getElementById('welcome').classList.remove('welcome-hidden');
        } else {
            document.getElementById('welcome').classList.add('welcome-hidden'); 

        } 
    }

    render() {
        
        return (
            <div className='welcome-shell'>
                <div id='welcome' className='welcome'>
                    <div className='welcome__title'>Welcome to the Wooden Cottage!</div>
                    <div className='welcome__greeting'>We're glad you stopped by!</div>
                    <div className='welcome__instructions'>Go ahead and explore</div>
                    <div className='welcome__arrow'>
                        <i className="fas fa-angle-double-right" onClick={this.handleClick}></i>
                    </div>
                    <img className="welcome__aimee-pic" src="chase.jpg" width='200' height='250'></img>
                </div>
                <div className="logo">
                    The Wooden Cottage
                </div>
                <img className="stick-kids" src="stick-figure-kids.png" width='1400' height='256'></img>




            </div>


        )
    }
}

export default Welcome;