import React from 'react';
import Image from 'next/image';

import DownloadResume from '../Download';
import ThemeSwitcher from '../ThemeSwitcher';
import NavbarRoutes from './NavbarRoutes';
import { MobileNavbarProps } from '@/types';

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  toggleMobile,
  showMobileNavbar,
  closeImgSrc,
  pathname,
}) => {
  return (
    <div className="fixed right-0 z-30  flex h-full w-2/4 items-center dark:bg-black-200 md:hidden">
      <Image
        src={closeImgSrc}
        width={30}
        height={30}
        alt="logo"
        className="absolute right-9 top-9 cursor-pointer md:hidden"
        onClick={toggleMobile}
      />
      <div className="mb-20 flex w-full flex-col p-8">
        <NavbarRoutes pathname={pathname} showMobileNavbar={showMobileNavbar} />
        <div className="ml-2.5 mt-6">
          <DownloadResume />
        </div>
        <div className="ml-3 mt-6 flex justify-start">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;