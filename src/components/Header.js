import { Link, Routes, Route } from 'react-router-dom';

function Header({ handleSignOut }) {
  return (
    <header className='header'>
      <a href='#' className='header__logo'></a>
      <Routes>
        <Route
          path='sign-in'
          element={
            <Link to='/sign-up' className='header__link'>
              Регистрация
            </Link>
          }
        />
        <Route
          path='sign-up'
          element={
            <Link to='/sign-in' className='header__link'>
              Войти
            </Link>
          }
        />
        <Route
          path='/'
          element={
            <Link
              to='/sign-in'
              className='header__link'
              onClick={handleSignOut}>
              Выйти
            </Link>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
