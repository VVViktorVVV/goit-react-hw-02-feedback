import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Statistics extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         good: 0,
    //         neutral: 0,
    //         bad: 0
    //     };

        // this.calcFeedback = this.calcFeedback.bind(this);
        // this.handleChange = this.handleChange.bind(this);


    // }

    state = {
            good: 0,
            neutral: 0,
            bad: 0
        };
    

    calcFeedback = () => {
       
    this.setState(prevState => ({
      good: prevState.value + 1,
    }));
        console.log(this.state)
    };
    
    // handleChange = e => {
    // const { name } = e.currentTarget;

    // this.setState({ [name]: 5 });
    // };
    

    render() {
        return (
            <div>
                <div>
            <h1>Please leave feedback</h1>
            <button type='button' onClick={this.calcFeedback}>Good</button>
            <button type='button'>Neutral</button>
            <button type='button'>Bad</button>
        </div>
                <h2>Statistics</h2>
                <ul>
                    <li className="statisticsList__item" name="good">Good: {this.state.good}</li>
                    <li className="statisticsList__item" name="neutral">Neutral: {this.state.neutral}</li>
                    <li className="statisticsList__item" name="bad">Bad: {this.state.bad}</li>
                    <li className="statisticsList__item">Total: 0</li>
                    <li className="statisticsList__item">Positive feedback: 0%</li>
                </ul>
            </div>
        )

    }
    
    
}


export default Statistics