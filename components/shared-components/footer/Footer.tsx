'use client';

import { usePathname } from 'next/navigation';

import { icons } from '@/utils/constants';
import SocialLinks from '@/components/reusable/SocialLinks';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="flex flex-col items-center px-[1.5rem] py-[3rem] leading-[1.8rem] text-black-400 dark:bg-black-200 dark:text-white-800 md:flex-row md:justify-between md:px-[5.3rem] md:py-[3.25rem] ">
      <p>© 2023 Alexander Mc Lachlan. All rights reserved.</p>
      {pathname !== '/contact' && (
        <div className="mt-[0.5rem] flex gap-6">
          {icons.map((icon) => (
            <SocialLinks
              key={icon.src.toString()}
              iconSrc={icon.src}
              href={icon.href}
            />
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;
