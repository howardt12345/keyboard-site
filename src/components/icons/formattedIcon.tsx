import React from 'react';
import PropTypes from 'prop-types';
import { IconLogo, IconNotFound } from '@components/icons';
import {
  MdAccountCircle,
  MdBrightness3,
  MdBrightness7,
  MdContactMail,
  MdEmail,
  MdFolderOpen,
  MdLocationOn,
  MdPhotoCamera,
} from "react-icons/md";
import {
  FaDribbble,
  FaExternalLinkAlt,
  FaGithub,
  FaGooglePlay,
  FaInstagram,
  FaRegFolder,
  FaStar,
} from "react-icons/fa";
import { CgGitFork } from 'react-icons/cg'
import { ImLinkedin } from 'react-icons/im';
import { SiRedbubble } from 'react-icons/si';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'About':
      return <MdAccountCircle />;
    case 'Photography':
      return <MdPhotoCamera />;
    case 'Projects':
      return <MdFolderOpen />;
    case 'Contact':
      return <MdContactMail />;
    case "dark":
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
    case "light":
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
    case 'Redbubble':
      return <SiRedbubble />;
    case 'Star':
      return <FaStar />;
    default:
      return <FaExternalLinkAlt />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;