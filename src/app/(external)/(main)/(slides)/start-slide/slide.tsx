'use client';

import { PageBlockProps } from '@/app/(external)/_types';
import styles from './slide.module.scss';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';
import { containerVariants, itemVariants } from './_animations';
import { motion } from 'framer-motion';

export default function StartSlide({
    className
}: PageBlockProps) {
    return (
        <>
        <motion.div 
            className={clsx(styles.slide, className)}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className={styles.col}>
                <motion.div 
                    className={styles.title}
                    variants={itemVariants}
                >
                    Ремонт и запчасти <span className={styles.accent}>высшего</span> качества. Opel. <span className={styles.accent}>Chevrolet.</span> Ford.
                </motion.div>
                <motion.div 
                    className={styles.description}
                    variants={itemVariants}
                >
                    Обслуживаем Opel, Ford, Chevrolet больше 7 лет. Знаем буквально всё об этой системе и починим любую неисправность.
                    Разработали собственные уникальные технологии(у. Т.) и инструменты, в списке ниже представлены основные позиции.
                </motion.div>
                <motion.div 
                    className={styles.actions}
                    variants={itemVariants}
                >
                    <Button 
                        className={clsx(styles.button, styles.big)}
                        variant='brand'
                        text='bold'
                        border='round'
                    >
                        Связаться с нами
                    </Button>
                </motion.div>
            </div>
        </motion.div>
        <span className={styles.modal}>

        </span>
        <svg className={styles.modalArt} preserveAspectRatio="none" viewBox="0 0 228 348" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M227.186 347.365V1.36453L45.1857 216.365L92.1857 243.365L85.1857 253.365H113.186L57.1857 276.365L160.186 283.365L0.185699 347.365H227.186Z" />
        </svg>
        </>
    )
}