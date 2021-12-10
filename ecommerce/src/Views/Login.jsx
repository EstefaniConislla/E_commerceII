import Logo from '../Logo';
import '../Login.css';
import tiendaRopa from '../../Assets/tiendaRopa.png'

const Login = () => {
    return (
        <section className="loginSection">
            <div className="desktopContainer">
                <div className="containerLogoDesktop">
                    <img src={tiendaRopa} className="viewDesktop" alt="dispositivos" />
                </div>
            </div>
            <div className="loginContainer">
                <Logo/>
                <div className="loginSubtitle">
                    <h2 className="loginH2">¡Bienvenidos!</h2>
                </div>
                <div className="loginTitle">
                    <h1 className="loginH1">INICIA SESIÓN</h1>
                </div>
                <form className="formLogin">
                    <div className="inputList">
                        <input className="formInput inputGmail" type="text" placeholder="Correo electrónico" required/><br />
                        <input className="formInput inputPassword" type="password" placeholder="Contraseña" required/><br />
                    </div>
                    <div className="loginButton">
                        <input className="loginBtn" type="submit" value="Ingresar"/>
                    </div>
                </form>
                <div className="loginRegisterLink">
                    <span>¿No tienes cuenta? Regístrate <a href="/register">aquí</a></span>
                </div>
            </div>
        </section>
    );
}

export default Login;