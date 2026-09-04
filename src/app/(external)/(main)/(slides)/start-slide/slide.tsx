'use client';

import { PageBlockProps } from '@/app/(external)/_types';
import styles from './slide.module.scss';
import clsx from 'clsx';
import { style } from 'framer-motion/client';
import Button from '@/assets/ui-kit/button/button';

export default function StartSlide({
    className
}: PageBlockProps) {
    return (
        <>
        <div className={clsx(styles.slide, className)}>
            <div className={styles.col}>
                <div className={styles.title}>
                    
                </div>
                <div className={styles.description}>
                    
                </div>
                <div className={styles.actions}>
                    <Button 
                        className={clsx(styles.button, styles.big)}
                        variant='brand'
                        text='bold'
                        border='round'
                    >
                        Связаться с нами
                    </Button>
                </div>
            </div>
        </div>
        <span className={styles.modal}>

        </span>
        </>
    )
}