import clsx from 'clsx';
import styles from './page.module.scss';
import { Slide } from '../../components/slide/slide';
import SearchSlide from './search-slide/slide';

export default function MainPage() {
    return (
        <>
        <Slide className={clsx(styles.slide)}><SearchSlide className={styles.slideContent} /></Slide>
        </>
    )
}