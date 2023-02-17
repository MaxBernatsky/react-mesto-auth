import { Link } from 'react-router-dom';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='register'>
      <h2 className='register__title'>Регистрация</h2>
      <form className='register__form' onSubmit={handleSubmit}>
        <input
          id='user-email'
          type='email'
          className='register__input'
          name='registerEmail'
          placeholder='Email'
          required
        />
        <input
          id='user-password'
          type='password'
          className='register__input'
          name='registerPassword'
          placeholder='Пароль'
          required
        />
        <button className='register__button' type='submit'>
          Зарегистрироваться
        </button>
        <div className='register__wrap'>
          <p className='register__text'>Уже зарегистрированы?</p>
          <Link to='sign-in' className='register__link'>
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
