import PropTypes from "prop-types";

export default PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
    rest: PropTypes.string,
    id: PropTypes.number
})