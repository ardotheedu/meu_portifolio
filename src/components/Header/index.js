import './styles.scss'
import { ActiveLink } from '../ActiveLink'

export function Header() {
    return (
        <header className="headerContainer">
            <div className="headerContent">
                <nav>
                    <div></div>
                    <div>
                        <ActiveLink activeClassName="active" to="/homepage">
                            Home
                        </ActiveLink>
                        <ActiveLink activeClassName="active" to="/portifolio">
                            portfolio
                        </ActiveLink>
                        <ActiveLink activeClassName="active" to="/servicos">
                            serviços
                        </ActiveLink>
                        <ActiveLink activeClassName="active" to="/sobre">
                            sobre
                        </ActiveLink>
                        <ActiveLink activeClassName="active" to="/contato">
                            contato
                        </ActiveLink>
                    </div>
                </nav>

            </div>
        </header>
    )
}