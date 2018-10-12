import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';





class Account extends Component {

    componentDidMount() {
        

        // const headerLinks = [
        //     {
        //         _id: 0,
        //         title: 'Logout',
        //         path: '/signin'
        //     },
        //     {
        //         _id: 1,
        //         title: 'Sign Up',
        //         path: '/signup'
        //     }
        // ]

        const navbarLinks = [
            {
                _id: 0,
                title: 'About Us',
                active: false,
                path: '/about'
            },
            {
                _id: 0,
                title: 'Meet the Teachers',
                active: false,
                path: './experience'
            },
            {
                _id: 1,
                title: 'Tuition Costs',
                active: false,
                // path: './experience'
            },
            {
                _id: 1,
                title: 'Tuition Costs',
                active: false,
                // path: './experience'
            },
            {
                _id: 2,
                title: 'Calendar',
                active: false,
                path: '/goals'
            },
            {
                _id: 3,
                title: 'Photo Album',
                active: false,
                path: '/portfolio'
            },
            {
                _id: 4,
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