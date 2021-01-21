import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            {/* <h1 style = {{color:'purple', backgroundColor: 'black'}}>{props.value2}</h1> */}
            {/* <h1 style = {headingStyle}>{props.value2}</h1> */}
            <h1>{props.value2}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
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
