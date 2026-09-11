// ============================================================
// Константы проекта

import { formatPhoneNumber } from "@/assets/utils/phone-utils";

// ============================================================
export const SITE_NAME = 'Easy Service';
export const SITE_URL = 'https://easytronicservice.ru';
export const SITE_SLOGAN = 'Ремонт высшего качества';
export const SITE_DESCRIPTION =
  'Профессиональное обслуживание трансмиссии Easytronic — наш главный профиль. ' +
  'Знаем все слабые места роботизированных коробок Opel и Ford — и точно знаем, как их устранить. ' +
  'Замена сцепления, диагностика и комплексный ремонт узлов. Также выполняем ремонт и замену генераторов.';

export const SITE_LOGO_ICON = `${SITE_URL}/images/logo/ico-logo.svg`;
export const SITE_LOGO_FULL = `${SITE_URL}/images/logo/text-logo.svg`;
export const SITE_OG_IMAGE = `${SITE_URL}/images/logo/text-logo.svg`

// ============================================================
// Типы
// ============================================================
export type MetaConfig = {
  title: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
};

// ============================================================
// Кастомные мета для отдельных страниц
// ============================================================
const metaConfigs: Record<string, MetaConfig> = {
  home: {
    title: `${SITE_NAME} — ${SITE_SLOGAN}`,
    description: SITE_DESCRIPTION,
    keywords: [
      'ремонт Easytronic',
      'роботизированная коробка Opel',
      'роботизированная коробка Ford',
      'замена сцепления Easytronic',
      'ремонт генераторов',
      'диагностика трансмиссии',
    ],
  },
  catalog: {
    title: 'Каталог услуг и товаров',
    description:
      'Полный каталог услуг и товаров Easy Service: ремонт Easytronic, замена сцепления, диагностика, ремонт генераторов и другие работы и агрегаты.',
    canonical: `${SITE_URL}/catalog`,
  },
  // Пример для статьи — добавляй по мере появления
  'durashift-oshibka-p1607': {
    title: 'Ошибка P1607 Durashift: причины и ремонт',
    description:
      'Разбираем ошибку P1607 в роботизированной коробке Durashift: причины появления, симптомы и способы устранения.',
    canonical: `${SITE_URL}/durashift-oshibka-p1607`,
  },
};

// ============================================================
// Дефолтные значения
// ============================================================
export const defaultMeta: MetaConfig = {
  title: `${SITE_NAME} — ${SITE_SLOGAN}`,
  description: SITE_DESCRIPTION,
  keywords: [
    'Easy Service',
    'ремонт Easytronic',
    'роботизированная коробка',
    'ремонт генераторов',
    'автосервис',
    'замена сцепления',
    'ремонт изитроника',
    'изитроник',
    'Opel',
    'Ford',
    'Chevrolet',
    'опель',
    'перевод на механику'
  ],
  ogImage: SITE_OG_IMAGE,
  canonical: SITE_URL,
};

// ============================================================
// Геттеры
// ============================================================
export const getMetaConfig = (code?: string): MetaConfig => {
  if (!code) return defaultMeta;
  return metaConfigs[code] || defaultMeta;
};

export const metaTitle = (code?: string): string => getMetaConfig(code).title;
export const metaDescription = (code?: string): string =>
  getMetaConfig(code).description || defaultMeta.description || '';

export const metaCodes = Object.keys(metaConfigs) as string[];

export const metaConfigsAll = Object.entries(metaConfigs).map(([code, config]) => ({
  code,
  ...config,
}));

// ============================================================
// JSON-LD: WebSite
// ============================================================
export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: `${SITE_NAME} — ${SITE_SLOGAN}`,
  inLanguage: 'ru-RU',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// ============================================================
// JSON-LD: Organization (AutoRepair)
// ============================================================
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: SITE_NAME,
  alternateName: `${SITE_NAME} — ${SITE_SLOGAN}`,
  url: SITE_URL,
  logo: SITE_LOGO_FULL,
  image: SITE_LOGO_FULL,
  description: SITE_DESCRIPTION,
  slogan: SITE_SLOGAN,

  telephone: '+7 (977) 175-40-50',

  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RU',
    addressLocality: 'Москва',
    streetAddress: 'Волжский бульвар, 1к1',
  },

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '14:00',
      closes: '21:00',
    },
  ],

  sameAs: [
    'https://t.me/unl1337',
    'https://wa.me/79771754050',
  ],
};