'use client';
import React, { FC } from 'react';
import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.props';
import classNames from 'classnames';

const Tooltip: FC<TooltipProps> = (props) => {
  const { className, style, children, content, placement = 'top' } = props;

  const classes = classNames(styles.tooltip, className);

  return (
    <div className={classes} data-placement={placement}>
      {children}
      <div className={`${styles.tooltiptext}`}>
        <div className={styles.ellipsisContent}>{content}</div>
      </div>
    </div>
  );
};

export default Tooltip;
