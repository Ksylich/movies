import PropTypes from "prop-types";

export const MoviePropTypes = PropTypes.shape({
  title: PropTypes.string,
  posterPath: PropTypes.string
}).isRequired;
