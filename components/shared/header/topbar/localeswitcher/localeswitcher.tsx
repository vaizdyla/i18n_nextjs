import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './localeswitcherselect';
import LangRu from '@/public/lang-ru.png';
import Image from 'next/image';

export const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <label>
      <p className="sr-only">{t('label')}</p>
      <LocaleSwitcherSelect
        name="localeSelect"
        id="localeSelect"
        defaultValue={locale}
      >
        <option value={'lt'}>{t('lt')}</option>
        <option value={'en'}>{t('en')}</option>
        <option value={'ru'} className="bg-[url('/lang-ru.png')]">
          {t('ru')}
        </option>
      </LocaleSwitcherSelect>
    </label>
  );
};
