import PropTypes from 'prop-types';


class Types {
  constructor() {
    this.path = PropTypes.shape({
      title: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired,
      isFavorite: PropTypes.boolean
    });
  }
}

const propTypes = new Types();

export default propTypes;