# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] – 2026-05-09
### Added
- Initial stable release of `@opix/sdk`.
- `createClient` for initializing the Opix client.
- Invite management:
  - `invites.create`
  - `invites.list`
  - `invites.redeem`
  - `invites.revoke`
- Realtime event system:
  - `events.on("invite.created")`
  - Foundation for future event types.
- Tracking API:
  - `track(event)`
- API key validation:
  - `validate()`
- Fully typed TypeScript definitions.
- ESM‑only build with `dist/` output.
- Source maps for debugging.
- README with usage examples.
- Project metadata for npm publishing.

### Example
~~~~ts
import { createClient } from "@opix/sdk";

const opix = createClient("client_id", "api_key");

const invite = await opix.invites.create({
  type: "referral",
  source: "dashboard"
});
~~~~

---

## [Unreleased]
### Planned
- Additional realtime event types.
- WebSocket reconnect logic.
- Browser‑friendly bundle.
- Error code documentation.
- Invite templates and metadata support.
