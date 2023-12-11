import {useSelector} from 'react-redux';
import {NavLink} from "react-router-dom"

function SiteHeader() {
    const {dark, language} = useSelector(state => state.site);

    return(
        <div>
           header
           <nav>
            <NavLink to="/" exact={true} activeClassName="active">Anasayfa</NavLink>
            <NavLink to="/about" exact={true} activeClassName="active">Hakkında</NavLink>
            <NavLink to="/profile" exact={true} activeClassName="active">Profil</NavLink>
           </nav>
           <div>
            Dark mode: {dark ? 'evet' : 'hayır'} <br/>
            Mevcut Dil: {language}
           </div>
        </div>
    )
}

export default SiteHeader