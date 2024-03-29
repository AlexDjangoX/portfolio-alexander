'use client';

import Image from 'next/image';
import Link from 'next/link';

import { WorkCardType } from '@/types';
import MotionWrapper from '../../../HOC/MotionWrapper';
import { LinkIcon } from '../../icons/LinkIcon';

const ExperienceCard = ({
  title,
  subtitle,
  description,
  imgSrc,
  index,
  certificateLink,
  sliderValue,
  setSliderValue,
}: WorkCardType) => {
  const handleMouseOver = () => {
    setSliderValue(index + 1);
  };

  return (
    <MotionWrapper
      direction="up"
      type="spring"
      delay={0.05 * index}
      duration={1.75}
      translateX="0rem"
      className={`${
        sliderValue === index + 1
          ? 'border border-primary-light dark:border-primary-dark'
          : sliderValue === 4
          ? 'translate-x-[1.875rem] border border-primary-light dark:border-primary-dark '
          : 'border border-transparent'
      } h-[13.125rem] min-w-[19rem]  overflow-hidden rounded-xl px-6 py-4 shadow-cardShadowSmallBlue hover:shadow-cardShadowLarge  dark:shadow-cardShadowSmall hover:dark:shadow-cardShadowLarge lg:h-[10.5rem]`}
    >
      <div
        onMouseOver={handleMouseOver}
        onClick={() => setSliderValue(index + 1)}
        className="flex items-center justify-start"
      >
        <figure>
          <Image
            className="m-[1.5rem] shadow-cardShadowSmallBlue dark:shadow-cardShadowSmall"
            src={imgSrc}
            alt="Work Card Image"
            width={58}
            height={58}
          />
          <figcaption className="sr-only">{title}</figcaption>
        </figure>

        {certificateLink ? (
          <Link
            target="_blank"
            className="flex items-center justify-center rounded-lg bg-white-900 px-2 py-0.5 text-[0.875rem] font-thin leading-[2rem] text-primary-light dark:bg-black-300 dark:text-primary-dark md:text-[1.125rem]"
            href={certificateLink}
          >
            <LinkIcon /> Certificate
          </Link>
        ) : (
          <h3 className="font-semibold leading-[1.95rem] text-black-200 dark:text-white-900 md:text-[1.5rem]">
            {title}
          </h3>
        )}

        <p className="ml-4 dark:text-white-800">{subtitle}</p>
      </div>
      <p className="ml-[1.5rem] text-[0.875rem] font-normal leading-[1.356rem] text-white-500 dark:text-white-900 md:text-[0.875rem]">
        {description}
      </p>
    </MotionWrapper>
  );
};

export default ExperienceCard;
