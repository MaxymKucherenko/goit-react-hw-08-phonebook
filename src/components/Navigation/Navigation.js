import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth/selectors';
import './Navigation.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className="navigation">
      <NavLink exact to="/" className="navigation__logo">
        <h1>Phonebook</h1>
      </NavLink>

      <div>
        <NavLink
          exact
          to="/"
          className="navigation__name"
          activeClassName="navigation__name--active"
        >
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink
            exact
            to="/phonebook"
            className="navigation__name"
            activeClassName="navigation__name--active"
          >
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
