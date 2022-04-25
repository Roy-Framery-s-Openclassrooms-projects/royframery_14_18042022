import { Link } from 'react-router-dom'
// CSS
import './Header.scss'
const Home = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__brand">
                    <img
                        className="header__brand-img"
                        src="/logo.svg"
                        alt="logo"
                    />
                    <p className="header__brand-text">WEALTH HEALTH</p>
                </Link>
                <ul className="header__links">
                    <Link className="header__link" to="/createEmployee">
                        <li>Create Employee</li>
                    </Link>
                    <Link className="header__link" to="/employees">
                        <li>Employees List</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Home
