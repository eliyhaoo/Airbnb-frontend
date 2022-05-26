import { DatePicker } from '../cmps/date-picker'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setIsInHomePage } from "../store/actions/system.action"

export const HomePage = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setIsInHomePage(true))
    },[])

    return <section className="home-page full">

        <div className="hero full flex">
            {/* <img src="https://a0.muscache.com/im/pictures/miso/Hosting-5904771/original/ab9a30d4-a6cf-4b3a-8416-cf7314ed5432.jpeg?im_w=1200" alt="hero" /> */}
        </div>

        {/* <DatePicker/> */}
{/*         
        <div className="grid-test main-">
       
        <div className="test flex space-between align-center">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        </div> */}

    </section>
}