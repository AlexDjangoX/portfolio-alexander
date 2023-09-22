import Image from 'next/image';

import { SkillsType } from '@/types';

const SkillCard = ({ _id, image, altText }: SkillsType) => (
  <div key={_id} className="mb-10">
    <div className="relative flex h-[3.3rem] w-[3.3rem] items-center justify-center overflow-hidden rounded-full bg-white-800 transition-transform duration-150 hover:scale-125 dark:bg-black-300 md:mx-6 md:h-[6.25rem] md:w-[6.25rem]">
      <div className="relative h-12 w-12 overflow-hidden rounded-full">
        <Image src={image} alt={altText} width={120} height={120} />
      </div>
    </div>
  </div>
);

export default SkillCard;