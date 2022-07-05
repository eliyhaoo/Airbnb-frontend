import { useState } from 'react'


export const LongTxt = ({ txt, maxLength }) => {
    const [isLongTxtShown, setLongTxt] = useState(false)

    const toogleShowTxt = () => {
        setLongTxt(!isLongTxtShown)
    }
    return <section className="stay-info-txt">
        <p>{(isLongTxtShown) ? txt : txt.slice(0, maxLength).trim() + ((txt.length > 100) ? '...' : '')}</p>
        {
            (txt.length > 100)
            &&
            <span className='txt-btn' onClick={toogleShowTxt}>
                {isLongTxtShown ? 'Show less' : 'Show more >'}
            </span>
        }
    </section>
}
