import clsx from 'clsx';
import styles from './page.module.scss';
import { Slide } from '../../components/slide/slide';
import { getMetaConfig } from '@/config/meta.config';
import { ProductCard } from './components/product-card/card';
import { linksConfig } from '@/config/links.config';
import Link from 'next/link';
import Spinner from '@/assets/ui-kit/spinner/spinner';
import { products } from './_products';
import { categories } from './_categories';
import { Suspense } from 'react';
import Collection from '@/assets/ui-kit/icons/collection';

const cfg = getMetaConfig('catalog');
export const metadata = {
  title: cfg.title,
  description: cfg.description,
  alternates: { canonical: cfg.canonical },
};

interface MainPageProps {
    searchParams: Promise<{ category?: string }>;
}

export default async function MainPage({ searchParams }: MainPageProps) {
    const { category } = await searchParams;
    const activeCategory = category ?? null;

    const filtered = activeCategory
        ? products.filter(p => p.category === activeCategory)
        : products;

    return (
        <Slide className={clsx(styles.slide)}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Link
                        href="/catalog"
                        className={clsx(styles.item, !activeCategory && styles.active)}
                        scroll={false}
                    >
                        <span>Все узлы</span>
                    </Link>
                    {categories.map(cat => (
                        <Link
                            key={cat.id}
                            href={`/catalog?category=${cat.id}`}
                            className={clsx(styles.item, activeCategory === cat.id && styles.active)}
                            scroll={false}
                        >
                            <span>{cat.title}</span>
                        </Link>
                    ))}
                    <div className={styles.tip}>
                        Не стесняйтесь уточнять наличие -{' '}
                        <Link href={`tel:` + linksConfig.phone} className={styles.phone}>позвоните</Link> или{' '}
                        <Link href={linksConfig.telegram} className={styles.phone}>напишите</Link> нам
                    </div>
                </div>
                <div className={styles.products}>
                    <Suspense
                        key={activeCategory ?? 'all'}
                        fallback={<div className={styles.loading}><Spinner size='md' color='brand' /></div>}
                    >
                        {filtered.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                size={product.priority && product.priority > 0 ? 'big' : 'mid'}
                            />
                        ))}
                        {filtered.length === 0 && (
                            <div className={styles.empty}>
                                <Collection className={styles.svg} />
                                <div className={styles.text}>Пока в этой категории пусто</div>
                            </div>
                        )}
                    </Suspense>
                </div>
            </div>
        </Slide>
    );
}