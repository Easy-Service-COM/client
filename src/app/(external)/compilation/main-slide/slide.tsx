'use client';

import { PageBlockProps } from '@/app/(external)/_types';
import styles from './slide.module.scss';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';
import { motion } from 'framer-motion';
import { useContactWidget } from '@/app/(external)/components/contact-widget/context';
import Input from '@/assets/ui-kit/input/input';
import Spinner from '@/assets/ui-kit/spinner/spinner';
import { CatalogUnit, UnitType, UnitStatus } from '@/apps/kroncl/wm/types';
import { useState, useEffect, useCallback, useRef } from 'react';
import Checkbox from '@/assets/ui-kit/checkbox/checkbox';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Book from '@/assets/ui-kit/icons/book';
import { articlesList } from '../../(articles)/_list';
import Link from 'next/link';

export default function MainSlide({
    className
}: PageBlockProps) {
    return (
        <div className={clsx(styles.slide, className)}>
            <Book className={styles.canvas} />
            <div className={styles.head}>
                <Book className={styles.icon} />

                <div className={styles.title}>Статьи Easy Service</div>
                <div className={styles.description}>
                    Собираем все самые полезные материалы в одном месте: от руководства по прокачке системы Easytronic до причин распространённых ошибок.
                </div>
            </div>
            <div className={styles.list}>
                {articlesList ? articlesList.map((a, index) => (
                    <Link href={a.href} key={index} className={styles.item}>
                      {a.title}  
                    </Link>
                )) : (
                    <div className={styles.empty}>Пока здесь пусто, но мы уже готовим новые материалы</div>
                )}
            </div>
        </div>
    );
}