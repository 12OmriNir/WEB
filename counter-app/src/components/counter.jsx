import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    }

    styles = {
        fontSize: 30,
        fontWeight: 'bold'
    }

    render() { 
        return (
        <div>
            <span style={ this.styles }>{this.formatCount()}</span>
            <button>Incerment</button>
        </div>);
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;