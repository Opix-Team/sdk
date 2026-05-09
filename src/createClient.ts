// src/createClient.ts

const BASE_URL = "https://coatunyealgfrmpszpsu.supabase.co/functions/v1";

export type OpixClient = ReturnType<typeof createClient>;

export const createClient = (clientId: string, apiKey: string) => {
  // Core request helper — handles fetch, headers, errors, JSON
  const request = async <T,>(path: string, init: RequestInit = {}): Promise<T> => {
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

    return json.data as T;
  };

  // Realtime event listeners
  const listeners = new Map<string, Set<(event: any) => void>>();

  const events = {
    on(eventName: string, handler: (event: any) => void) {
      if (!listeners.has(eventName)) listeners.set(eventName, new Set());
      listeners.get(eventName)!.add(handler);
    },

    off(eventName: string, handler: (event: any) => void) {
      listeners.get(eventName)?.delete(handler);
    },

    // Internal emit — used by polling/SSE later
    _emit(eventName: string, payload: any) {
      listeners.get(eventName)?.forEach((fn) => fn(payload));
    }
  };

  return {
    clientId,
    events,

    // Validate API key
    validate: () =>
      request<{ valid: boolean; scopes: string[] }>("/api-keys-validate", {
        method: "POST",
      }),

    // Track an event
    track: (input: {
      event_type: string;
      payload?: Record<string, unknown>;
      status_code?: number;
    }) =>
      request("/events-track", {
        method: "POST",
        body: JSON.stringify({ authorization_id: clientId, ...input }),
      }),

    // List events
    listEvents: (params?: { limit?: number; since?: string }) => {
      const qs = new URLSearchParams(
        Object.entries(params ?? {}).filter(([, v]) => v != null) as [string, string][],
      ).toString();

      return request(`/events-list${qs ? `?${qs}` : ""}`);
    },

    // Invite namespace
    invites: {
      list: (params?: { limit?: number; status?: string }) => {
        const qs = new URLSearchParams(
          Object.entries(params ?? {}).filter(([, v]) => v != null) as [string, string][],
        ).toString();

        return request(`/invites-list${qs ? `?${qs}` : ""}`);
      },

      create: (input?: {
        type?: string;
        source?: string;
        metadata?: Record<string, unknown>;
        expires_at?: string;
      }) =>
        request("/invites-create", {
          method: "POST",
          body: JSON.stringify({ authorization_id: clientId, ...(input ?? {}) }),
        }),

      redeem: (invite_id: string, redeemed_by?: string) =>
        request("/invites-redeem", {
          method: "POST",
          body: JSON.stringify({ invite_id, redeemed_by }),
        }),

      revoke: (invite_id: string) =>
        request("/invites-revoke", {
          method: "POST",
          body: JSON.stringify({ invite_id }),
        }),
    },
  };
};
