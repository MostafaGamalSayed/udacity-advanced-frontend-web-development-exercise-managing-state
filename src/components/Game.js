import React, { Component } from 'react';

class Game extends Component {
  
  constructor(props) {
    super(props);
    const numberValues = this.makeNewQuestion();
    
    this.state = {
      value1: numberValues[0],
      value2: numberValues[1],
      value3: numberValues[2],
      proposedAnswer: numberValues[3]
    }
    
  }

  makeNewQuestion = () => {
    const val1 = Math.floor(Math.random() * 100);
    const val2 = Math.floor(Math.random() * 100);
    const val3 = Math.floor(Math.random() * 100);
	const proposedAnswer = Math.floor(Math.random() * 3) + val1 + val2 + val3;

	return [val1, val2, val3, proposedAnswer];
  }
  
  handleAnswer = (e) => {
    const isCorrectAnswer = this.evaluateAnswer(e.target.name);
    this.props.handleAnswer(isCorrectAnswer);
    this.updateState();
  }
  
  updateState = () => {
    const newNumberValues = this.makeNewQuestion();
    
    this.setState(prevState => ({
      value1: newNumberValues[0],
      value2: newNumberValues[1],
      value3: newNumberValues[2],
      proposedAnswer: newNumberValues[3]
    }));
  }
  
  evaluateAnswer = (answer) => {
    const correctAnswer = this.state.value1 + this.state.value2 + this.state.value3;
    
    return (correctAnswer === this.state.proposedAnswer && answer === 'true') || (correctAnswer !== this.state.proposedAnswer && answer === 'false');
      
  }
  
  render() {
    
    return (
      <div>
      	<div className="equation">
      		<p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={this.handleAnswer} name="true">True</button>
        <button onClick={this.handleAnswer} name="false">False</button>
      </div>
    )
  }
}

export default Game;