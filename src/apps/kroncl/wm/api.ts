import { api } from "../bridge/api";
import { GetUnitsParams, GetCategoriesParams } from "./types";

// ============ CATEGORIES ============

export const getCategories = (params?: GetCategoriesParams) => {
    const url = api.buildUrl('/modules/wm/catalog/categories', params);
    return api.companyGet(url);
};

export const getCategory = (id: string) => {
    return api.companyGet(`/modules/wm/catalog/categories/${id}`);
};

// ============ UNITS ============

export const getUnits = (params?: GetUnitsParams) => {
    const url = api.buildUrl('/modules/wm/catalog/units', params);
    return api.companyGet(url);
};

export const getUnit = (id: string) => {
    return api.companyGet(`/modules/wm/catalog/units/${id}`);
};