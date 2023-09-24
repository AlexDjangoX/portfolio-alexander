import Link from 'next/link';

import CustomButton from '../reusable/CustomButton';

const CallToActionButton = () => {
  return (
    <Link className="" href="/work">
      <CustomButton title="Get in touch with me" />
    </Link>
  );
};

export default CallToActionButton;
