'use server';

import { createDeal } from "@/apps/kroncl/dm/api";

export type DealState = {
    status: boolean;
    message: string;
    data?: any;
} | null;

export async function createDealAction(
    prevState: DealState,
    formData: FormData
): Promise<DealState> {
    const name = formData.get('name') as string;
    const type = formData.get('type') as string;
    const problem = formData.get('problem') as string;
    const contact = formData.get('contact') as string;
    const typeId = "30c1865b-6d8b-4526-9c19-fbc45f8ef011";

    if (!name?.trim() || !contact?.trim()) {
        return {
            status: false,
            message: 'Заполните обязательные поля'
        };
    }

    const comment = `Имя: ${name}\nКонтакт: ${contact}\nТип: ${type}\nПроблема: ${problem}`;

    try {
        const result = await createDeal({ type_id: typeId, comment: comment });
        return {
            status: true,
            message: 'Заявка успешно отправлена!',
            data: result
        };
    } catch (error) {
        return {
            status: false,
            message: error instanceof Error ? error.message : 'Ошибка при создании'
        };
    }
}