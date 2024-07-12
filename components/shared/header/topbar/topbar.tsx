import { Clock, MapPin, Phone } from 'lucide-react';
import { LocaleSwitcher } from './localeswitcher/localeswitcher';

export const TopBar = () => {
  return (
    <div className="flex gap-2 py-2 px-6 text-sm justify-between bg-neutral-700 text-yellow-50">
      <div className="flex gap-1 items-center">
        <Phone />
        +370 655 61740
      </div>
      <div className="flex gap-1 items center">
        <MapPin />
        Ateities g. 10, Vilnius LT-08303
      </div>
      <div className="flex gap-1 items-center">
        <Clock />
        Darbo dienomis: <span className="text-emerald-500">
          6:00 – 22:00
        </span>{' '}
        Išeiginėmis: <span className="text-rose-400">10:00 – 18:0</span>
      </div>
      <div>
        <LocaleSwitcher />
      </div>
    </div>
  );
};
