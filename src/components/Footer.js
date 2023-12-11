import { useSelector, useDispatch } from 'react-redux';
import {setDarkMode, setLanguage} from "../stores/site"
import {logout} from '../stores/auth'

function Footer() {
    const dispatch = useDispatch();
    const { dark, language } = useSelector(state => state.site);
    const {user} = useSelector(state => state.auth)
    const languages = ['tr', 'en']

    const handleLang = lang => {
        dispatch(setLanguage(lang))
    }

    return (
        <div>
            footer
            <div>
                {
                    languages.map((lang, index) => (
                        <button onClick={() => handleLang(lang)} className={lang === language ? 'active' : ''} key={index}>{lang}</button>
                    ))

                }
            </div>
            <div>
                <button onClick={() => dispatch(setDarkMode())}>
                    {dark ? 'Light Moda Geç' : 'Dark Moda Geç'}
                </button>
            </div>
            {user && (
                <div>
                    <button onClick={() => dispatch(logout())}>Çıkış yap</button>
                    </div>
            )}
        </div>
    )
}

export default Footer