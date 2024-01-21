import React from 'react';
import styles from './fader.module.scss';

/**
 * Animate component that applies a fade up animation to its children.
 * @param {Object} props - The props object.
 * @param {number} [props.delay=0] - The delay in seconds before the animation starts.
 * @param {ReactNode} props.children - The children to apply the animation to.
 * @returns {ReactNode} The animated children.
 */
const Animate = ({ delay = 0, children }) => {
  const delayClassName = `delay-${delay}`;

  const dynamicClass = styles[delayClassName] ? styles[delayClassName] : '';
  const animationClass = `${styles.fadeUp} ${dynamicClass}`;
  const childrenWithProps = React.Children.map(children, child => {
    const existingClass = child.props.className ? child.props.className : '';
    const classNames = `${existingClass} ${animationClass}`;

    return React.cloneElement(child, { className: classNames });
  });

  return <>{childrenWithProps}</>;
};

export default Animate;