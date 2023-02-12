import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi';

import type { Social } from 'types';

const iconProps = {
  size: 24
};

export const socials: Social[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/JanaSunrise',
    copy: false,
    icon: <FiTwitter {...iconProps} />
  },
  {
    name: 'Github',
    url: 'https://github.com/JanaSunrise',
    copy: false,
    icon: <FiGithub {...iconProps} />
  },
  {
    name: 'Email',
    url: 'warriordefenderz@gmail.com',
    copy: true,
    icon: <FiMail {...iconProps} />
  }
];
