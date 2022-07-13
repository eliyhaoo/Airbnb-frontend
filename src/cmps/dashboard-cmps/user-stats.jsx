import envelopeSvg from '../../assets/svg/open-reservations.svg'
import coinSvg from '../../assets/svg/income-coin.svg'
import starSvg from '../../assets/svg/star.svg'
import heartSvg from '../../assets/svg/heart.svg'

export const UserStats = () => {

    const statsFields = [
        {
            title: 'This month income',
            info: '$13,420',
            precentage: '+67%',
            svg: coinSvg,
            alt: 'coin'
        },
        {
            title: 'Added to wishlist',
            info: '67',
            precentage: '+18%',
            svg: heartSvg,
            alt: 'heart'
        },
        {
            title: 'New Messages',
            info: '35',
            svg: envelopeSvg,
            alt: 'envelope'
        },
        {
            title: 'Rating',
            info: '4.9',
            precentage: '+12%',
            svg: starSvg,
            alt: 'star'
        },
    ]

    return <div className="user-stats">

        {statsFields.map(field =>
            <div className="stats-container flex space-between align-center">

                <div className="stats-info-container flex direction-column">
                    <div className="stats-title">{field.title}</div>
                    <div >
                        <span className="price-span">{field.info}</span>
                        {field.precentage && <span className="precentage-span">{field.precentage}</span>}
                    </div>
                </div>

                <div className="stats-img-container">
                    <img src={field.svg} alt={field.alt} />
                </div>

            </div>
        )}
        
    </div>
}