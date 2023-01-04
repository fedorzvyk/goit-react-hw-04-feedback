import { useState } from 'react';

import { Box } from '../commonStyles/Box';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(state);

  // console.log(options);

  const handleFeedback = option => {
    // console.log(option);
    setState(
      prevState => {
        console.log(prevState[option]);
        return {
          ...prevState,
          [option]: prevState[option] + 1,
        };
      },
      [state]
    );
  };

  const countTotalFeedback = () => {
    // console.log(state);
    const { neutral, bad, good } = state;
    // console.log(good);
    return neutral + bad + good;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / countTotalFeedback());
  };

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
          options={options}
          onLeaveFeedback={handleFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
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
