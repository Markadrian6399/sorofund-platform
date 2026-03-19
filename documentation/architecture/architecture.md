# SoroFund Architecture

SoroFund follows a modern web3 stack architecture integrating Stellar's Soroban smart contracts, a Node.js API layer, and a Next.js frontend.

## Components

1. **Soroban Smart Contract (`contracts/sorofund`)**
   - The core immutable logic layer handling campaign creation, pledges, milestone tracking, and fund distribution.

2. **Backend API (`backend/`)**
   - Acts as an indexing and caching layer, built with Express and TypeScript. It interacts with the Stellar blockchain using the `@stellar/stellar-sdk` and exposes RESTful endpoints for the frontend.

3. **Frontend Application (`frontend/`)**
   - A Next.js 14 App Router based web application providing a user-friendly interface. Uses Tailwind CSS for styling and Zustand/React Query for state management.

## Workflow

1. A creator initializes a campaign via the Frontend.
2. The transaction is signed via Freighter wallet and sent to the SoroFund smart contract.
3. The Backend API listens to the blockchain events and indexes the new campaign.
4. Backers browse campaigns on the Frontend and pledge funds via Smart Contract interactions.
5. If milestones exist, funds are locked until backers vote for release.
