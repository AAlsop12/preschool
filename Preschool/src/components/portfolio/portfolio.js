import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Project from './project';


class Portfolio extends Component {

    
    render() {
        return (
            <div className='portfolio'>
                {/* {/* <PageTitle className='portfolio__title' title='Portfolio'/>  */}
                <Project className='ecommerce' title='Ecommmerce'/>
                <Project className='madlibs' title='Madlibs' link="https://madlibs23454.herokuapp.com/"/> 
                    <a className="madlibs__pic" href="https://madlibs23454.herokuapp.com/">                
                         <img src="madlibs.png" width='200' height='150'/>
                    </a>
                <Project className='countdown' title='Countdown' link="https://secret-ocean-94266.herokuapp.com/"/>
                    <a className="countdown__pic" href="https://secret-ocean-94266.herokuapp.com/">                
                         <img src="countdown.png" width='200' height='150'/>
                    </a>
                <Project className='schedule' title='Scheduling' link="https://course-scheduling.herokuapp.com"/>
                    <a className="schedule__pic" href="https://course-scheduling.herokuapp.com/" >                
                         <img src="schedule.png" width='200' height='150'/>
                    </a>
                <Project className='github' title='Github' link="https://github.com/AAlsop12"/>
                    <a className="github__pic" href="https://github.com/AAlsop12">                
                         <img src="github.png" width='200' height='150'/>
                    </a>
                <Project className='project-portfolio' title='Portfolio' link="https://desolate-sierra-42605.herokuapp.com/"/>
                    <a className="project-portfolio__pic" href="https://desolate-sierra-42605.herokuapp.com/">                
                         <img src="portfolio.png" width='200' height='150'/>
                    </a>

            </div>
        )
    }
}

export default Portfolio;


