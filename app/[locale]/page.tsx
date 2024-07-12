import { useTranslations } from 'next-intl';
import Logo from '@/public/assets/skygym-logo.png'
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main>
      <h1>{t('title')}</h1>
      <Image src={Logo} alt='Sporto klub SkyGym logotipas' width={201} height={57} />
    </main>
  );
}
