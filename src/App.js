import React from 'react';
import {Button} from './button';

class Random extends React.Component {

  constructor(props){
    super(props);
    this.state = { color: [100, 60, 60]};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(rgbary) {
    return 'rgb(' + rgbary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 382.5;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  handleClick() {
    this.setState({
      color: this.chooseColor()
    });
  }  

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(this.state.color)}
        </h1>
        <Button light={this.isLight()} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Random;