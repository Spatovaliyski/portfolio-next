import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({ link, buttonColor, width, external, icon, children, className }) => {
  const iconElement = (
    <Link className={className} href={link} style={!!buttonColor ? { color: buttonColor} : {}} target={!!external ? '_blank' : ''}> 
      <FontAwesomeIcon width={width} icon={icon} />
      {children}
    </Link>
  );

  return iconElement;
};

export default SocialButton;
