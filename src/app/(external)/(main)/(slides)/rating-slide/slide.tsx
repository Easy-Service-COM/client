'use client';

import { PageBlockProps } from '@/app/(external)/_types';
import styles from './slide.module.scss';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';
import { motion } from 'framer-motion';
import { useContactWidget } from '@/app/(external)/components/contact-widget/context';
import Star from '@/assets/ui-kit/icons/star';
import Clients from '@/assets/ui-kit/icons/clients';
import { linksConfig } from '@/config/links.config';

export default function RatingSlide({
    className
}: PageBlockProps) {
    return (
        <div className={clsx(styles.slide, className)}>
            <div className={styles.col}>
                <div className={styles.title}>
                    <span className={styles.number}>5.0</span>
                    <span className={styles.icon}><Star /></span>
                </div>
                <div className={styles.title}>
                    <span className={styles.number}>290+</span>
                    <span className={styles.text}>отзывов</span>
                </div>
                <div className={styles.capture}>Нам доверяют</div>
                <div className={styles.actions}>
                    <Button 
                        className={styles.actions}
                        as='link'
                        href={linksConfig.avitoReviews}
                        border='round'
                        text='bold'
                        variant='contrast'
                        children='Читать истории'
                        icon={<Clients />}
                    />
                </div>
            </div>
        </div>
    )
}