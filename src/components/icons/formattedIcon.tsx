import React from 'react';
import {
  IconLogo,
  IconNotFound,
  QMKLogo,
  VialLogo,
  ViaLogo,
} from '@components/icons';
import {
  MdAccountCircle,
  MdBrightness3,
  MdBrightness7,
  MdContactMail,
  MdEmail,
  MdFolderOpen,
  MdLocationOn,
  MdPhotoCamera,
} from 'react-icons/md';
import {
  FaDribbble,
  FaExternalLinkAlt,
  FaGithub,
  FaGooglePlay,
  FaInstagram,
  FaRegFolder,
  FaStar,
} from 'react-icons/fa';
import { CgGitFork } from 'react-icons/cg';
import { ImLinkedin } from 'react-icons/im';
import { SiRedbubble } from 'react-icons/si';
import { BsCpuFill } from 'react-icons/bs';

const FormattedIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'About':
      return <MdAccountCircle />;
    case 'Photography':
      return <MdPhotoCamera />;
    case 'Projects':
      return <MdFolderOpen />;
    case 'Contact':
      return <MdContactMail />;
    case 'CPU':
      return <BsCpuFill />;
    case 'dark':
      return <MdBrightness7 />;
    case 'Dribbble':
      return <FaDribbble />;
    case 'Email':
      return <MdEmail />;
    case 'External':
      return <FaExternalLinkAlt />;
    case 'Folder':
      return <FaRegFolder />;
    case 'Fork':
      return <CgGitFork />;
    case 'GitHub':
      return <FaGithub />;
    case 'Instagram':
      return <FaInstagram />;
    case 'light':
      return <MdBrightness3 />;
    case 'Linkedin':
      return <ImLinkedin />;
    case 'Location':
      return <MdLocationOn />;
    case 'Logo':
      return <IconLogo />;
    case 'NotFound':
      return <IconNotFound />;
    case 'PlayStore':
      return <FaGooglePlay />;
    case 'QMK':
      return <QMKLogo />;
    case 'Redbubble':
      return <SiRedbubble />;
    case 'Star':
      return <FaStar />;
    case 'Via':
      return <ViaLogo />;
    case 'Vial':
      return <VialLogo />;
    default:
      return <FaExternalLinkAlt />;
  }
};

export default FormattedIcon;
