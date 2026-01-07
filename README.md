# MMOStars adoption (https://kaspa.social) Kaspa Next.js Starter Template based on IzioDev's React starter kit

A modern Next.js 16 starter template for building Kaspa blockchain applications. This template provides a complete setup for developers to create apps that can read and interact with the Kaspa blockchain.

## Features

- **Next.js 16.1.1** - Latest Next.js with App Router support
- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety with Kaspa WASM bindings
- **Tailwind CSS 4** - Modern utility-first CSS framework
- **Kaspa WASM Integration** - Interact with Kaspa blockchain using WebAssembly
- **RPC Client** - Built-in RPC provider for connecting to Kaspa nodes
- **UI Components** - Radix UI-based accessible components

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- A running Kaspa node (or use a public RPC endpoint)

### Installation

```bash
# Navigate to the project directory
cd react-starter

# Install dependencies
npm install
```

### Configuration

By default, the template connects to the Kaspa mainnet. You can modify the network in [`src/context/RpcContext.tsx`](src/context/RpcContext.tsx):

```typescript
const networkId = "mainnet"; // Use "testnet" for testnet
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
react-starter/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Base UI components (Button, Card, etc.)
│   │   ├── Header.tsx          # App header
│   │   └── Sidebar.tsx         # App sidebar
│   ├── context/                # React contexts
│   │   ├── RpcContext.tsx      # Kaspa RPC provider
│   │   └── ThemeProvider.tsx   # Theme provider
│   ├── features/               # Feature-specific components
│   │   ├── BalanceChecker.tsx  # Check address balances
│   │   ├── BlockDagInfo.tsx    # View block DAG info
│   │   ├── BlockAdded.tsx      # Subscribe to new blocks
│   │   ├── DaaScore.tsx        # Track DAA score changes
│   │   └── VirtualChainChanged.tsx  # Track virtual chain changes
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # Common utilities
│   └── types/                  # TypeScript type definitions
│       └── kaspa-wasm-web.d.ts # Kaspa WASM type declarations
├── vendor/                     # Vendored dependencies
│   └── kluster/
│       └── kaspa-wasm-web/     # Kaspa WASM bindings (v4.1.18)
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json                # Project dependencies
```

## Kaspa WASM Integration

The template includes `@kluster/kaspa-wasm-web` v4.1.18, which provides:

- **Cryptographic functions** - Hashing, signature verification
- **Address utilities** - Address creation and validation
- **Transaction handling** - Create, sign, and broadcast transactions
- **Wallet SDK** - Full wallet functionality (BIP39, HD wallets)

### Example: Connecting to the Kaspa Network

```typescript
import { useRpc } from "@/context/RpcContext";

function MyComponent() {
  const { rpc, isConnected, connect } = useRpc();

  useEffect(() => {
    if (!isConnected) {
      connect();
    }
  }, [isConnected, connect]);

  if (!isConnected) {
    return <div>Connecting to Kaspa network...</div>;
  }

  return <div>Connected to Kaspa!</div>;
}
```

### Example: Getting Balance

```typescript
import { useRpc } from "@/context/RpcContext";

async function getBalance(address: string) {
  const { rpc } = useRpc();
  const balances = await rpc.getBalancesByAddresses({ 
    addresses: [address] 
  });
  return balances;
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Dependencies

### Core Dependencies
- `next`: 16.1.1
- `react`: 19.1.0
- `react-dom`: 19.1.0
- `@kluster/kaspa-wasm-web`: 4.1.18 (vendored)

### UI Dependencies
- `@radix-ui/react-dialog`: Dialog components
- `@radix-ui/react-separator`: Separator components
- `@radix-ui/react-slot`: Slot component
- `class-variance-authority`: CVA for component variants
- `clsx`: Utility for class names
- `tailwind-merge`: Merge Tailwind classes
- `lucide-react`: Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
