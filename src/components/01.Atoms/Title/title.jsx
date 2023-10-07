import React from 'react';
import styles from './title.module.scss';

const Title = ({ type, children }) => {
  const Element = type;

  return React.createElement(Element, { className: styles.title }, children);
}

export default Title;