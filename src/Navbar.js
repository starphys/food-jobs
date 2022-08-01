import { Link } from "react-router-dom" // works as anchor tag
export default function Navbar() {
    return (
        <nav className="navigation">
            <Link to="/" className="website-name">Spatula <span role="img" aria-label="fork-and-knife">🍽️</span></Link>
            <ul>
                <displayPage to="/about">About Us</displayPage>
                <displayPage to="/joblistings">SkillBuild</displayPage>
                <displayPage to="/skills">Relax</displayPage>
                <displayPage to="/profile">Profile</displayPage>
                <displayPage to="/contact">Contact Us</displayPage>
            </ul>
        </nav>
    )
}

function displayPage({to, children,...props}) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}