import { StayPreview } from './stay-preview'

export const StayList = ({ stays, history }) => {
    console.log('stays', stays)
    return <section className="stay-list">
        {stays.map(stay => <StayPreview key={stay._id} stay={stay} history={history} />)}
    </section>
}

