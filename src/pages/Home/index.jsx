import './Home.scss'

function Home() {
    return (
        <div className="home">
            <div className="home__content">
                <img src="/logo.svg" className="home__logo" alt="logo" />
                <p className="home__text">
                    Welcome to <span className="home__text-hrnet">HRnet</span>
                </p>
            </div>
        </div>
    )
}

export default Home
