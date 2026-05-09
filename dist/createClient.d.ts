export type OpixClient = ReturnType<typeof createClient>;
export declare const createClient: (clientId: string, apiKey: string) => {
    clientId: string;
    events: {
        on(eventName: string, handler: (event: any) => void): void;
        off(eventName: string, handler: (event: any) => void): void;
        _emit(eventName: string, payload: any): void;
    };
    validate: () => Promise<{
        valid: boolean;
        scopes: string[];
    }>;
    track: (input: {
        event_type: string;
        payload?: Record<string, unknown>;
        status_code?: number;
    }) => Promise<unknown>;
    listEvents: (params?: {
        limit?: number;
        since?: string;
    }) => Promise<unknown>;
    invites: {
        list: (params?: {
            limit?: number;
            status?: string;
        }) => Promise<unknown>;
        create: (input?: {
            type?: string;
            source?: string;
            metadata?: Record<string, unknown>;
            expires_at?: string;
        }) => Promise<unknown>;
        redeem: (invite_id: string, redeemed_by?: string) => Promise<unknown>;
        revoke: (invite_id: string) => Promise<unknown>;
    };
};
//# sourceMappingURL=createClient.d.ts.map