import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//components
import Item from './item/Item'
import Chosen from './item/Chosen'

//action
import { addItem, removeItem } from '../actions/action_builder'

class Items extends Component {
    constructor(props){
        super(props)

        this.state = { category: null }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        const category = e.target.dataset.category
        this.setState({
            category
        })
    }

    render() {
        const chosenItems = this.props.chosen.map((item, i) => <Chosen data={item} key={i} index={i} remove={this.props.removeItem}/>)
        const mappedItems = this.props.items.filter(item => item.category === this.state.category)
                                            .map(item => <Item data={item} key={item.id} add={this.props.addItem}/>)
        return (
            <div>
                <div id="chosen-items">
                    {chosenItems}
                </div>
                <div id="categories">
                    <input type="button" onClick={this.handleClick} value="Ingredients" data-category="ingredient"/>
                    <input type="button" onClick={this.handleClick} value="Blades" data-category="blade"/>
                </div>
                <div id="list-of-items">
                    {mappedItems}
                </div>
            </div>
        );
    }
}

function mapStateToProps({items, builder}) {
    return{
        items,
        chosen: builder.build
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addItem,
        removeItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);