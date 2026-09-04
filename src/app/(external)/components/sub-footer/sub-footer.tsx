import { LogoFull } from '@/assets/ui-kit/logo/full/full';
import styles from './sub-footer.module.scss';
import { LogoIco } from '@/assets/ui-kit/logo/ico/ico';
import Button from '@/assets/ui-kit/button/button';

export function SubFooter() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <span className={styles.text}>Все права защищены. Копирование материалов без письменного согласия правообладателя запрещено. Easy Service. 2026.</span>
            </div>
            <div className={styles.actions}>
                <Button
                    href='/'
                    as='link'
                    border='round'
                    variant='brand'
                    children='Связаться'
                />
            </div>
        </div>
    )
}