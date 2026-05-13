# @opix-team/sdk

[![npm version](https://img.shields.io/npm/v/@opix-team/sdk)](https://www.npmjs.com/package/@opix-team/sdk)<br>
Opix is a realtime invite backend that helps you create, track, and manage invite flows without building any infrastructure.  
This SDK provides a clean, modern client for interacting with the Opix API.

~~~~ts
import { createClient } from "@opix-team/sdk";

const opix = createClient("client_id", "api_key");

const invite = await opix.invites.create({
  type: "referral",
  source: "dashboard",
  expires_in: 86400
});
~~~~

Events stream in realtime ⚡

~~~~ts
opix.events.on("invite.created", (event) => {
  console.log("New invite created:", event);
});
~~~~

---

## Installation

~~~~sh
npm install @opix-team/sdk
~~~~

---

## Usage

### Create a client

~~~~ts
import { createClient } from "@opix-team/sdk";

const opix = createClient("client_id", "api_key");
~~~~

---

## Invites API

### Create an invite

~~~~ts
const invite = await opix.invites.create({
  type: "referral",
  source: "dashboard",
  expires_in: 86400
});
~~~~

### List invites

~~~~ts
const invites = await opix.invites.list({
  limit: 20,
  status: "active"
});
~~~~

### Redeem an invite

~~~~ts
await opix.invites.redeem("invite_id", "user_id");
~~~~

### Revoke an invite

~~~~ts
await opix.invites.revoke("invite_id");
~~~~

---

## Events API

Opix emits realtime events for every invite lifecycle change.

### Subscribe to events

~~~~ts
opix.events.on("invite.created", (event) => {
  console.log("Invite created:", event);
});
~~~~

---

## Tracking

Track custom events tied to your authorization.

~~~~ts
await opix.track({
  event_type: "page_view",
  payload: { page: "/dashboard" }
});
~~~~

---

## API Key Validation

~~~~ts
const result = await opix.validate();

console.log(result.valid);
console.log(result.scopes);
~~~~

---

## License

MIT © ThatBobo
