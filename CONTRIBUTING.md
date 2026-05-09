# Contributing to Opix SDK

Thank you for your interest in contributing to the Opix SDK.  
This document explains how to set up your environment, follow project standards, and submit high‑quality contributions.

Opix is a realtime invite backend, and this SDK is the official client library.  
We welcome improvements, bug fixes, documentation updates, and new ideas.

---

## 🛠️ Getting Started

### 1. Fork the repository
Click **Fork** on GitHub to create your own copy.

### 2. Clone your fork

~~~~sh
git clone https://github.com/ThatBobo/sdk
cd sdk
~~~~

### 3. Install dependencies

~~~~sh
npm install
~~~~

### 4. Build the project

~~~~sh
npm run build
~~~~

### 5. Run tests

~~~~sh
npm test
~~~~

---

## 📁 Project Structure

~~~~text
src/        → TypeScript source code
dist/       → Compiled output (generated)
tests/      → Vitest test files
.github/    → GitHub Actions workflows
~~~~

Do not edit files in `dist/` — they are generated automatically.

---

## 🧪 Writing Tests

All new features and bug fixes must include tests.

Example test file:

~~~~ts
import { createClient } from "../src";

test("creates a client", () => {
  const opix = createClient("id", "key");
  expect(opix).toBeDefined();
});
~~~~

Run tests:

~~~~sh
npm test
~~~~

---

## 🧹 Code Style

- Use **TypeScript** for all code.
- Follow the existing code style.
- Keep functions small and readable.
- Use descriptive names.
- Avoid unnecessary dependencies.

---

## 🔀 Pull Requests

Before opening a PR:

1. Ensure your branch is up to date with `main`.
2. Run the build and tests.
3. Follow the template provided by GitHub.
4. Keep PRs focused — one feature or fix at a time.

We review PRs based on:

- Code clarity  
- Test coverage  
- Impact on API stability  
- Alignment with project goals  

---

## 🏷️ Versioning

We follow **Semantic Versioning**:

- `MAJOR` — breaking changes  
- `MINOR` — new features  
- `PATCH` — bug fixes  

Version bumps are handled by maintainers.

---

## 📝 Documentation

If your change affects how developers use the SDK, update:

- README.md  
- CHANGELOG.md  

---

## 🤝 Code of Conduct

By contributing, you agree to follow the project’s Code of Conduct.

---

## 🙌 Thank You

Every contribution — big or small — helps make Opix better.  
We appreciate your time, effort, and ideas.
