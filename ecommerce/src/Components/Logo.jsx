import logo from '../../assets/logo.png'
import '../Login.css'

function Logo () {
    return(
        <div className="logo">
            <img src={logo} className="logoImg" alt="logo" />
        </div>
    );
}

export default Logo;