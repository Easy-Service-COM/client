import Clients from "@/assets/ui-kit/icons/clients";
import Code from "@/assets/ui-kit/icons/code";
import History from "@/assets/ui-kit/icons/history";
import Kanban from "@/assets/ui-kit/icons/kanban";
import Keyhole from "@/assets/ui-kit/icons/keyhole";
import Team from "@/assets/ui-kit/icons/team";
import TwoCards from "@/assets/ui-kit/icons/two-cards";
import Upload from "@/assets/ui-kit/icons/upload";
import Wallet from "@/assets/ui-kit/icons/wallet";
import Business from "@/assets/ui-kit/icons/business";
import Cloud from "@/assets/ui-kit/icons/cloud";
import Graph from "@/assets/ui-kit/icons/graph";
import Home from "@/assets/ui-kit/icons/home";
import Star from "@/assets/ui-kit/icons/star";
import { NavigationSection } from "@/assets/utils/sections";
import { MenuProps } from "./modal-menu/_types";
import Package from "@/assets/ui-kit/icons/package";
import { linksConfig } from "@/config/links.config";

export interface NavigationItem extends NavigationSection {
    name: string;
    menu?: MenuProps;
    tag?: string;
}

// Стили для иконок в меню
const iconStyles = { width: 16, height: 16 };

export const navigationConfig: NavigationItem[] = [
    {
        name: 'Главная',
        href: '/',
    },
    {
        name: 'Каталог',
        href: '/catalog',
    },
    {
        name: 'Durashift: ошибка P1607',
        href: '/durashift-oshibka-p1607',
        tag: 'Новое'
    }
];