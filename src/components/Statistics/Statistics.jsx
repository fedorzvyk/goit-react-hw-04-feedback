import PropTypes from 'prop-types';
import { List, ListItem } from './Statistics.styled';
import {
  FaSmile,
  FaFrown,
  FaMeh,
  FaCalculator,
  FaChartBar,
} from 'react-icons/fa';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <ListItem>
        <FaSmile fill="green" />
        <span>Good:</span>
        <span>{good}</span>
      </ListItem>
      <ListItem>
        <FaMeh fill="orange" />
        <span>Neutral:</span>
        <span>{neutral}</span>
      </ListItem>
      <ListItem>
        <FaFrown fill="red" />
        <span>Bad:</span>
        <span>{bad}</span>
      </ListItem>
      <ListItem>
        <FaCalculator />
        <span>Total:</span>
        <span>{total}</span>
      </ListItem>
      <ListItem>
        <FaChartBar />
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </ListItem>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
