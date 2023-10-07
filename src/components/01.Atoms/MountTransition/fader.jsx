import React from 'react';
import styles from './fader.module.scss';

const Animate = ({ delay = 0, children }) => {
  const delayClassName = `delay-${delay}`;

  // Check if the dynamic class exists in the styles module
  const dynamicClass = styles[delayClassName] ? styles[delayClassName] : '';

  const animationClass = `${styles.fadeUp} ${dynamicClass}`;

  // Clone the children and add the animation classes to them
  const childrenWithProps = React.Children.map(children, child => {
    // Get the existing classes of the child
    const existingClass = child.props.className ? child.props.className : '';

    // Append the animation classes to the existing classes
    const classNames = `${existingClass} ${animationClass}`;

    return React.cloneElement(child, { className: classNames });
  });

  return <>{childrenWithProps}</>;
};

export default Animate;