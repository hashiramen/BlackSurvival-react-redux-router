import React, { Component } from 'react';

class Hover extends Component {
    render() {
    let style = {
        top: this.props.y,
        left: this.props.x
    }

        return (
            <div className="hover" style={style}>
                {this.props.data.name}
            </div>
        );
    }
}

export default Hover;