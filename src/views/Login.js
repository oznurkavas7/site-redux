import {useDispatch} from 'react-redux';
import {login} from "../stores/auth"
import {useNavigate} from "react-router-dom"

function Login () {
    const history = useNavigate();
    const dispatch= useDispatch();

    const handleLogin = () => {
        const dummyData = {
            id: 1,
            name: 'Öznur',
            token: 'asasasasaasasdasadaa'
        }
        dispatch(login(dummyData))
        history('/')
    }
    return(
        <div>
            Giriş yap
            <button onClick={handleLogin}> Giriş için tıklayın</button>
        </div>
    )
}

export default Login