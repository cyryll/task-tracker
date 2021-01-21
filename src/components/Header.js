import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            {/* <h1 style = {{color:'purple', backgroundColor: 'black'}}>{props.value2}</h1> */}
            {/* <h1 style = {headingStyle}>{props.value2}</h1> */}
            <h1>{props.value2}</h1>
        </header>
    )
}

Header.defaultProps = {
    value2: 'Task Tracker',
}

Header.propTypes = {
    value2: PropTypes.string.isRequired,
}

//Css in js
// const headingStyle = {
//     color:'purple', 
//     backgroundColor: 'black'
// }

export default Header
