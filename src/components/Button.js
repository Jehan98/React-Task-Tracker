import PropTypes from "prop-types";

const Button = ({color, btnValue, addTask}) => {
    return (
        <button className="btn" style={{backgroundColor: color}} onClick={(e)=>addTask()}>{btnValue}</button>
    )
}

Button.defaultProps = {
    title: "Add",
    btnValue: "green"
}

Button.prototype = {
    title: PropTypes.string
}

export default Button
