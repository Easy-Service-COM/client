import styles from './slide.module.scss';

export interface ItemProps {
    className?: string;
    img: string;
    title: string;
    price: string;
}

export function Item({
    className,
    img,
    title,
    price
}: ItemProps) {
    return (
        <div className={className}>
            <div className={styles.img} style={{backgroundImage: `url(${img})`}} />
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.price}>{price}</div>
            </div>
        </div>
    )
}

export const items: ItemProps[] = [
    {
        title: 'Генератор Opel Astra H',
        img: '/images/cars/view/gen.jpeg',
        price: 'от 8 499 ₽'
    },
    {
        title: 'Щёточный узел изитроника',
        img: '/images/cars/view/uzel.jpeg',
        price: 'от 7 000 ₽'
    },
    {
        title: 'Щетки изитроник опель',
        img: '/images/cars/view/chetki.jpeg',
        price: 'от 800 ₽'
    },
    {
        title: 'Механическая часть изитроник',
        img: '/images/cars/view/izik.jpeg',
        price: 'от 27 000 ₽'
    },
    {
        title: 'Генератор Hyundai i30/Elantra/Kia Rio',
        img: '/images/cars/view/gen-2.jpeg',
        price: 'от 11 500 ₽'
    },
    {
        title: 'Генератор Kia Sportage/Santa FE',
        img: '/images/cars/view/gen-3.jpeg',
        price: 'от 9 500 ₽'
    },
]