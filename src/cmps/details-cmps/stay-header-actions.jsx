import shareSvg from '../../assets/svg/Share.svg'
import saveSvg from '../../assets/svg/Save.svg'
import backSvg from '../../assets/svg/arrow-prev.svg'

export const StayHeaderActions = ({ history }) => {
    const onGoBack = () => {
        history.push('/explore')
    }

    return <div className="actions-container flex">
        <div className="action-container flex" onClick={onGoBack}>
            <img className="back-img" src={backSvg} alt="back" />
        </div>
        <div className="flex gap-5 align-center">
            <div className="action-container flex">
                <img className="share-img" src={shareSvg} alt="share" />
                <span>Share</span>
            </div>
            <div className="action-container flex">
                <img className="save-img" src={saveSvg} alt="save" />
                <span>Save</span>
            </div>
        </div>
    </div>
}