import Image from 'next/image';

import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';
import ProjectDetailsHeading from '../reusable/ProjectDetailsHeading';
import { ProjectDetails } from '@/types';

const ProjectDetailsProblemStatement = ({
  problemStatement,
  problemStatementImageUrl,
  problemStatementImageAlt,
}: ProjectDetails) => {
  return (
    <WrapperProjectDetails additionalStyles="bg-white-900 dark:bg-black-200 px-[1.5rem] py-[2.25rem] md:py-[4.5rem] md:px-[4.5rem]">
      <ProjectDetailsHeading
        subHeading="Problem"
        mainHeading="Problem Statement"
      />
      <p className="py-[1.75rem] text-[0.875rem] leading-[155%] text-white-500 dark:text-white-800 md:text-[1.25rem]">
        {problemStatement}
      </p>
      <Image
        className="h-full w-full object-cover"
        src={problemStatementImageUrl}
        width={444}
        height={263}
        alt={problemStatementImageAlt}
      />
    </WrapperProjectDetails>
  );
};

export default ProjectDetailsProblemStatement;
