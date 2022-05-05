import PropTypes from 'prop-types'
// CSS
import './MainTitlePage.scss'

/**
 *
 * @description Comment that show the main title (<h1></h1>)
 * @returns { HTMLElement }
 */
export const MainTitlePage = ({ text }) => {
    return <h1 className="title">{text}</h1>
}

MainTitlePage.propTypes = {
    text: PropTypes.string,
}
