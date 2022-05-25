import { StayPreview } from './stay-preview'


export const StayList = ({stays}) => {
    console.log('stays',stays);
    return <section className="stay-list">

        {stays.map(stay=><StayPreview key={stay._id} stay={stay}/>)} 
    </section>
}