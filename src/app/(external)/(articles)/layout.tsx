import clsx from 'clsx';
import { Slide } from '../components/slide/slide';
import styles from './layout.module.scss';
import HeadSlide from './components/head-slide/slide';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Slide className={clsx(styles.slide)}><HeadSlide className={styles.slideContent} /></Slide>
        <Slide className={clsx(styles.slide, styles.mdx)}><div className={styles.slideContent}>{children}</div></Slide>
    </>
  );
}