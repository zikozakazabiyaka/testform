import React, { useState } from "react"

export const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const handleChangeEmail = (event) => {
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
      <input
        type="email"
        value={login}
        onChange={handleChangeEmail}
        placeholder="Login"
        className="form__input"
      >
      </input>
      {isLogin && (
          <p>Please enter the Email</p>
        )}
      <input
        value={password}
        onChange={handleChangePass}
        placeholder="Password"
        className="form__input"
      >
      </input>
      {isPassword && (
          <p>Please enter the Password</p>
        )}
      <button
        type="submit"
        className="form__button"
      >
        Login
      </button>
    </form>
  )
}