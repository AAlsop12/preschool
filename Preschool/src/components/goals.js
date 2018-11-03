import React, { Component } from 'react';
import PageTitle from './pageTitle';


class Goals extends Component {
    render() {
        return (
            <div className='goals'>
                <PageTitle className='goals__title' title='Tuition'/>
                <h4 className='goal-one'> Four Year Old Class</h4>
                    <p className='goals__get-skills'>$75 a month  <br></br> 2.5 hours twice a week</p>
                <h4 className='goal-two'> Three Year Old Class</h4>
                    <p className='goals__get-hired'> $65 a month <br></br>2 hours twice a week</p>
                <h4 className='goal-three'>Discount</h4>
                    <p className='goals__get-experience'> $5 off if tuition is paid on the first class day of the month</p>
  

            </div>

        )
    }
}

export default Goals;