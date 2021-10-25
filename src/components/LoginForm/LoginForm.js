import React, { useState } from "react"
import './styles.scss';

export const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const handleChangeLogin = (event) => {
    const { value } = event.target;

    setLogin(value)
  }

  const handleChangePass = (event) => {
    const { value } = event.target;

    setPassword(value)
  }

  const clearForm = () => {
    setLogin('');
    setPassword('');
    setIsLogin(false);
    setIsPassword(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!login) {
      setIsLogin(true);
    }

    if (!password) {
      setIsPassword(true)
    }

    if (login && password) {
      clearForm()
    }
  }

  return (
    <form
    onSubmit={handleSubmit}
    className="form"
    >
      <h2 className="form__title">Login form</h2>

      <label className="form__label">
        <input
          type="text"
          value={login}
          onChange={handleChangeLogin}
          placeholder="Login"
          className="form__input"
        >
        </input>
        {isLogin && (
            <p className="form__error">Please enter the Login</p>
          )}
        <input
          type="password"
          value={password}
          onChange={handleChangePass}
          placeholder="Password"
          className="form__input"
        >
        </input>
        {isPassword && (
            <p className="form__error">Please enter the Password</p>
          )}
        <button
          type="submit"
          className="form__button"
        >
          Log in
        </button>
      </label>
    </form>
  )
}