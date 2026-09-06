'use client';

import { PageBlockProps } from '@/app/(external)/_types';
import styles from './slide.module.scss';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';
import { motion } from 'framer-motion';
import Opel from '@/assets/ui-kit/logos/cars/opel';
import Honda from '@/assets/ui-kit/logos/cars/honda';
import Ford from '@/assets/ui-kit/logos/cars/ford';
import Chevrolet from '@/assets/ui-kit/logos/cars/chevrolet';

export default function GeoSlide({
    className
}: PageBlockProps) {
    return (
        <div className={clsx(styles.slide, className)}>
            <iframe className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e6400e607d2b4651293edd0a1a16df9ad7c565d57fc3f977ef84d650c153032&amp;source=constructor"></iframe>
        </div>
    )
}