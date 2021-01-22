import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    
    return (
        <header className='header'>
            {/* <h1 style = {{color:'purple', backgroundColor: 'black'}}>{props.value2}</h1> */}
            {/* <h1 style = {headingStyle}>{props.value2}</h1> */}
            <h1>{props.value2}</h1>
            <Button 
            color={props.showAdd ? 'red' : 'green'} 
            text={props.showAdd ? 'Close' : 'Add'} 
            onClick={props.onAdd}/>
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
