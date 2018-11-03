import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';





class Account extends Component {

    componentDidMount() {
        

        const navbarLinks = [
            {
                _id: 6,
                title: 'Home',
                active: false,
                path: '/welcome'
            },
            {
                _id: 0,
                title: 'Meet the Teachers',
                active: false,
                path: './about'
            },
            {
                _id: 1,
                title: 'About Us',
                active: false,
                // path: './experience'
            },
            {
                _id: 2,
                title: 'Photo Album',
                active: false,
                path: '/portfolio'
            },
            {
                _id: 3,
                title: 'Tuition Costs',
                active: false,
                path: './goals'
            },
            {
                _id: 4,
                title: 'Calendar',
                active: false,
                path: '/experience'
            },

            {
                _id: 5,
                title: 'Contact',
                active: false,
                path: '/contact'
            },
   



            

        ]

        // this.props.setHeaderLinks(headerLinks);
        this.props.setNavbarLinks(navbarLinks);
    }


    render() {
        return (
            <div className='allTabs'>
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks } = state.headerNavbar;
    return { headerLinks, navbarLinks }
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;