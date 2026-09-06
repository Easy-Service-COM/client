// import { PAPERS_LINK_PLATFORM_USAGE, PAPERS_LINK_POLICY_PRIVACY } from "../../(sections)/(customers)/(papers)/navigation.config";

import { linksConfig } from "@/config/links.config";

export interface FooterLink {
    capture: string;
    href: string;
}

export interface FooterGroup {
    capture?: string;
    links: FooterLink[];
}

export const linksList: FooterGroup[] = [
    {
        capture: 'Главное',
        links: [
            { capture: 'Москва, Волжский бульвар 1к1', href: 'https://yandex.ru/maps/?from=mapframe&ll=37.743436%2C55.720140&source=mapframe&um=constructor%3A9e6400e607d2b4651293edd0a1a16df9ad7c565d57fc3f977ef84d650c153032&utm_source=mapframe&z=16' },
            { capture: 'ИП Яковлев Константин Максимович', href: '#' },
            { capture: 'ИНН 772830470828', href: '#' },
        ]
    },
    {
        capture: 'Контакты',
        links: [
            { capture: 'Позвонить нам', href: linksConfig.phone },
            { capture: 'WhatsApp', href: linksConfig.whatsapp },
            { capture: 'Telegram', href: linksConfig.telegram },
        ]
    },
    {
        capture: 'OPEL',
        links: [
            { capture: 'Corsa C', href: '#' },
            { capture: 'Corsa D', href: '#' },
            { capture: 'Zafira B', href: '#' },
            { capture: 'Vectra C', href: '#' },
            { capture: 'Astra H', href: '#' },
            { capture: 'Meriva A', href: '#' },
        ]
    },
    {
        capture: 'FORD',
        links: [
            { capture: 'Fusion', href: '#' },
            { capture: 'Fiesta', href: '#' },
        ]
    },
    {
        capture: 'CHEVROLET',
        links: [
            { capture: 'Aveo', href: '#' },
            { capture: 'Lacetti', href: '#' },
            { capture: 'Cruze', href: '#' },
            { capture: 'Orlando', href: '#' },
        ]
    },
    {
        capture: 'HONDA',
        links: [
            { capture: 'Accord', href: '#' },
            { capture: 'Crider', href: '#' },
            { capture: 'Inspire', href: '#' },
        ]
    },
]