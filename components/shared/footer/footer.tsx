'use client';

import FooterLogo from '@/public/assets/skygym-logo-28.png';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer>
      <div className="flex gap-2 items-center">
        <Image
          src={FooterLogo}
          alt="Sporto klubo SkyGym mažas logotipas"
          width={28}
          height={28}
        />
        <p className="text-sm">
          &copy; SkyGym - <Link href={`/${locale}`}>{t('link')}</Link>{' '}
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
};
