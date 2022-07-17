import shareSvg from '../../assets/svg/Share.svg'
import saveSvg from '../../assets/svg/Save.svg'

export const StayHeaderActions = () => {
    return <div className="actions-container flex">
        <div className="action-container flex">
            <img className="share-img" src={shareSvg} alt="share" />
            <span>Share</span>
        </div>

        <div className="action-container flex">
            <img className="save-img" src={saveSvg} alt="save" />
            <span>Save</span>
        </div>
    </div>
}