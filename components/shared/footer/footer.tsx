'use client'

import FooterLogo from '@/public/assets/skygym-logo-28.png'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Footer=()=>{
    const t = useTranslations('Footer');
     
    return <footer>
        <div className='text-sm'>
            <Image src={FooterLogo} alt='Sporto klubo SkyGym mažas logotipas' width={28} height={28} /> &copy; SkyGym - Sporto klubas Vilniuje. {t('copyright')}</div></footer>
}