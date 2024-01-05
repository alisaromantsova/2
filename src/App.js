import { Component } from "react";
import Statistics from "./Components/Statistics/Statictics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback(e) {
    const name = e.target.dataset.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  }

  countTotalFeedback() {
    const totalFeedback = this.state.good + this.state.bad + this.state.neutral;

    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    let positiveFeedback = (this.state.good * 100) / (this.state.good + this.state.bad + this.state.neutral);

    if (positiveFeedback) {
      positiveFeedback = positiveFeedback.toFixed(2);
    } else {
      positiveFeedback = 0;
    }
    return positiveFeedback;
  }
  render() {
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback.bind(this)} />
        </Section>
        {this.countTotalFeedback() !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback yet." />
        )}
      </>
    );
  }
}

export default App;
