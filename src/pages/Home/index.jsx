import './Home.scss'

/**
 * @description Component that show the Home page
 * @returns { HTMLElement }
 */
function Home() {
    document.title = 'HRnet - Home'
    return (
        <main className="home">
            <div className="home__content">
                <img src="/logo.svg" className="home__logo" alt="logo" />
                <h1 className="home__text">
                    Welcome to <span className="home__text-hrnet">HRnet</span>
                </h1>
            </div>
        </main>
    )
}

export default Home
