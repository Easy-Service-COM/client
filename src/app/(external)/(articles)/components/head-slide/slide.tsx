'use client';

import { PageBlockProps } from '@/app/(external)/_types';
import styles from './slide.module.scss';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';
import { motion } from 'framer-motion';
import Home from '@/assets/ui-kit/icons/home';

export default function HeadSlide({
    className
}: PageBlockProps) {
    return (
        <div className={clsx(styles.slide, className)}>
            <Button
                children='Все статьи'
                icon={<Home />}
                variant='elevated'
                border='round'
                as='link'
                href='/compilation'
                className={styles.action}
            />
        </div>
    )
}