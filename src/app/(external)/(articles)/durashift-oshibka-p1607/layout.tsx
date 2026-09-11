import { getMetaConfig } from '@/config/meta.config';
const cfg = getMetaConfig('durashift-oshibka-p1607');
export const metadata = {
  title: cfg.title,
  description: cfg.description,
  alternates: { canonical: cfg.canonical },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (children)
}