import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="quizapp-nav-content">
                    <h1>Student System</h1>
                    <a href="https://github.com/AnaBilecki">
                        <div className="quizapp-contact-container">
                            <GithubIcon />
                            <p className="quizapp-contact-link">/AnaBilecki</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;