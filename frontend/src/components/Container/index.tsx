import React, { FC, PropsWithChildren } from 'react';

import { IStylable } from '../../interfaces';

import './container.scss';

const Container: FC<PropsWithChildren<IStylable>> = (props) => {
  const { className = '', style = {}, children } = props;

  return (
    <div className={`container ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Container;
