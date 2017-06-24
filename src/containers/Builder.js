import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//component
import Item from './builder/Item'

//actions
import { addHero, addItem } from '../actions/action_builder'

class Builder extends Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        //Load build from the link
        const url = `${this.props.params.array}`
        if(url !== 'undefined' && url.length > 0) {
            const sliced = url.split("-")
            const itemsId = [ ...sliced.slice(1)]

            //take hero
            const hero = this.props.characters.filter(hero => hero.name === sliced[0])[0]

            
            //take build items
            let items =[]
            itemsId.filter(item => {
                return this.props.items.find(compare => {
                    if(parseInt(item) === compare.id)
                        items.push(compare)
                })
            })

            //filling build
            this.props.addHero(hero)
            items.forEach( item => this.props.addItem(item));
        }
    }

    handleClick(e){
        e.target.select()
        document.execCommand('copy');
    }

    render() {
        const {hero, build} = this.props.builder

        const mapBuild = build.map((item, i) => <Item key={i} data={item} />)

        let slicedUrl = ''
        build.forEach(item => slicedUrl += `-${item.id}`)
        const url = `http://localhost:8080/build/${hero.name}${slicedUrl}`


        return (
            <div className="builder">
                <h2>{hero.name}</h2>
                <div className="build-link">
                    <input type="text" className="link" value={url} readOnly onClick={this.handleClick}/>
                </div>
                <div className="builder-img">
                    <img src={`/assets/img/characters/${hero.name}.png`} alt=""/>
                </div>
                <div className="builder-list">
                    {mapBuild}
                </div>
            </div>
        );
    }
}

function mapStateToProps({builder, characters, items}) {
    return {
        builder,
        characters,
        items
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addHero,
        addItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Builder);