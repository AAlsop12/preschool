import {
    FETCH_EXPERIENCES,
    TOGGLE_DESCRIPTION
    
} from './types';

export function fetchExperiences() {
    return {
        type: FETCH_EXPERIENCES,
        payload: [
            {
                header: 'September',
                descriptionOne: 'Event #1',              
                descriptionTwo: 'Event #2',

                open: false
            },
            {
                header: 'October',
                descriptionOne: 'Event #1',              
                descriptionTwo: 'Event #2',
                open: false
            },
            {
                header: 'November',
                descriptionOne: 'Event #1',              
                descriptionTwo: 'Event #2',
                open: false
            },
            {
                header: 'December',
                descriptionOne: 'Event #1',              
                descriptionTwo: 'Event #2',

            },
            {
                header: 'January',
                descriptionOne: 'Event #1',              
                descriptionTwo: 'Event #2',

            },
            {
                header: 'February',
                descriptionOne: 'Event #1',              
                descriptionTwo: 'Event #2',

            },
            {
                header: 'March',
                descriptionOne: 'Event #1',              
                descriptionTwo: 'Event #2',

            },
            {
                header: 'April',
                descriptionOne: 'Event #1',              
                descriptionTwo: 'Event #2',

            },
            {
                header: 'May',
                descriptionOne: 'Event #1',              
                descriptionTwo: 'Event #2',

            },
            {
                header: 'June',
                descriptionOne: 'Event #1',              
                descriptionTwo: 'Event #2',

            }
        ]
    }
}

export function toggleDescription(experience) {
    return {
        type: TOGGLE_DESCRIPTION,
        payload: experience
    }
}