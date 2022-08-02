import { Link, useMatch, useResolvedPath } from "react-router-dom" // works as anchor tag
export default function Navbar() {
    return (<div class="Background">
        <nav className="navigation">
            <Link to="/" className="website-name">Spatula <span role="img" aria-label="fork-and-knife">🍽️</span></Link>
            <ul>
                <DisplayPage to="/about">About Us</DisplayPage>
                <DisplayPage to="/joblistings">Job Listings</DisplayPage>
                <DisplayPage to="/skills">Skill Honer</DisplayPage>
                <DisplayPage to="/relax">Relax</DisplayPage>
                {/* <DisplayPage to="/profile">Profile</DisplayPage> */}
                {/* <DisplayPage to="/contact">Contact Us</DisplayPage> */}
            </ul>
        </nav>
        <div className="Spatula-Footer" />
    </div>)
}

function DisplayPage({to, children,...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}