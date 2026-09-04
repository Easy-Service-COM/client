import clsx from 'clsx';
import StartSlide from './(slides)/start-slide/slide';
import styles from './page.module.scss';
import { Slide } from '../components/slide/slide';

export default function MainPage() {
    return (
        <>
        <Slide className={clsx(styles.slide)}><StartSlide className={styles.slideContent} /></Slide>
        </>
    )
}