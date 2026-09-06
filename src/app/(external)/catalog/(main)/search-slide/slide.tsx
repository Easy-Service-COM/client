'use client';

import { PageBlockProps } from '@/app/(external)/_types';
import styles from './slide.module.scss';
import clsx from 'clsx';
import Button from '@/assets/ui-kit/button/button';
import { motion } from 'framer-motion';
import { useContactWidget } from '@/app/(external)/components/contact-widget/context';
import Input from '@/assets/ui-kit/input/input';
import Spinner from '@/assets/ui-kit/spinner/spinner';
import { CatalogUnitCard } from './components/unit-card/card';
import { CatalogUnit, UnitType, UnitStatus } from '@/apps/kroncl/wm/types';
import { useState, useEffect, useCallback, useRef } from 'react';
import { searchUnits } from './catalog';
import Checkbox from '@/assets/ui-kit/checkbox/checkbox';

interface Filters {
    type: UnitType | null;
    status: UnitStatus | null;
}

export default function SearchSlide({
    className
}: PageBlockProps) {
    const { open } = useContactWidget();
    const [search, setSearch] = useState('');
    const [units, setUnits] = useState<CatalogUnit[]>([]);
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [hasSearched, setHasSearched] = useState(false);
    const [filters, setFilters] = useState<Filters>({
        type: null,
        status: null
    });
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);

    // Функция для построения параметров запроса
    const buildSearchParams = useCallback((query: string, currentFilters: Filters) => {
        const params: any = {
            limit: 20,
            page: 1
        };

        if (query.trim()) {
            params.search = query.trim();
        }

        if (currentFilters.type) {
            params.type = currentFilters.type;
        }

        if (currentFilters.status) {
            params.status = currentFilters.status;
        }

        return params;
    }, []);

    // Загрузка с учетом фильтров
    const fetchUnits = useCallback(async (query: string, currentFilters: Filters) => {
        const params = buildSearchParams(query, currentFilters);
        const hasQuery = !!query.trim();
        
        setHasSearched(hasQuery);
        setLoading(true);
        
        try {
            const response = await searchUnits(params);
            if (response.status && response.data) {
                setUnits(response.data.units || []);
            } else {
                setUnits([]);
            }
        } catch (error) {
            console.error('Error fetching units:', error);
            setUnits([]);
        } finally {
            setLoading(false);
        }
    }, [buildSearchParams]);

    // Первоначальная загрузка
    useEffect(() => {
        const fetchInitialUnits = async () => {
            setInitialLoading(true);
            const params = buildSearchParams('', filters);
            try {
                const response = await searchUnits(params);
                if (response.status && response.data) {
                    setUnits(response.data.units || []);
                }
            } catch (error) {
                console.error('Error fetching initial units:', error);
            } finally {
                setInitialLoading(false);
            }
        };
        fetchInitialUnits();
    }, []);

    // Обработка изменения поиска
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        debounceTimer.current = setTimeout(() => {
            fetchUnits(value, filters);
        }, 500);
    };

    // Обработка изменения фильтров
    const handleTypeFilter = (type: UnitType) => {
        setFilters(prev => ({
            ...prev,
            type: prev.type === type ? null : type
        }));
    };

    const handleStatusFilter = (status: UnitStatus) => {
        setFilters(prev => ({
            ...prev,
            status: prev.status === status ? null : status
        }));
    };

    // При изменении фильтров перезапрашиваем данные
    useEffect(() => {
        if (initialLoading) return;
        
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        
        fetchUnits(search, filters);
    }, [filters]);

    useEffect(() => {
        return () => {
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current);
            }
        };
    }, []);

    const renderContent = () => {
        if (loading || initialLoading) {
            return (
                <div className={styles.loading}>
                    <Spinner variant='brand' size='lg' />
                </div>
            );
        }

        if (units.length === 0) {
            if (hasSearched) {
                return (
                    <div className={styles.empty}>
                        К сожалению, ничего не найдено
                    </div>
                );
            }
            return null;
        }

        return (
            <div className={styles.grid}>
                <div className={styles.line}>
                    <div className={styles.head}>
                        <div className={styles.col}>Наименование</div>
                        <div className={styles.col}>Тип</div>
                        <div className={styles.col}>Наличие</div>
                        <div className={styles.col}>Цена</div>
                    </div>
                </div>
                <div className={styles.line}>
                {units.map((unit) => (
                    <CatalogUnitCard
                        onclick={open}
                        key={unit.id} 
                        className={styles.item} 
                        unit={unit} 
                    />
                ))}
                </div>
            </div>
        );
    };

    return (
        <div className={clsx(styles.slide, className)}>
            <div className={styles.search}>
                <Input
                    className={styles.input}
                    placeholder='Название/артикул'
                    value={search}
                    onChange={handleSearchChange}
                />
                <div className={styles.filters}>
                    <span className={styles.filter}>
                        <Checkbox 
                            variant='brand' 
                            className={styles.checkBox}
                            checked={filters.type === 'product'}
                            onChange={() => handleTypeFilter('product')}
                        />
                        <span className={styles.name}>Только товары</span>
                    </span>
                    <span className={styles.filter}>
                        <Checkbox 
                            variant='brand' 
                            className={styles.checkBox}
                            checked={filters.type === 'service'}
                            onChange={() => handleTypeFilter('service')}
                        />
                        <span className={styles.name}>Только услуги</span>
                    </span>
                    <span className={styles.filter}>
                        <Checkbox 
                            variant='brand' 
                            className={styles.checkBox}
                            checked={filters.status === 'active'}
                            onChange={() => handleStatusFilter('active')}
                        />
                        <span className={styles.name}>В наличии</span>
                    </span>
                    <span className={styles.filter}>
                        <Checkbox 
                            variant='brand' 
                            className={styles.checkBox}
                            checked={filters.status === 'inactive'}
                            onChange={() => handleStatusFilter('inactive')}
                        />
                        <span className={styles.name}>Ожидаем поставку</span>
                    </span>
                </div>
            </div>
            
            {renderContent()}
        </div>
    );
}