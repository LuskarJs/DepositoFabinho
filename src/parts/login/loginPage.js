import "./login.css";

const Login = () => {


    return (
        <section id="Login">
                <form>
                    <div className="input-form">
                        <label>Login</label>
                        <input type="text" placeholder="Digite seu Login" />
                        <small>Preencha os campos</small>
                    </div>
                    <div className="input-form">
                        <label>senha</label>
                        <input type="password" placeholder="Digite sua senha" />
                        <small>Preencha os campos</small>
                    </div>
                    <div className="or-container">
                        <span></span>
                        <p>ou</p>
                        <span></span>
                    </div>
                    <div className="Forget">
                        <p>Esqueci a senha</p>
                    </div>
                    <button type="submit">Fazer Login</button>
                </form>
        </section>
    )
}

export default Login;