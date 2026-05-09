// src/createClient.ts
const BASE_URL = "https://coatunyealgfrmpszpsu.supabase.co/functions/v1";
export const createClient = (clientId, apiKey) => {
    // Core request helper — handles fetch, headers, errors, JSON
    const request = async (path, init = {}) => {
        const res = await fetch(`${BASE_URL}${path}`, {
            ...init,
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                ...(init.headers ?? {}),
            },
        });
        const json = await res.json();
        if (!res.ok || json.error) {
            throw new Error(json.error?.message ?? `Opix request failed: ${res.status}`);
        }
        return json.data;
    };
    // Realtime event listeners
    const listeners = new Map();
    const events = {
        on(eventName, handler) {
            if (!listeners.has(eventName))
                listeners.set(eventName, new Set());
            listeners.get(eventName).add(handler);
        },
        off(eventName, handler) {
            listeners.get(eventName)?.delete(handler);
        },
        // Internal emit — used by polling/SSE later
        _emit(eventName, payload) {
            listeners.get(eventName)?.forEach((fn) => fn(payload));
        }
    };
    return {
        clientId,
        events,
        // Validate API key
        validate: () => request("/api-keys-validate", {
            method: "POST",
        }),
        // Track an event
        track: (input) => request("/events-track", {
            method: "POST",
            body: JSON.stringify({ authorization_id: clientId, ...input }),
        }),
        // List events
        listEvents: (params) => {
            const qs = new URLSearchParams(Object.entries(params ?? {}).filter(([, v]) => v != null)).toString();
            return request(`/events-list${qs ? `?${qs}` : ""}`);
        },
        // Invite namespace
        invites: {
            list: (params) => {
                const qs = new URLSearchParams(Object.entries(params ?? {}).filter(([, v]) => v != null)).toString();
                return request(`/invites-list${qs ? `?${qs}` : ""}`);
            },
            create: (input) => request("/invites-create", {
                method: "POST",
                body: JSON.stringify({ authorization_id: clientId, ...(input ?? {}) }),
            }),
            redeem: (invite_id, redeemed_by) => request("/invites-redeem", {
                method: "POST",
                body: JSON.stringify({ invite_id, redeemed_by }),
            }),
            revoke: (invite_id) => request("/invites-revoke", {
                method: "POST",
                body: JSON.stringify({ invite_id }),
            }),
        },
    };
};
//# sourceMappingURL=createClient.js.map