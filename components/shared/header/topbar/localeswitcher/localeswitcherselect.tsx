'use client';

import { usePathname, useRouter } from '@/navigation';
import { useParams } from 'next/navigation';

export default function LocaleSwitcherSelect(
  props: React.ComponentProps<'select'>
) {
  // This router automatically considers the `locale`
  // behind the scenes and allows to switch it.
  const router = useRouter();

  // E.g. `{slug: 'roadster-sport'}` on the product detail page
  // for pages with [slug]
  const params = useParams();

  // Since we're using localized pathnames, this returns a
  // a pathname template like `/products/[slug]` that can
  // be compiled with a specific locale by the router.
  const pathname = usePathname();

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value;
    router.push(
      {
        pathname,
        // TypeScript validates that only known `params` are used in
        // combination with a given `pathname`. Since the two will always
        // match for the current route, we can skip runtime checks.
        params: params as any,
      },
      { locale }
    );
  }

  return <select {...props} onChange={onChange} />;
}
