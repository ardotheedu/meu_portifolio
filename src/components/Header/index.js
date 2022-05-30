import './styles.scss'
import { ActiveLink } from '../ActiveLink'

export function Header() {
    return (
        <header className="headerContainer">
            <div className="headerContent">
                <nav>
                    <ActiveLink activeClassName="active" to="/homepage">
                        Home
                    </ActiveLink>
                    <ActiveLink activeClassName="active" to="/">
                        Posts
                    </ActiveLink>
                </nav>

            </div>
        </header>
    )
}