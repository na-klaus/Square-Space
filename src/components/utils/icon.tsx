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
  // Check if the icon prop is valid
  if (!Array.isArray(icon) || icon.length !== 2) {
    console.error('Invalid icon prop:', icon);
    return null;
  }

  const [iconType, iconKey] = icon;

  // Ensure the iconType and iconKey are valid
  if (!iconType || !iconKey) {
    console.error('Icon prefix or name is missing:', icon);
    return null;
  }

  const [stateIconKey, setIconKey] = useState<IconName>(iconKey);

  useEffect(() => {
    setIconKey(iconKey as IconName);
  }, [iconKey]);

  return <FontAwesomeIcon icon={[iconType as IconPrefix, stateIconKey]} />;
};

export default Icon;
