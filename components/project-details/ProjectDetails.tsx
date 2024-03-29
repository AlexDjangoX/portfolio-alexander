import { notFound } from 'next/navigation';

import { getCaseStudyByProjectName } from '@/sanity/sanity.query';
import {
  SectionHero,
  ApplicationDescription,
  TechStack,
  ProblemStatement,
  FigmaDesign,
  Process,
  ChallengesSection,
  CaseStudies,
  CallToAction,
} from '.';

const ProjectDetails = async ({ projectId }: { projectId: string }) => {
  const project = await getCaseStudyByProjectName(projectId);

  if (!project) notFound();
  return (
    <section className="flex w-full flex-col overflow-hidden dark:bg-black-300">
      <SectionHero
        headingUnderline={project?.headingUnderline}
        heading={project?.heading}
        imageUrl={project?.imageUrl}
        imageAlt={project?.imageAlt}
        demoSite={project?.demoSite}
        sourceCode={project?.sourceCode}
        myRole={project?.myRole}
        startDate={project?.startDate}
        endDate={project?.endDate}
      />
      <TechStack techStack={project?.techStack} />
      <ApplicationDescription description={project?.description} />
      <ProblemStatement
        problemStatement={project?.problemStatement}
        problemStatementImageUrl={project?.problemStatementImageUrl}
        problemStatementImageAlt={project?.problemStatementImageAlt}
      />
      <FigmaDesign
        figmaDesignUrl={project?.figmaDesignUrl}
        figmaDesignAlt={project?.figmaDesignAlt}
      />
      <Process myProcess={project?.myProcess} />
      <ChallengesSection
        challenges={project?.challenges}
        learnings={project?.learnings}
        _key={project?._key}
      />
      <CaseStudies otherCaseStudies={project?.otherCaseStudies} />
      <CallToAction />
    </section>
  );
};

export default ProjectDetails;
