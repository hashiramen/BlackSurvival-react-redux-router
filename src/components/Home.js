import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h4 style={{textAlign: 'center', marginTop: '6em'}}>How this works: Character Tab > Choose a Hero > Items Tab > Choose your build path > Complete Tab > Overview of your build and link</h4>
                <a href="https://discord.gg/A9ar7WZ" style={{textAlign: 'center', marginTop: '6em'}} target="__blank"><p>Black Survival's Discord</p></a>
                <a href="https://www.reddit.com/r/BlackSurvival/" style={{textAlign: 'center', marginTop: '6em'}} target="__blank"><p>Black Survival's Reddit</p></a>
            </div>
        );
    }
}

export default Home;