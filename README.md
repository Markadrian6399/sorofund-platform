# SoroFund - Decentralized Crowdfunding

A blockchain-based crowdfunding platform built on Stellar/Soroban, enabling creators to launch milestone-based campaigns with full transparency and backer protection.

## 📖 Documentation

Comprehensive documentation is available in the [`documentation/`](documentation/) folder:

- [Project Architecture](documentation/architecture/architecture.md)

## 🏗 Project Structure

```
sorofund_platform/
├── frontend/          # Next.js web application
├── backend/           # Node.js/Express API server
├── contracts/         # Soroban smart contracts (Rust)
│   └── sorofund/
├── documentation/     # All project documentation
└── package.json       # Monorepo root config
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- Rust 1.70+
- Stellar CLI
- Git

### Monorepo Setup

```bash
# Install all dependencies (frontend + backend)
npm run install:all
```

### Run Everything Together

```bash
# From root directory
npm run dev
```

This starts both frontend and backend concurrently.
