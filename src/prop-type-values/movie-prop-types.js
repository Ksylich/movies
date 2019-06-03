import PropTypes from "prop-types";

const MoviePropTypes = PropTypes.shape({
  title: PropTypes.string,
  posterPath: PropTypes.string
}).isRequired;

export { MoviePropTypes };
