import React, { Component } from 'react';
// import FeedbackButtons from './Feedback'
// import Statistics from './Statistics';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  calcFeedbackGood = () => {
       
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.calcFeedbackTotal();
    this.calcFeedbackes();
  };
  
   calcFeedbackNeutral = () => {
       
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
     this.calcFeedbackTotal();
     this.calcFeedbackes();
   };
  
   calcFeedbackBad = () => {
       
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
     this.calcFeedbackTotal();
     this.calcFeedbackes();
   };
  
  
  calcFeedbackTotal = () => {
     const total = Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
      }, 0);
    
    return total;
    
  }
  
  calcFeedbackes = () => {
    const positiveFeedback = Math.round(
      ((this.state.good) / this.calcFeedbackTotal()) * 100);
    return positiveFeedback;
   
  }
    

    render() {
        return (
            <div>
                <div>
            <h1>Please leave feedback</h1>
            <button type='button' onClick={this.calcFeedbackGood}>Good</button>
            <button type='button' onClick={this.calcFeedbackNeutral}>Neutral</button>
            <button type='button' onClick={this.calcFeedbackBad}>Bad</button>
        </div>
                <h2>Statistics</h2>
                <ul>
                    <li className="statisticsList__item" name="good">Good: {this.state.good}</li>
                    <li className="statisticsList__item" name="neutral">Neutral: {this.state.neutral}</li>
                    <li className="statisticsList__item" name="bad">Bad: {this.state.bad}</li>
              <li className="statisticsList__item">Total: {this.calcFeedbackTotal()} </li>
              <li className="statisticsList__item">Positive feedback: {this.calcFeedbackes()}%</li>
                </ul>
            </div>
        )

    }

};





export default App;