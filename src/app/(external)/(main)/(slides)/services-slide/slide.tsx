'use client';

import { PageBlockProps } from '@/app/(external)/_types';
import styles from './slide.module.scss';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';
import { motion } from 'framer-motion';
import Transmission from '@/assets/ui-kit/icons/car/transmission';
import Lever from '@/assets/ui-kit/icons/car/lever';
import Generator from '@/assets/ui-kit/icons/car/generator';
import Starter from '@/assets/ui-kit/icons/car/starter';
import TwoCards from '@/assets/ui-kit/icons/two-cards';

interface ItemProps {
    className?: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    href?: string;
}

function Item({
    className,
    title,
    description,
    icon,
    href
}: ItemProps) {
    return (
        <div className={className}>
            {icon && (icon)}
            <div className={styles.title}>{title}</div>
            {description && (<div className={styles.description}>{description}</div>)}
        </div>
    )
}

const services: ItemProps[] = [
    {
        icon: <Transmission />,
        title: 'Замена сцепления',
        description: 'Качественная замена сцепления с диагностикой маховика и выжимного подшипника. Регулировка и адаптация для комфортного вождения.'
    },
    {
        icon: <Lever />,
        title: 'Переделка на механику',
        description: 'Комплексная переделка робота на механику. Замена гидротрансформатора, установка педального узла, тросов и всех необходимых элементов.'
    },
    {
        icon: <Generator />,
        title: 'Ремонт генератора',
        description: 'Восстановление работоспособности генератора: замена изношенных деталей, диагностика электроники, проверка зарядного тока и напряжения.'
    },
    {
        icon: <Starter />,
        title: 'Ремонт стартера',
        description: 'Полное восстановление стартера с заменой щёток, втягивающего реле, бендикса и контактной группы. Проверка работы под нагрузкой.'
    },
    {
        title: 'Ремонт изитроника (Easytronic)',
        description: 'Профессиональный ремонт роботизированной трансмиссии Easytronic. Включает компьютерную диагностику, снятие/установку блока управления, замену гидравлических и механических компонентов, калибровку и адаптацию.'
    }
];

export default function ServicesSlide({
    className
}: PageBlockProps) {
    return (
        <div className={clsx(styles.slide, className)}>
            <div className={styles.col}>
                <div className={styles.title}><span className={styles.accent}>Более {services.length}</span> основных направлений</div>
                <div className={styles.description}>Opel Zafira B, Astra H, Corsa C, Corsa D || Ford Fiesta, Fusion</div>
            </div>
            <div className={styles.col}>
                {services.map((item, index) => (
                    <Item className={styles.item} key={index} {...item} />
                ))}
            </div>
            <div className={styles.actions}>
                <Button 
                    className={styles.actions}
                    as='link'
                    href='/services'
                    border='round'
                    text='bold'
                    variant='contrast'
                    children='Больше услуг'
                    icon={<TwoCards />}
                />
            </div>
        </div>
    )
}