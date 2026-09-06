import clsx from 'clsx';
import StartSlide from './(slides)/start-slide/slide';
import styles from './page.module.scss';
import { Slide } from '../components/slide/slide';
import CarsSlide from './(slides)/cars-slide/slide';
import GeoSlide from './(slides)/geo-slide/slide';
import ServicesSlide from './(slides)/services-slide/slide';
import CatalogSlide from './(slides)/catalog-slide/slide';
import RatingSlide from './(slides)/rating-slide/slide';
import { StagesSlide } from './(slides)/stages-slide/slide';

export default function MainPage() {
    return (
        <>
        <Slide className={clsx(styles.slide)}><StartSlide className={styles.slideContent} /></Slide>
        <Slide className={clsx(styles.slide)}><CarsSlide className={styles.slideContent} /></Slide>
        <Slide className={clsx(styles.slide)}><ServicesSlide className={styles.slideContent} /></Slide>
        <Slide className={clsx(styles.slide)}><CatalogSlide className={styles.slideContent} /></Slide>
        <Slide className={clsx(styles.slide)}><StagesSlide className={styles.slideContent} /></Slide>
        <Slide className={clsx(styles.slide)}><RatingSlide className={styles.slideContent} /></Slide>
        <Slide className={clsx(styles.slide)}><GeoSlide className={styles.slideContent} /></Slide>
        </>
    )
}