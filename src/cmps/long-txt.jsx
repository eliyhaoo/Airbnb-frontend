import { useState } from 'react'


export const LongTxt = ({ title }) => {
    console.log('title', title)
    // console.log('length', length)
    const [isLongTxtShown, setLongTxt] = useState(false)

    const toogleShowTxt = () => {
        setLongTxt(!isLongTxtShown)
    }


}