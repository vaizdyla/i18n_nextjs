import Logo from '@/public/assets/skygym-logo.png';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
  const locale = useLocale();

  return (
    <nav className="bg-gray-900 py-2 px-6">
      <Link href={`/${locale}`}>
        <Image
          src={Logo}
          alt="Sporto klubo SkyGym logotipas"
          width={201}
          height={57}
        />
      </Link>
    </nav>
  );
};
