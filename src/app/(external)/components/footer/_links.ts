// import { PAPERS_LINK_PLATFORM_USAGE, PAPERS_LINK_POLICY_PRIVACY } from "../../(sections)/(customers)/(papers)/navigation.config";

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
            { capture: 'Обслуживание', href: '/z' },
        ]
    },
    {
        capture: 'OPEL',
        links: [
            // { capture: 'z', href: '/z' },
        ]
    },
    {
        capture: 'FORD',
        links: [
            // { capture: 'z', href: '/z' },
        ]
    },
    {
        capture: 'CHEVROLET',
        links: [
            // { capture: 'z', href: '/z' },
        ]
    },
    {
        capture: 'ЦЕНЫ',
        links: [
            // { capture: 'z', href: '/z' },
        ]
    },
    {
        capture: 'ЗАПЧАСТИ',
        links: [
            // { capture: 'z', href: '/z' },
        ]
    },
]