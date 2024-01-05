import { Component } from "react";

class Statictics extends Component {
  render() {
    const { good, bad, neutral, total, positivePercentage } = this.props;
    return (
      <>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>TotalFeedback:{total}</p>
        <p>PositiveFeedback: {positivePercentage}%</p>
      </>
    );
  }
}
export default Statictics;
