import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../components/common/button/Button.js';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div className="inline-flex">
        <h1 className="text-2xl font-semibold text-black">C</h1>
        <h1 className="text-2xl font-semibold text-[#E6CEA0]">OO</h1>
        <h1 className="text-2xl font-semibold text-black">KIVEL</h1>
      </div>
      <div>
        <ul className="flex items-center justify-between">
          <li>
            <a href="#">메뉴</a>
          </li>
          <li>
            <a href="#">메뉴</a>
          </li>
          <li>
            <a href="#">메뉴</a>
          </li>
          <li>
            <a href="#">메뉴</a>
          </li>
          <li>
            <a href="#">메뉴</a>
          </li>
        </ul>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              환영합니다, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
