import clsx from 'clsx';
import styles from './page.module.scss';
import { Slide } from '../../components/slide/slide';
import SearchSlide from './search-slide/slide';

import { getMetaConfig } from '@/config/meta.config';
const cfg = getMetaConfig('catalog');
export const metadata = {
  title: cfg.title,
  description: cfg.description,
  alternates: { canonical: cfg.canonical },
};

export default function MainPage() {
    return (
        <>
        <Slide className={clsx(styles.slide)}><SearchSlide className={styles.slideContent} /></Slide>
        </>
    )
}