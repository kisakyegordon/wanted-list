import { combineReducers } from 'redux';
import WantedPeopleReducer from './reducerWantedList';
import ToastReducer from './reducerToast';

const rootReducer = combineReducers({
    wantedPeople: WantedPeopleReducer,
    toast: ToastReducer
});

export default rootReducer;