import { api } from "../bridge/api";
import { CreateDealRequest } from "./types";

export const createDeal = (data: CreateDealRequest) => {
    return api.companyPost('/modules/dm/deals', data);
};
