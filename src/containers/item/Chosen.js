import React, { Component } from 'react';

class Chosen extends Component {
    constructor(props){
        super(props)
    }

    handleClick(){
        this.props.remove(this.props.index)
    }

    render() {
        const { id, name, category} = this.props.data
        return (
            <div className="chosen-item" onClick={this.handleClick.bind(this)} title={name}>
                <div className={`chosen-img ${category}`} >
                    <img src={`/assets/img/items/${name}.png`} alt=""/>
                </div>
                <span className="arrow fa fa-long-arrow-right">
                </span>
            </div>
        );
    }
}

export default Chosen;