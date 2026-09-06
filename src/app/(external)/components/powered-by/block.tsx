'use client';

import { LogoFull } from '@/assets/ui-kit/logo/full/full';
import styles from './block.module.scss';
import Button from '@/assets/ui-kit/button/button';
import { useContactWidget } from '../contact-widget/context';
import { KronclLogo } from '@/assets/ui-kit/logos/kroncl/full/full';
import Link from 'next/link';

export function PoweredBy() {
    const { open } = useContactWidget();

    return (
        <div className={styles.container}>
            <span className={styles.text}>powered by</span>
            <Link href='https://kroncl.com'><KronclLogo className={styles.logo} /></Link>
        </div>
    )
}