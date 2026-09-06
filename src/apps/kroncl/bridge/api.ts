class ApiBridge {
    private baseUrl: string;
    private apiKey: string;
    private companyId: string;

    constructor() {
        this.baseUrl = process.env.KRONCL_API_URL || 'https://api.kroncl.com/api/v1';
        this.apiKey = process.env.KRONCL_API_TOKEN || '';
        this.companyId = process.env.KRONCL_COMPANY_ID || '';
    }

    // Утилита для построения URL с параметрами
    buildUrl(endpoint: string, params?: Record<string, any>) {
        if (!params) return endpoint;
        
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                searchParams.append(key, String(value));
            }
        });
        const query = searchParams.toString();
        return query ? `${endpoint}?${query}` : endpoint;
    }

    private async request(endpoint: string, options: RequestInit = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`,
                ...options.headers,
            },
        });

        const data = await response.json();
        return data;
    }

    // Для запросов к компаниям (автоматически подставляет company_id)
    private companyRequest(endpoint: string, options: RequestInit = {}) {
        return this.request(`/companies/${this.companyId}${endpoint}`, options);
    }

    get(endpoint: string, options?: RequestInit) {
        return this.request(endpoint, { ...options, method: 'GET' });
    }

    post(endpoint: string, body?: any, options?: RequestInit) {
        return this.request(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(body),
        });
    }

    put(endpoint: string, body?: any, options?: RequestInit) {
        return this.request(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(body),
        });
    }

    patch(endpoint: string, body?: any, options?: RequestInit) {
        return this.request(endpoint, {
            ...options,
            method: 'PATCH',
            body: JSON.stringify(body),
        });
    }

    delete(endpoint: string, options?: RequestInit) {
        return this.request(endpoint, { ...options, method: 'DELETE' });
    }

    // Для компании
    companyGet(endpoint: string, options?: RequestInit) {
        return this.companyRequest(endpoint, { ...options, method: 'GET' });
    }

    companyPost(endpoint: string, body?: any, options?: RequestInit) {
        return this.companyRequest(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(body),
        });
    }

    companyPut(endpoint: string, body?: any, options?: RequestInit) {
        return this.companyRequest(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(body),
        });
    }

    companyPatch(endpoint: string, body?: any, options?: RequestInit) {
        return this.companyRequest(endpoint, {
            ...options,
            method: 'PATCH',
            body: JSON.stringify(body),
        });
    }

    companyDelete(endpoint: string, options?: RequestInit) {
        return this.companyRequest(endpoint, { ...options, method: 'DELETE' });
    }
}

export const api = new ApiBridge();