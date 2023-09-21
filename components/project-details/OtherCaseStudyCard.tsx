import Image from 'next/image';

import { CaseStudy } from '@/types';

const OtherCaseStudyCard = ({
  otherCaseStudyHeading,
  otherCaseStudyDescription,
  otherCaseStudyImageUrl,
  otherCaseStudyImageAlt,
}: CaseStudy) => (
  <div className="m-4 w-[344px] rounded-lg p-4 dark:bg-black-200 md:mb-6 md:w-[429px]">
    <div className="relative h-[187px]  rounded-md md:h-[232px]">
      <Image
        src={otherCaseStudyImageUrl}
        alt={otherCaseStudyImageAlt}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <h4 className="mt-[1.25rem] font-semibold text-primary-light  dark:text-primary-dark">
      {otherCaseStudyHeading}
    </h4>
    <p className="text-[0.875rem] leading-[150%] text-white-500 dark:text-white-800 md:leading-[160%] ">
      {otherCaseStudyDescription}
    </p>
    <button className="mt-[1rem] w-full min-w-[8rem] rounded-full bg-primary-light p-2 px-4 text-center text-[0.875rem] font-semibold leading-[1.625rem] text-white-900 dark:bg-primary-dark md:mb-4 md:text-[1.125rem]">
      <div className="flex items-center justify-center">
        <p className="mr-4">See Case Study</p>
      </div>
    </button>
  </div>
);

export default OtherCaseStudyCard;
