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

export default function CarsSlide({
    className
}: PageBlockProps) {
    return (
        <div className={clsx(styles.slide, className)}>
            <div className={styles.col}>
                <Chevrolet className={styles.icon} />
            </div>
            <div className={styles.col}>
                <Opel className={styles.icon} />
            </div>
            <div className={styles.col}>
                <Honda className={styles.icon} />
            </div>
            <div className={styles.col}>
                <Ford className={styles.icon} />
            </div>
        </div>
    )
}