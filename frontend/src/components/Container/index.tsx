import React, { FC, CSSProperties, PropsWithChildren } from 'react';

import "./container.scss";

export interface IContainer {
  className?: string
  style?: CSSProperties
}

const Container: FC<PropsWithChildren<IContainer>> = (props): JSX.Element => {
  const { 
    className = "",
    style = {},
    children,
  } = props;

  return <div className={`container ${className}`} style={style} >
    {children}
  </div>
}

export default Container;