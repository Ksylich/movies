import PropTypes from 'prop-types';

const MoviePropTypes = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  score: PropTypes.number,
  language: PropTypes.string,
  realiseDate: PropTypes.string,
  posterPath: PropTypes.string,

}).isRequired;

export default MoviePropTypes;
