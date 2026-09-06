'use client';

import { PageBlockProps } from '@/app/(external)/_types';
import styles from './slide.module.scss';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';
import { containerVariants, itemVariants } from './_animations';
import { motion } from 'framer-motion';
import { useContactWidget } from '@/app/(external)/components/contact-widget/context';

export default function StartSlide({
    className
}: PageBlockProps) {
    const { open } = useContactWidget();

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
                    Ремонт и запчасти <span className={styles.accent}>высшего</span> качества. Opel. <span className={styles.accent}>Chevrolet.</span> Ford. <span className={styles.accent}>Honda.</span>
                </motion.div>
                <motion.div 
                    className={styles.description}
                    variants={itemVariants}
                >
                    Профессиональное обслуживание трансмиссии Easytronic — наш главный профиль.
                    Знаем все слабые места роботизированных коробок Opel и Ford — и точно знаем, как их устранить.
                    Выполняем замену сцепления, диагностику и комплексный ремонт узлов.
                    Помимо работ по трансмиссии, предлагаем ремонт и замену генераторов.
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
                        onClick={open}
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