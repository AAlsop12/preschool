import React, { Component } from 'react';

import PageTitle from './pageTitle';

class Contact extends Component {

    render() {
        return (
            <div className='contact'>
                {/* <PageTitle className='contact__title' title='Contact'/> */}
                <p className='contact__name'>GeAnna Alsop</p>
                <p className='contact__phone'>801 919 9399</p>
                <p className='contact__email'>woodencottagepreschool.com</p>
                <p className='contact__info'>If you have any questions at all, please contact me!</p>

                <img className="contact__aimee-pic" src="sexyGeAnna.jpg" width='175' height='250'></img>
            </div>
           
        )
    }
}


export default Contact;


