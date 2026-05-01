import type { IconType } from "react-icons";
import {
  FaBriefcase,
  FaClock,
  FaEnvelope,
  FaFlask,
  FaGithub,
  FaGitlab,
  FaHammer,
  FaLinkedin,
  FaRegFileLines,
  FaScrewdriverWrench,
  FaRegStar,
  FaStackOverflow,
  FaUser,
} from "react-icons/fa6";

export const navIconMap: Record<string, IconType> = {
  About: FaUser,
  "Case Studies": FaFlask,
  "Demo Projects": FaHammer,
  Experience: FaBriefcase,
  Skills: FaRegStar,
  Now: FaClock,
  Uses: FaScrewdriverWrench,
  Contact: FaEnvelope,
};

export const socialIconMap: Record<string, IconType> = {
  Email: FaEnvelope,
  GitHub: FaGithub,
  GitLab: FaGitlab,
  StackOverflow: FaStackOverflow,
  LinkedIn: FaLinkedin,
  CV: FaRegFileLines,
};
