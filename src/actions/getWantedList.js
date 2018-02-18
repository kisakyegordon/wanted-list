import { GET_WANTED_LIST } from './types';
import axios from 'axios';

export default function getWantedList(){
    return dispatch => {
        axios.get('../wanted_list.json')
            .then(res => {
                const people = res.data.map( people => {
                    people.note = 'none';
                    return people;
                });
                dispatch(getUsersAsync(people));
            });
    }
}

function getUsersAsync(people){
    return {
    type: GET_WANTED_LIST,
    payload: people
    }
}