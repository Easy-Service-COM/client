import clsx from 'clsx';
import styles from './page.module.scss';
import { Slide } from '../components/slide/slide';

import { getMetaConfig } from '@/config/meta.config';
import MainSlide from './main-slide/slide';
import Book from '@/assets/ui-kit/icons/book';
const cfg = getMetaConfig('compilation');
export const metadata = {
  title: cfg.title,
  description: cfg.description,
  alternates: { canonical: cfg.canonical },
};

export default function MainPage() {
    return (
        <>
        <Slide className={clsx(styles.slide)}><MainSlide className={styles.slideContent} /></Slide>
        </>
    )
}