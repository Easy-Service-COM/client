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
import Package from '@/assets/ui-kit/icons/package';
import { Item, items } from './_units';

export default function CatalogSlide({
    className
}: PageBlockProps) {
    return (
        <div className={clsx(styles.slide, className)}>
            <div className={styles.col}>
                <div className={styles.title}>
                    Запчасти уже <br /><span className={styles.accent}>готовы к замене</span>
                </div>
                <div className={styles.description}>
                    Поможем подобрать и оперативно доставить к ремонту. Поддерживаем постоянное наличие востребованных комплектующих на складе - не придётся ждать доставку.
                </div>
                <div className={styles.actions}>
                    <Button 
                        className={styles.actions}
                        as='link'
                        href='/catalog'
                        border='round'
                        text='bold'
                        variant='contrast'
                        children='Каталог'
                        icon={<Package />}
                    />
                </div>
            </div>
            <div className={styles.col}>
                {items.map((item, index) => (
                    <Item className={styles.item} key={index} {...item} />
                ))}
            </div>
        </div>
    )
}