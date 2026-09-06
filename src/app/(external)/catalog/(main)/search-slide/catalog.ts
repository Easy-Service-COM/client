'use server';

import { getUnits } from "@/apps/kroncl/wm/api";
import { GetUnitsParams } from "@/apps/kroncl/wm/types";

export async function searchUnits(params: GetUnitsParams) {
    try {
        const response = await getUnits(params);
        return response;
    } catch (error) {
        console.error('Error in searchUnits:', error);
        return {
            status: false,
            message: error instanceof Error ? error.message : 'Ошибка при поиске',
            data: { units: [] }
        };
    }
}