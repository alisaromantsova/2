import { Component } from "react";

class FeedbackOptions extends Component {
  i = 1;
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {options.map((item) => {
          this.i += 1;
          return (
            <button key={this.i} data-name={item} onClick={onLeaveFeedback}>
              {item}
            </button>
          );
        })}
      </>
    );
  }
}
export default FeedbackOptions;
