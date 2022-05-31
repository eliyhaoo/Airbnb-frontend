import languageIcon from '../assets/svg/language-icon.svg'
export const AppFooter = () => {

    return <section className="app-footer full">
        <div className="main-layout">
            <div className="footer-content flex align-center space-between">
                <div className="footer-right-side flex align-center space-between">
                    <span>© 2022 AAEbnb,</span> <span>Inc.</span><span> ·</span><span>Privacy</span><span> · </span><span>Terms</span><span>·</span> <span>Sitemap</span>
                </div>
                <div className="footer-left-side flex align-center space-between">
                    <img className="language-icon" src={(languageIcon)} alt="language-icon" />
                    <span>English (US)</span>
                    <span>$ US</span>
                    <span>Support & resources</span>
                </div>
            </div>
        </div>
    </section >
}

