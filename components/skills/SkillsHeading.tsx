import MotionWrapperHeadingTwo from '@/HOC/MotionWrapperHeadingTwo';

const SkillsHeading = () => {
  return (
    <MotionWrapperHeadingTwo
      direction="right"
      type="spring"
      delay={0.5}
      duration={2.75}
      additionalStyles="text-center mb-[2.5rem] text-black-200 dark:bg-black-200 dark:text-white-900"
    >
      <div className="relative inline-flex items-center whitespace-nowrap">
        <p className="z-20 ">My Skills</p>
        <div className="absolute z-10 mt-7 h-[1.1rem] w-full rounded-sm bg-secondary-dark md:mt-9 md:h-[1.3rem]" />
      </div>
    </MotionWrapperHeadingTwo>
  );
};

export default SkillsHeading;
