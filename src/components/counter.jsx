import React, { Component } from 'react'

export class Counter extends Component {
state = {
  count: 0,
};


handleIncrement = () => {
  this.setState({count: this.state.count + 1})
};

render() {
    return (
      <div>
        <span className={this.getClassBadge()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>

      </div>
    )
  }

  getClassBadge() {
    let classes = 'badge m-2 bg-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount(){

    const { count } = this.state
    return count === 0? <h1>Zero</h1>: this.state.count;
  }
}


export default Counter
