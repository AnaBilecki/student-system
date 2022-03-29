import './styles.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-author">
                    <p>Developed by Ana Carolina Bilecki</p>
                </div>
                <div className="footer-content">
                    <p>Project inspired by</p>
                    <a href="https://www.youtube.com/watch?v=O_XL9oQ1_To&ab_channel=CodeWithArjun">
                        <p>CodeWithArjun</p>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;