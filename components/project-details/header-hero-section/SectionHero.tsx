import { Header, ApplicationHeroImage, SiteGitLinks, Timeline } from '..';

import { SectionHeroType } from '@/types';

const SectionHero = ({
  headingUnderline,
  heading,
  imageUrl,
  imageAlt,
  sourceCode,
  myRole,
  startDate,
  endDate,
}: SectionHeroType) => (
  <div className="overflow:hidden bg-white-800 dark:bg-black-300">
    <Header headingUnderline={headingUnderline} heading={heading} />
    <ApplicationHeroImage imageUrl={imageUrl} imageAlt={imageAlt} />
    <SiteGitLinks sourceCode={sourceCode} />
    <Timeline myRole={myRole} startDate={startDate} endDate={endDate} />
  </div>
);

export default SectionHero;
