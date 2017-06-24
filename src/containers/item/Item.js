import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props)
    }

    handleClick(){
        this.props.add(this.props.data)
    }

    render() {
        const { name, id } = this.props.data
        return (
            <div className="item" data-id={id} onClick={this.handleClick.bind(this)} title={name}>
                <div className="item-img">
                    <img src={`/assets/img/items/${name}.png`} alt=""/>
                </div>
                <p>{name}</p>
            </div>
        );
    }
}

export default Item;