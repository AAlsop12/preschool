import React, { Component } from 'react';

import PageTitle from './pageTitle';
import Navbar from './headernavbar/navbar';
import Quote from './quote';

class About extends Component {
    render() {
        // const { className } = this.props;
        return (
                <div className='about'>
                    <div className='about-wrapper'>
                        <PageTitle className='about__title' title='Meet the Teachers'/>  
                        <p className='about__info'>Tosha:  All about Tosha What she likes to do, what she wants the kids to know, why she likes teaching, etc. <br></br> <br></br>
                           GeAnna: All about GeAnna-- what she likes to do, what she wants people to know about her.
                            <br></br> <br></br>
                        </p>
                    </div>
        
                    <img className="about-guatamala" src="tosha1.jpg" width='300' height='250'></img>             
                    <img className="about-sequoia" src="tosha3.jpg" width='300' height='250'></img>
                    <img className="about-ski" src="GeAnna.jpg" width='300' height='250'></img>
                    <img className="about-ropes" src="GeAnna.jpg" width='300' height='250'></img>
                </div>




        )
    }
}

export default About;