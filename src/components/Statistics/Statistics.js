import PropTypes from 'prop-types';
import { Data } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <Data>Good: {good}</Data>
      <Data>Neutral: {neutral}</Data>
      <Data>Bad: {bad}</Data>
      <Data>Total: {total}</Data>
      <Data>Positive feedback: {positive}%</Data>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};
