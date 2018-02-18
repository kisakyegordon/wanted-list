import { DELETE_PERSON } from './types';

export default function deletePerson(person){
    return dispatch => {
        dispatch(deletePersonAsync(person))
    }
}

function deletePersonAsync(person){
    return {
        type: DELETE_PERSON,
        payload: person
    }
}