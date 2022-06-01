import { useSelector } from 'react-redux'
import languageIcon from '../assets/svg/language-icon.svg'

export const AppFooter = () => {

    const { visitedPage } = useSelector(storeState => storeState.systemModule)

    return <section className={("app-footer full " + visitedPage)}>
        <div className={visitedPage === 'details-page' ? 'details-layout' : visitedPage === 'explore-page' ? 'main-layout' : 'home-page-layout'}>
            {visitedPage === 'details-page' && <div className="details-page-footer-content">
                <ul className="details-footer-support clean-list">
                    <span><li>Support</li></span>
                    <li>Help Center</li>
                    <li>Supporting people with disabilities</li>
                    <li>Report a neighborhood concern</li>
                    <li>AirCover</li>
                    <li>Cancellation options</li>
                    <li>Safety information</li>
                    <li>Our COVID-19 Response</li>
                </ul>
                <ul className="details-footer-community clean-list">
                    <span><li>Community</li></span>
                    <li>Airbnb.org: disaster relief housing</li>
                    <li>Support Afghan refugees</li>
                    <li>Combating discrimination</li>
                </ul>
                <ul className="details-footer-hosting clean-list">
                    <span><li>Hosting</li></span>
                    <li>Try hosting</li>
                    <li>Visit our community forum</li>
                    <li>AirCover for Hosts</li>
                    <li>How to host responsibly</li>
                    <li>Explore hosting resources</li>
                    <li>Help Center</li>
                </ul>
                <ul className="details-footer-about clean-list">
                    <span><li>About</li></span>
                    <li>Newsroom</li>
                    <li>Careersr</li>
                    <li>Learn about new features</li>
                    <li>Investors</li>
                    <li>Letter from our founders</li>
                </ul>
            </div>}
            <div className="footer-content flex align-center space-between">
                <div className="footer-right-side flex align-center space-between">
                    <span>© 2022 Topbnb,</span> <span>Inc.</span><span> ·</span><span>Privacy</span><span> · </span><span>Terms</span><span>·</span> <span>Sitemap</span>
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



