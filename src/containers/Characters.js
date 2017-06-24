import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'


//components
import Character from './character/Character'

//actions
import { removeCharacter } from '../actions/action_characters'
import { addHero} from '../actions/action_builder'

class Characters extends Component {
    constructor(props) {
        super(props)


    }
    
    componentDidMount() {
        console.log('Characters tab: mounted')

    }

    handleClick() {
        
    }

    render() {
        const map = this.props.characters.map((item, i) => {
            return <Character key={i} data={item} add={this.props.addHero} /> 
        })

        return (
            <div id="characters">
                {map}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addHero : addHero
    }, dispatch)
}

function mapStateToProps(state){
    
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);