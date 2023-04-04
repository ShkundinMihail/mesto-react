import React from "react";

export function Login ({handleLogin}) {
    const [formValue, setFormValue] =  React.useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formValue;
        handleLogin(email, password);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }
    return(
<main className="login">
                <h3 className="login__title">Вход</h3>
                <form onSubmit={handleSubmit}  className="form-authorizations">
                    <input
                        name="email"
                        type="email"
                        className="form-authorizations__input form-authorizations__input_margin-bottom"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                     />
                    <input
                        name="password"
                        type="password"
                        className="form-authorizations__input"
                        placeholder="Пароль"
                        required
                        onChange={handleChange}
                    />
                    <button
                        className="form-authorizations__submit"
                        type="submit">
                        Войти
                    </button>
                </form>
            </main>
    )
}
