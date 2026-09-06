'use client';

import Button from '@/assets/ui-kit/button/button';
import styles from './content.module.scss';
import clsx from 'clsx';
import WhatsApp from '@/assets/ui-kit/icons/whatsapp';
import Telegram from '@/assets/ui-kit/icons/telegram';
import Phone from '@/assets/ui-kit/icons/phone';
import Input from '@/assets/ui-kit/input/input';
import Select from '@/assets/ui-kit/select/select';
import Textarea from '@/assets/ui-kit/textarea/textarea';
import { useFormState } from 'react-dom';
import { createDealAction } from './create-deal';
import SuccessStatus from '@/assets/ui-kit/icons/success-status';
import { motion, AnimatePresence } from 'framer-motion';
import { useActionState } from 'react';
import Link from 'next/link';
import { linksConfig } from '@/config/links.config';

interface ContentProps {
    className?: string;
}

export function Content({ className }: ContentProps) {
    const [state, formAction] = useActionState(createDealAction, null);

    return (
        <div className={clsx(styles.content, className)}>
            <div className={styles.title}>Оставить заявку?</div>
            <form action={formAction} className={styles.form}>
                <AnimatePresence mode="wait">
                    {!state ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={styles.columns}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <Input 
                                className={styles.input} 
                                placeholder='Как к Вам обращаться?' 
                                name="name"
                                required
                            />
                            <Input 
                                className={styles.input} 
                                placeholder='Номер или почта' 
                                name="contact"
                                required
                            />
                            <Select 
                                className={styles.select} 
                                name="type"
                                defaultValue='Обслуживание автомобиля'
                                options={[
                                    {value: 'Обслуживание автомобиля', label: 'Обслуживание автомобиля'},
                                    {value: 'Обслуживание агрегата', label: 'Обслуживание агрегата'},
                                    {value: 'Покупка запчасти', label: 'Покупка запчасти'}
                                ]} 
                            />
                            {/* <Textarea 
                                placeholder='Опишите проблему' 
                                name="problem"
                            /> */}
                            
                            <Button 
                                className={styles.action} 
                                type="submit"
                                variant='brand'
                            >
                                Отправить менеджеру
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            className={styles.result}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <SuccessStatus className={styles.icon} />
                            <div className={styles.text}>Спасибо за заявку, скоро мы с вами свяжемся!</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
            
            <div className={styles.title}>Связаться <span className={styles.accent}>сейчас же.</span></div>
            <div className={styles.contacts}>
                <Link href={linksConfig.whatsapp} className={styles.col}>
                    <WhatsApp className={styles.icon} />
                </Link>
                <Link href={linksConfig.telegram} className={styles.col}>
                    <Telegram className={styles.icon} />
                </Link>
                <Link href={linksConfig.phone} className={styles.col}>
                    <Phone className={styles.icon} />
                </Link>
            </div>
        </div>
    );
}