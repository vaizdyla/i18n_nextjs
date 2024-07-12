import { useTranslations } from 'next-intl';
import Logo from '@/public/assets/skygym-logo.png';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main>
      <h1 className="text-4xl py-8">{t('title')}</h1>
    </main>
  );
}
