import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title, addTask, viewAddTask}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button addTask={addTask} viewAddTask={viewAddTask} color={viewAddTask ? "orange" : "green"} btnValue={viewAddTask ? "Close": "Add"} />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
