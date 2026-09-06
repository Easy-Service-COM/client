'use client';

import { CatalogUnit } from '@/apps/kroncl/wm/types';
import styles from './card.module.scss';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';

export interface CatalogUnitCardProps{
    className?: string;
    unit: CatalogUnit;
    onclick: () => void;
}

export function CatalogUnitCard({
    className,
    unit,
    onclick
}: CatalogUnitCardProps) {
    return (
        <div className={clsx(styles.card, className)}>
            <div className={styles.col}>
                <div className={styles.name}>{unit.name}</div>
                <div className={styles.meta}>Внутренний артикул: {unit.id.slice(0, 6)}</div>
            </div>
            <div className={styles.col}>
                <div className={styles.type}>{unit.type === 'product' ? 'Товар' : 'Услуга'}</div>
            </div>
            <div className={styles.col}>
                <div className={styles.status}>
                    {unit.status === 'active' 
                        ? unit.type === 'product' ? 'В наличии' : 'Предоставляем'
                        : unit.type === 'product' ? 'Ожидаем поставку' : 'Приостановлено'
                    }
                </div>
            </div>
            <div className={styles.actions}>
                <Button 
                    className={styles.action}
                    variant='brand'
                    onClick={onclick}
                    children={`от ${unit.sale_price} ₽`}
                />
            </div>
        </div>
    )
}