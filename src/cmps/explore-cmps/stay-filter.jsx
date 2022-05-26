import { AppFooter } from "../app-footer"

export const StayFilter = ({ showFilterModal, history }) => {

    const onCloseModal = () => {
        showFilterModal(false)
        history.push('/explore')
    }
    return <div className="stay-filter">
        <screen onClick={() => onCloseModal()} className="screen"></screen>
        <div className="filter-modal">
            <h3 className="modal-title">Filters</h3>
            <form className="filter-form">
                <div className="price-range">
                    <h2>Price range</h2>
                    <p>The average nightly price is XXXX</p>
                </div>
                <div className="type-of-place">
                    <h2>Type of place</h2>
                    <label for="entire-place">A place all to yourself
                        <input type="checkbox" id="entire-place" name="entire-place" />
                    </label>
                    <label for="shared-room"> Shared room
                        <input type="checkbox" id="shared-room" name="shared-room" />
                    </label>
                    <label for="">
                        <input type="checkbox" />
                    </label>
                </div>
            </form>
            <AppFooter />
        </div>
    </div>
}