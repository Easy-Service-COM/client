'use client';

import Button from '@/assets/ui-kit/button/button';
import styles from './widget.module.scss';
import clsx from 'clsx';
import Phone from '@/assets/ui-kit/icons/phone';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Close from '@/assets/ui-kit/icons/close';
import { Content } from './content/content';
import { useContactWidget } from './context';
import { useScroll } from '@/app/components/scroll-provider/prodiver';

interface ContactWidgetProps {
    className?: string;
}

export function ContactWidget({ className }: ContactWidgetProps) {
    const { isOpen, open, close, toggle } = useContactWidget();
    const { isVisible, isAtBottom } = useScroll();
    const [pulseKey, setPulseKey] = useState(0);

    const shouldShow = isVisible && !isAtBottom && !isOpen;

    const handleToggle = () => {
        toggle();
    };

    const handleClose = () => {
        close();
    };

    useEffect(() => {
        if (isOpen) return;

        const interval = setInterval(() => {
            setPulseKey(prev => prev + 1);
        }, 10000);

        return () => clearInterval(interval);
    }, [isOpen]);

    return (
        <div className={styles.widgetWrapper}>
            <AnimatePresence mode="wait">
                {shouldShow && (
                    <motion.div
                        key="widgetButton"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: {
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1]
                            }
                        }}
                        exit={{ 
                            opacity: 0, 
                            scale: 0.8,
                            transition: {
                                duration: 0.25,
                                ease: "easeOut"
                            }
                        }}
                        className={styles.widgetContainer}
                    >
                        <Button 
                            className={clsx(styles.widget, className)} 
                            variant='brand' 
                            icon={<Phone />}
                            onClick={handleToggle}
                        >
                            Свяжитесь с нами
                        </Button>

                        {[...Array(3)].map((_, index) => (
                            <motion.div
                                key={`${pulseKey}-${index}`}
                                className={styles.pulseRing}
                                initial={{ scale: 1, opacity: 0.6 }}
                                animate={{ 
                                    scale: 1 + (index + 1) * 0.4,
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeOut",
                                    delay: index * 0.15
                                }}
                                style={{ borderColor: 'var(--color-brand)' }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        key="modal"
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut"
                            }
                        }}
                        exit={{ 
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn"
                            }
                        }}
                        onClick={handleClose}
                    >
                        <motion.div
                            className={styles.modal}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ 
                                opacity: 1, 
                                y: 0, 
                                scale: 1,
                                transition: {
                                    duration: 0.35,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.05
                                }
                            }}
                            exit={{ 
                                opacity: 0, 
                                y: 20, 
                                scale: 0.95,
                                transition: {
                                    duration: 0.2,
                                    ease: "easeOut"
                                }
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Button 
                                className={styles.closeButton}
                                onClick={handleClose}
                                icon={<Close />}
                            />
                            <Content className={styles.content} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}