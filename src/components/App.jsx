import { Component } from 'react';
import { Box } from '../commonStyles/Box';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { neutral, bad, good } = this.state;
    return neutral + bad + good;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const {
      state: { good, neutral, bad },
      countTotalFeedback,
      handleFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={5}
        maxWidth="500px"
        my={5}
        mx="auto"
        py={6}
        px={4}
        bg="muted"
        border="normal"
        borderRadius="normal"
        as="main"
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={handleFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Box>
    );
  }
}
