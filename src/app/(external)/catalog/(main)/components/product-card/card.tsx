'use client';

import clsx from 'clsx';
import styles from './card.module.scss';
import { Product } from '../../_types';
import Button from '@/assets/ui-kit/button/button';
import { linksConfig } from '@/config/links.config';
import Telegram from '@/assets/ui-kit/icons/telegram';
import { useContactWidget } from '@/app/(external)/components/contact-widget/context';

export interface ProductCardProps {
    className?: string;
    size?: 'mid' | 'big'
    product: Product;
}

export function ProductCard({
    className,
    size='mid',
    product
}: ProductCardProps) {
    const { open } = useContactWidget();

    return (
        <div onClick={open} className={clsx(styles.card, styles[size])}>
            <div className={styles.col}>
                <div className={styles.image}><img src={product.images[0]} /></div>
                <div className={styles.info}>
                    <div className={styles.title}>{product.title}</div>
                    <div className={clsx(styles.amount, product.minAmount <= 10000 && styles.accent)}>от <span className={styles.num}>{product.minAmount.toLocaleString('ru-RU')} &#8381;</span></div>
                </div>
            </div>
            {size === 'big' && (
                <div className={styles.actions} onClick={e => e.stopPropagation()}>
                    <Button
                        as='link'
                        href={`tel:` + linksConfig.phone}
                        className={styles.action}
                        variant='brand'
                        children='Позвонить нам'
                    />
                    <Button
                        as='link'
                        href={linksConfig.telegram}
                        className={styles.action}
                        variant='elevated'
                        children='Написать'
                        icon={<Telegram />}
                    />
                </div>
            )}
        </div>
    )
}