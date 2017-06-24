import React, { Component } from 'react';
import Hover from './Hover'

class Character extends Component {
    constructor(props){
        super(props)

        this.state = { hover : false, x : 0, y : 0 }
    }
    handleHover(e){
        this.setState({hover:true, x : e.screenX, y: e.screenY-40})

    }
    handleLeave(){
        if(this.state.hover)
            this.setState({hover:false})
    }

    handleClick(){
        this.props.add(this.props.data)
    }

    render() {
        const {x, y} = this.state
        return (
            <div className="character" 
                onMouseMove={(e) => this.handleHover(e)} 
                onMouseLeave={() => this.handleLeave()}
                onClick={this.handleClick.bind(this)} >
                <div className="character-img">
                    <img src={`../assets/img/characters/${this.props.data.img}`}/>
                </div>
                {this.state.hover === false ? null : <Hover data={this.props.data} x={x} y={y} />}
            </div>
        );
    }
}

export default Character;