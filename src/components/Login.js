const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='login'>
      <h2 className='login__title'>Вход</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <input
          id='user-email'
          type='email'
          className='login__input'
          name='loginEmail'
          placeholder='Email'
          required
        />
        <input
          id='user-password'
          type='password'
          className='login__input'
          name='loginPassword'
          placeholder='Пароль'
          required
        />
        <button className='login__button' type='submit'>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
