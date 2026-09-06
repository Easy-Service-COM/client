'use client';

import { PageBlockProps } from "@/app/(external)/_types";
import clsx from "clsx";
import styles from './slide.module.scss';

interface ItemProps {
    className?: string;
    number: number;
    title: string;
    description: string;
}

function Item({
    className,
    number,
    title,
    description
}: ItemProps) {
    return (
        <div className={clsx(className)}>
            <div className={styles.number}>{number}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    )
}

const stages: ItemProps[] = [
    {
        number: 1,
        title: 'Контакт',
        description: 'Связываемся любым удобным для вас способом. Звонок, WhatsApp, Max, Telegram... Сообщите менеджеру, что пришли с сайта.'
    },
    {
        number: 2,
        title: 'Согласование',
        description: 'Договариваемся о дне обслуживания, если живёте близко к МСК и хотите встретиться лично. Живёте далеко? - Не проблема, договариваемся об отправке запчасти любой ТК (СДЕК, ПЭК, Avito...)'
    },
    {
        number: 3,
        title: 'Ремонт',
        description: 'Диагностируем запчасть/автомобиль, выявляем возможные причины ошибок. Подбираем комплектующие на замену, согласовываем исходя из вашего бюджета - вы в курсе каждого потраченного рубля.'
    },
    {
        number: 4,
        title: 'Обкатка',
        description: 'Собираем агрегат/узел, производим повторную диагностику и обкатку. Получив нужный результ, записываем вам подробный видеобзор с пояснениями.'
    },
    {
        number: 5,
        title: 'Готово',
        description: 'Принимайте агрегат/авто с гарантией от нас и подробной накладной.'
    }
]

export function StagesSlide({
    className
}: PageBlockProps) {
    return (
        <div className={clsx(styles.slide, className)}>
            <div className={styles.col}>
                <div className={styles.title}><span className={styles.accent}>Как </span> мы работаем?</div>
                <div className={styles.description}>От звонка до ремонта - объясняем на пальцах.</div>
            </div>
            <div className={styles.col}>
                {stages.map((item, index) => (
                    <Item key={index} className={styles.item} {...item} />
                ))}
            </div>
        </div>
    )
}