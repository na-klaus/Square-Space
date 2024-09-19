import React, { useEffect, useState } from 'react';
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add all required icons to the library
library.add(fat, fal, fas, fad, far, fab);

interface IconProps {
  icon: [IconPrefix, IconName];
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  // Default to a placeholder icon in case of invalid props
  const defaultIcon: [IconPrefix, IconName] = ['fas', 'question-circle'];

  const [iconType, iconKey] = Array.isArray(icon) && icon.length === 2
    ? icon
    : defaultIcon;

  const [stateIconKey, setIconKey] = useState<IconName>(iconKey);

  useEffect(() => {
    setIconKey(iconKey);
  }, [iconKey]);

  return <FontAwesomeIcon icon={[iconType, stateIconKey]} />;
};

export default Icon;
