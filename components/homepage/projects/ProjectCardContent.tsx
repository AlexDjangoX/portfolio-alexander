import Image from 'next/image';
import Link from 'next/link';

import Technology from './Technology';
import { arrow } from '@/public/assets';
import { ProjectCardContentType } from '@/types';

const ProjectCardContent = ({
  heading,
  projectName,
  technologies,
  buttonBackground,
}: ProjectCardContentType) => (
  <div className=" lg:ml-[5.4rem] lg:w-1/2">
    <h2 className="mb-[1.5rem] text-[2rem] font-bold leading-[2.3rem] tracking-[-0.02rem] text-white-900  lg:text-[2.8rem] lg:leading-[3.45rem]">
      {heading}
    </h2>
    <div className=" mb-[1.5rem] flex w-fit gap-x-4 gap-y-2">
      {technologies.map((tech) => (
        <Technology
          key={tech}
          tech={tech}
          buttonBackground={buttonBackground}
        />
      ))}
    </div>
    <div className="flex items-center gap-x-4">
      <Link
        className="font-semibold text-white-900"
        href={`/case-studies/${projectName} `}
      >
        See Detail Project
      </Link>
      <Image src={arrow} alt="arrow" width={35} height={0} />{' '}
      {projectName === 'hipnode' && (
        <Image
          src="/assets/featured.png"
          alt={heading}
          width={80}
          height={80}
          className="bg-transparent"
        />
      )}
    </div>
  </div>
);

export default ProjectCardContent;
