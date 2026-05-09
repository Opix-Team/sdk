# Opix SDK Roadmap

This roadmap outlines the planned direction for the Opix SDK.  
It is not a strict schedule — features may shift as the project evolves — but it reflects the long‑term vision for a stable, powerful invite backend client.

---

## ✅ Current Status (v1.0.0)
- Core client (`createClient`)
- Invite management (create, list, redeem, revoke)
- Realtime event system (basic event types)
- Tracking API
- API key validation
- TypeScript support
- ESM build output
- Initial documentation (README, CONTRIBUTING, CODEOWNERS, CHANGELOG)
- Project automation groundwork

---

## 🚧 In Progress
### Realtime Improvements
- Automatic reconnection logic
- Heartbeat/ping support
- Event buffering during reconnect
- More event types (`invite.redeemed`, `invite.revoked`, etc.)

### Developer Experience
- Better error messages and error codes
- Stronger TypeScript inference
- Expanded examples in README

---

## 📌 Planned Features
### Invite Enhancements
- Invite metadata fields
- Invite templates
- Bulk invite creation
- Expiration policies

### Tracking System
- Batch event sending
- Event queue with retry logic
- Browser‑friendly tracking client

### SDK Improvements
- Browser bundle (`opix-browser`)
- Node.js streaming support
- Built-in rate-limit helpers
- Configurable retry strategies

---

## 🧪 Testing & Quality
- Full test coverage for invites API
- Mock server for local development
- Integration tests for event streaming
- Performance benchmarks

---

## 🛠️ Tooling & Automation
- GitHub Actions for build + test
- GitHub Actions for npm publish on tags
- Automated changelog generation (future)
- Release notes templates

---

## 📘 Documentation Goals
- Full API reference
- “How Opix Works” architecture overview
- Realtime event guide
- Invite lifecycle diagrams
- Migration guides for future versions

---

## 🧭 Long‑Term Vision
- First‑class browser SDK
- Mobile‑friendly client (React Native)
- Multi‑platform examples (Next.js, Node, Cloudflare Workers)
- Opix CLI for debugging and testing invites
- Full developer dashboard integration

---

## 💬 Feedback
The roadmap evolves with community feedback.  
If you have ideas or suggestions, open an issue or start a discussion on GitHub.
