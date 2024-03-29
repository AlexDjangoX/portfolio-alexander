import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
import { PortableTextBlock } from 'sanity';

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};

export type ResumeType = {
  resumeURL: string;
};

export type MobileNavbarType = {
  toggleMobile: () => void;
  showMobileNavbar: boolean;
  closeImgSrc: string;
  pathname: string;
};

export type NavbarRoutesType = {
  pathname: string;
  toggleMobile: () => void;
};

export type DeskTopNavbarType = Omit<MobileNavbarType, 'closeImgSrc'> & {
  openImgSrc: string;
};

export type Project = {
  _id: string;
  heading: string;
  projectName: string;
  image: string;
  technologies: string[];
  index: number;
};

export type ProjectCardType = {
  heading: string;
  projectName: string;
  image: string;
  technologies: string[];
  index: number;
};

export type ProjectCardContentType = {
  heading: string;
  projectName: string;
  technologies: string[];
  buttonBackground: string;
};

export type ProjectCardImageType = {
  image: string;
  heading: string;
};

export type Testimonial = {
  _id: string;
  headingName: string;
  subheadingName: string;
  content: string;
  testimonialImage: string;
  altText: string;
};

export type CarouselType = {
  testimonials: Testimonial[];
};

export type ArrowLeftControlType = {
  onClick: () => void;
  isHiddenOnLg?: boolean;
};

export type ArrowRightControlType = {
  onClick: () => void;
  isHiddenOnLg?: boolean;
};

export type StarComponentType = {
  count: number;
};

export type TestimonialDetailsType = {
  content: string;
  headingName: string;
  subheadingName: string;
  show: boolean;
};

export interface WrapperDark200Interface {
  children: React.ReactNode;
}

export type SkillsType = {
  _id: string;
  image: string;
  altText: string;
  index: number;
};

export interface ClipboardTextInterface {
  text: string;
}

export type CaseStudiesCardType = {
  altText: string;
  _id: string;
  heading: string;
  projectName: string;
  subHeading: string;
  image: string;
  index: number;
};

export interface StudyDetailInterface {
  _id: string;
  imageUrl: string;
  imageAlt: string;
}

export interface TechStackInterface {
  techStack: StudyDetailInterface[];
}

export interface ChildInterface {
  text: string;
  marks: any[];
}

export interface BlockInterface {
  _key?: string;
  markDefs: any[];
  children: ChildInterface[];
  _type: string;
  style: string;
}

export interface ApplicationDescriptionType {
  description: BlockInterface[];
}

export interface ProjectDetailsInterface {
  params: {
    id: string;
  };
}

export type IconType = {
  className?: string;
  height?: number | string;
  width?: number | string;
};

export interface WrapperInterface {
  children: React.ReactNode;
  className?: string;
}

export type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export type FigmaType = {
  figmaDesignUrl: string;
  figmaDesignAlt: string;
};

export type ProjectDetails = {
  problemStatement: string;
  problemStatementImageUrl: string;
  problemStatementImageAlt: string;
};

export type SingleProcessType = {
  imageUrl: string;
  imageAlt: string;
  title: string;
};

export type ProblemStatementType = {
  myProcess: SingleProcessType[];
};

type ItemType = {
  _key: string;
  description: string;
};

export type ChallengesSectionType = {
  challenges: ItemType[];
  learnings: ItemType[];
  _key: string;
};

export type SectionListType = {
  items: ItemType[];
  title: string;
  iconSrc: StaticImageData;
  color: string;
};

export type PreviewCardType = {
  otherCaseStudyHeading: string;
  otherCaseStudyDescription: string;
  otherCaseStudyImageUrl: string;
  otherCaseStudyImageAlt: string;
};

export type PreviewType = {
  otherCaseStudies: PreviewCardType[];
};

export type TimelineType = {
  myRole: string;
  startDate: string;
  endDate: string;
};

export interface ToastInterface {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

export interface ToastProviderInterface {
  children: ReactNode;
}

export type ToastFunction = (
  message: string,
  type?: 'success' | 'error' | 'warning' | 'info'
) => void;

export type Service = {
  _id: string;
  heading: string;
  content: string;
  whiteImage: string;
  blueImage: string;
  blueImagePrimaryDark: string;
  index: number;
};

export type DetailsHeaderType = {
  headingUnderline: string;
  heading: string;
};

export type ApplicationHeroImageType = {
  imageUrl: string;
  imageAlt: string;
};

export type CardPropType = {
  heading: string;
  content: string;
  imgSrcWhite?: string;
  imgSrcBlue?: string;
  blueImagePrimaryDark?: string;
  index: number;
  _id: string;
};

export type WorkCardType = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
  index: number;
  certified: boolean;
  certificateLink: string;
  sliderValue: number;
  setSliderValue: (value: number) => void;
};

export type SocialLinksType = {
  iconSrc: StaticImageData;
  href: string;
};

export type NavbarLinkType = {
  path: string;
  label: string;
  isActive: boolean;
  toggleMobile: () => void;
};

export type ChallengesItemType = {
  text: string;
  title: string;
  iconSrc: any;
  index: number;
  key: string;
};

export type ProcessCardType = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  index: number;
};

export type TechSkillIconType = {
  imageUrl: string;
  imageAlt: string;
  id?: string;
  index: number;
};

export interface ProjectCardProps extends Project {
  index: number;
}

export type TechnologyType = {
  tech: string;
  buttonBackground: string;
};

export type SectionHeroType = {
  headingUnderline: string;
  heading: string;
  imageUrl: string;
  imageAlt: string;
  demoSite: string;
  sourceCode: string;
  myRole: string;
  startDate: string;
  endDate: string;
};

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'div';

export type TagTypeMapping = {
  [key in TagType]: (typeof motion)[key];
};

type Direction = 'left' | 'right' | 'up' | 'down';

export type MotionWrapperType = {
  children: React.ReactNode;
  direction: Direction;
  type: 'tween' | 'spring';
  delay: number;
  duration: number;
  className?: string;
  once?: boolean;
  translateX?: string;
  translateY?: string;
  tagType?: TagType;
};

export type FormDataType = {
  name: string;
  email: string;
  message: string;
  contact: string;
};

export interface ContactFieldType {
  label: string;
  id: string;
  type: string;
  component: string;
  getInputStyle: (error?: any) => string;
  register: any;
  errors: any;
}

export type HighlightedHeaderProps = {
  children: React.ReactNode;
  className?: string;
  highlightClassName?: string;
};

export type SiteGitLinksType = {
  demoSite: string;
  sourceCode: string;
};

export type TechIconsType = {
  id: string;
  imageUrl?: string;
  image?: string;
  altText?: string;
  imageAlt?: string;
  index: number;
  width?: number;
  height?: number;
};
