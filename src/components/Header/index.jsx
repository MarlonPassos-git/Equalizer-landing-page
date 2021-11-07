import logo from './logo.svg'
import './style.scss'

export function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="" />
        </header>
    )
}