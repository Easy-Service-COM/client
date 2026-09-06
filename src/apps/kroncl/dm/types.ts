export interface CreateDealRequest {
    comment?: string | null;
    type_id?: string | null;
}

export interface Deal {
    id: string;
    comment: string | null;
    type_id: string | null;
    created_at: string;
    updated_at: string;

    // Вложенные сущности
    client_id: string | null;
}