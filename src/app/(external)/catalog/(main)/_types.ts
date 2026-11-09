export interface Product {
    id: string;
    priority?: number; // выше - важнее
    title: string;
    minAmount: number;
    description: string;
    images: string[];
    category: string;
}

export interface Category {
    id: string;
    title: string;
}