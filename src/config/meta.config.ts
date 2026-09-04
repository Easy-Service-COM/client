type MetaConfig = {
    title: string;
    description?: string;
}

const metaConfigs: Record<string, MetaConfig> = {
};

// Дефолтные значения
export const defaultMeta: MetaConfig = {
    title: 'Easy Service | Ремонт высшего качества',
    description: 'Easy Service | Ремонт высшего качества'
};

// Получение конфига по коду
export const getMetaConfig = (code?: string): MetaConfig => {
    if (!code) return defaultMeta;
    return metaConfigs[code] || defaultMeta;
};

// Экспортируемые функции
export const metaTitle = (code?: string): string => {
    return getMetaConfig(code).title;
};

export const metaDescription = (code?: string): string => {
    return getMetaConfig(code).description || defaultMeta.description || '';
};

export const metaCodes = Object.keys(metaConfigs) as string[];

export const metaConfigsAll = Object.entries(metaConfigs).map(([code, config]) => ({
    code,
    ...config
}));


export const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://easytronicservice.ru/",
    "name": "Kroncl",
    "alternateName": "Easy Service | Ремонт высшего качества",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://easytronicservice.ru/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
}

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Easy Service",
    "url": "https://easytronicservice.ru",
    "logo": "https://easytronicservice.ru/images/logo/base.png",
    "sameAs": [
    ]
}