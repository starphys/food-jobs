export default function Navbar() {
    return (
        <nav className="navigation">
            <a href="/" className="website-name">Spatula <span role="img" aria-label="fork-and-knife">🍽️</span></a>
            <ul>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/skills">SkillBuild</a>
                </li>
                <li>    
                    <a href="/relax">Relax</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/contact">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}