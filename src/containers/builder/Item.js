import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { id, name, category} = this.props.data
        return (
            <div className="builder-item" title={name}>
                <div className="builder-img">
                    <img src={`/assets/img/items/${name}.png`} alt=""/>
                </div>
                <span className="arrow fa fa-long-arrow-right">
                </span>
            </div>
        );
    }
}

export default Item;