import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { IStylable } from '../../interfaces';

import './navigation.scss';

const Navigation: FC<IStylable> = (props) => {
  const { className = '', style = {} } = props;

  return (
    <nav {...{ className, style }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/articles">Articles</NavLink>
    </nav>
  );
};

export default Navigation;
