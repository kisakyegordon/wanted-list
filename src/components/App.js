import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getWantedList from '../actions/getWantedList';
import addPerson from '../actions/addPerson';


class App extends Component () {

    componentDidMount() {
        this.props.getWantedList()
    }
    
    handlePersonCreation() {
        const person= {
            name: this.state.newPersonName,
            image: 'https://api.adorable.io/avatars/face/eyes${this.state.newPersonEyes}/nose${this.state.newPersonNose}/mouth${this.state.newPersonMouth}/${this.state.newPersonSkin.slice(1)}',
            reason: this.state.newPersonReason,
            reward: this.state.newPersonReward
        }
        this.props.addPerson(person);
        this.clearFormAndCloseModal();
    }
}



function mapStateToProps(state){
    return {
    wantedPeople: state.wantedPeople,
    toast: state.toast
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getWantedList: getWantedList,
        addPerson: addPerson
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);