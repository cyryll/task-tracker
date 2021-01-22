import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = (props) => {
    const location = useLocation()

    return (
        <header className='header'>
            {/* <h1 style = {{color:'purple', backgroundColor: 'black'}}>{props.value2}</h1> */}
            {/* <h1 style = {headingStyle}>{props.value2}</h1> */}
            <h1>{props.value2}</h1>
            {location.pathname === '/' && <Button 
            color={props.showAdd ? 'red' : 'green'} 
            text={props.showAdd ? 'Close' : 'Add'} 
            onClick={props.onAdd}/>}
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
