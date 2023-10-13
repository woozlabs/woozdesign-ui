'use client';
/* eslint-disable react/display-name */
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './AppBar.module.scss';

interface AppBarProps {
  variant?: 'solid' | 'transparent' | 'translucent';
  position?: 'block' | 'absolute' | 'fixed';
  children: ReactNode;
}

const AppBar: FC<AppBarProps> & {
  Heading: FC<HeadingProps>;
  Body: FC<BodyProps>;
  Action: FC<ActionProps>;
} = ({ children, variant = 'solid', position = 'fixed' }) => {
  const classes = classNames(styles[`wrapper`], styles[`wrapper--${variant}`], styles[`wrapper--${position}`]);
  return <div className={classes}>{children}</div>;
};

interface HeadingProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

AppBar.Heading = ({ children, className, style }: HeadingProps): JSX.Element => {
  return (
    <div className={classNames(styles.heading, className)} style={style}>
      {children}
    </div>
  );
};

interface BodyProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
AppBar.Body = ({ children, style, className }: BodyProps): JSX.Element => {
  return (
    <div className={classNames(styles.body, className)} style={style}>
      {children}
    </div>
  );
};

interface ActionProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  mobile?: boolean;
}
AppBar.Action = ({ children, style, className, mobile }: ActionProps): JSX.Element => {
  const classes = classNames(styles.action, className, { [styles[`action--mobile`]]: mobile });
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default AppBar;
