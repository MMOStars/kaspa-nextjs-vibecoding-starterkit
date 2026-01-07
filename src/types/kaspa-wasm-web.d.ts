declare module "@kluster/kaspa-wasm-web" {
  export class RpcClient {
    constructor(options: { resolver: Resolver; networkId: string });
    connect(options: { blockAsyncConnect: boolean; timeoutDuration: number; retryInterval: number }): Promise<void>;
    disconnect(): Promise<void>;
    url?: string;
    
    // Subscription methods
    subscribeBlockAdded(): Promise<void>;
    subscribeVirtualChainChanged(includeAcceptedBlockIds: boolean): Promise<void>;
    subscribeVirtualDaaScoreChanged(): Promise<void>;
    
    // Event methods
    on(event: string, callback: (data: any) => void): void;
    addEventListener(event: string, callback: (data: any) => void): void;
    removeListener(event: string, callback: (data: any) => void): void;
    removeEventListener(event: string, callback: (data: any) => void): void;
    
    // RPC methods
    getBalancesByAddresses(params: { addresses: string[] }): Promise<IGetBalancesByAddressesResponse>;
    getBlockDagInfo(): Promise<IGetBlockDagInfoResponse>;
    getInfo(): Promise<IGetInfoResponse>;
    getDaaScore(): Promise<{ daaScore: bigint }>;
  }

  export class Resolver {
    constructor();
  }

  export const NetworkType: {
    Mainnet: number;
    Testnet: number;
    Devnet: number;
    Simnet: number;
  };

  export interface IGetBalancesByAddressesResponse {
    entries: Array<{ address: string; balance: bigint }>;
  }

  export interface IGetBlockDagInfoResponse {
    network: string;
    blockCount: bigint;
    headerCount: bigint;
    tipHashes: string[];
    difficulty: number;
    pastMedianTime: bigint;
    virtualParentHashes: string[];
    pruningPointHash: string;
    virtualDaaScore: bigint;
    sink: string;
  }

  export interface IGetInfoResponse {
    p2p_id: string;
    mempoolSize: bigint;
    serverVersion: string;
    isUtxoIndexed: boolean;
    isSynced: boolean;
  }

  // Interface definitions from kaspa.d.ts
  export interface ITransactionOutpoint {
    transactionId: string;
    index: number;
  }

  export interface ITransaction {
    version: number;
    inputs: ITransactionInput[];
    outputs: ITransactionOutput[];
    lockTime: bigint;
    subnetworkId: string;
    gas: bigint;
    payload: string;
    mass?: bigint;
    verboseData?: ITransactionVerboseData;
  }

  export interface ITransactionVerboseData {
    transactionId: string;
    hash: string;
    computeMass: bigint;
    blockHash: string;
    blockTime: bigint;
  }

  export interface IHeader {
    hash: string;
    version: number;
    parentsByLevel: Array<Array<string>>;
    hashMerkleRoot: string;
    acceptedIdMerkleRoot: string;
    utxoCommitment: string;
    timestamp: bigint;
    bits: number;
    nonce: bigint;
    daaScore: bigint;
    blueWork: bigint | string;
    blueScore: bigint;
    pruningPoint: string;
  }

  export interface IUtxoEntry {
    address?: Address;
    outpoint: ITransactionOutpoint;
    amount: bigint;
    scriptPublicKey: IScriptPublicKey;
    blockDaaScore: bigint;
    isCoinbase: boolean;
  }

  export interface IScriptPublicKey {
    version: number;
    script: string;
  }

  export interface ITransactionOutput {
    value: bigint;
    scriptPublicKey: IScriptPublicKey | string;
    verboseData?: ITransactionOutputVerboseData;
  }

  export interface ITransactionOutputVerboseData {
    scriptPublicKeyType: string;
    scriptPublicKeyAddress: string;
  }

  export interface ITransactionInput {
    previousOutpoint: ITransactionOutpoint;
    signatureScript?: string;
    sequence: bigint;
    sigOpCount: number;
    utxo?: IUtxoEntry;
    verboseData?: ITransactionInputVerboseData;
  }

  export interface ITransactionInputVerboseData {}

  export interface IBlock {
    header: IHeader;
    transactions: ITransaction[];
    verboseData?: IBlockVerboseData;
  }

  export interface IBlockVerboseData {
    hash: string;
    difficulty: number;
    selectedParentHash: string;
    transactionIds: string[];
    isHeaderOnly: boolean;
    blueScore: number;
    childrenHashes: string[];
    mergeSetBluesHashes: string[];
    mergeSetRedsHashes: string[];
    isChainBlock: boolean;
  }

  export interface IRawBlock {
    header: IRawHeader;
    transactions: ITransaction[];
  }

  export interface IRawHeader {
    version: number;
    parentsByLevel: Array<Array<string>>;
    hashMerkleRoot: string;
    acceptedIdMerkleRoot: string;
    utxoCommitment: string;
    timestamp: bigint;
    bits: number;
    nonce: bigint;
    daaScore: bigint;
    blueWork: bigint | string;
    blueScore: bigint;
    pruningPoint: string;
  }

  export interface INetworkAddress {
    ip: string;
    port?: number;
  }

  export interface IFees {
    amount: bigint;
    source?: number;
  }

  export interface IAccountDescriptor {
    kind: AccountKind;
    accountId: string;
    accountName?: string;
    receiveAddress?: Address;
    changeAddress?: Address;
    addresses?: Address[];
    prvKeyDataIds: string[];
    [key: string]: any;
  }

  export interface IPrvKeyDataInfo {
    id: string;
    name?: string;
  }

  export class AccountKind {
    constructor(kind: string);
    toString(): string;
  }

  export class Address {
    constructor(address: string);
    static validate(address: string): boolean;
    toString(): string;
    get version(): string;
    get prefix(): string;
    get payload(): string;
    short(n: number): string;
  }

  export class Balance {
    get mature(): bigint;
    get pending(): bigint;
    get outgoing(): bigint;
    toBalanceStrings(network_type: any): BalanceStrings;
  }

  export class BalanceStrings {
    get mature(): string;
    get pending(): string | undefined;
  }

  export class PrivateKey {
    constructor();
    static fromWif(wif: string): PrivateKey;
    toWif(): string;
    toAddress(network: any): Address;
  }

  export class PublicKey {
    constructor(privateKey: PrivateKey);
    toAddress(network: any): Address;
  }

  export class ScriptPublicKey {
    constructor(version: number, script: string);
    static fromAddress(address: Address): ScriptPublicKey;
  }

  export class Transaction {
    constructor();
    version: number;
    inputs: ITransactionInput[];
    outputs: ITransactionOutput[];
    lockTime: bigint;
    subnetworkId: string;
    gas: bigint;
    payload: string;
    id(): string;
    weight(): bigint;
    totalFee(network: any): bigint;
    serializeToJSON(): string;
    serializeToSafeJSON(): string;
    serializeToObject(): object;
    static deserializeFromJSON(json: string): Transaction;
    static deserializeFromSafeJSON(json: string): Transaction;
  }

  export class Mnemonic {
    static fromEnglish(language: number, wordCount?: number): Mnemonic;
    toPrivateKey(
      network: any,
      accountKind?: AccountKind,
      accountIndex?: number,
    ): PrivateKey;
    toAddress(
      network: any,
      accountKind?: AccountKind,
      accountIndex?: number,
      index?: number,
      change?: boolean,
    ): Address;
  }

  export class Wallet {
    constructor();
    async open(
      password: string,
      accountId?: string,
      database?: string,
    ): Promise<void>;
    async close(): Promise<void>;
    async create(
      password: string,
      mnemonic?: Mnemonic,
      accountName?: string,
    ): Promise<IAccountDescriptor>;
    async unlock(password: string): Promise<void>;
    async lock(): Promise<void>;
    async isLocked(): Promise<boolean>;
    async setAccountName(accountId: string, accountName: string): Promise<void>;
    async getAccount(
      accountId?: string,
    ): Promise<{
      account: IAccountDescriptor;
      balance: Balance;
    }>;
    async getAccounts(): Promise<
      Array<{ account: IAccountDescriptor; balance: Balance }>
    >;
    async getBalance(accountId?: string): Promise<Balance>;
    async getAvailableUtxos(
      accountId?: string,
      skip?: number,
      numOfUtxos?: number,
    ): Promise<Array<{ entry: IUtxoEntry; rank: bigint }>>;
    async getChangeAddress(accountId?: string): Promise<Address>;
    async getReceiveAddress(accountId?: string): Promise<Address>;
    async getNewAddress(
      kind?: number,
      accountId?: string,
    ): Promise<Address>;
    async sync(walletStore: string): Promise<void>;
    async signMessage(
      message: string,
      address: Address,
    ): Promise<string>;
    async signTransaction(tx: Transaction): Promise<Transaction>;
    async getPrivateKey(
      dataId: string,
      password: string,
    ): Promise<PrivateKey>;
    async getPrivateKeyData(dataId: string): Promise<IPrvKeyDataInfo>;
    async createPaymentTransaction(
      payments: Array<{
        address: Address;
        amount: bigint;
      }>,
      fee: bigint,
      sender: Address,
      change: Address,
    ): Promise<Transaction>;
    async createMultiSignaturePaymentTransaction(
      minimumSignatures: number,
      keys: Array<PublicKey>,
      payments: Array<{
        address: Address;
        amount: bigint;
      }>,
      fee: bigint,
      sender: Address,
      change: Address,
    ): Promise<Transaction>;
    async createStakingTransaction(
      value: bigint,
      fee: bigint,
      sender: Address,
      change: Address,
      scriptPublicKey: ScriptPublicKey,
    ): Promise<Transaction>;
    async signAndSendTransaction(
      tx: Transaction,
      password: string,
      broadcast: boolean,
    ): Promise<string>;
    async getDaaScore(): Promise<bigint>;
  }

  export class Generator {
    constructor(settings: IGeneratorSettingsObject);
    async start(): Promise<void>;
    async stop(): Promise<void>;
    readonly settings: IGeneratorSettingsObject;
    readonly summary: GeneratorSummary;
    readonly transactions: Array<Transaction>;
  }

  export interface IGeneratorSettingsObject {
    recipient: Address;
    satoshis: bigint;
    priorityFee: bigint;
    feeSource?: number;
    minConfirmations?: number;
    identifier?: string;
    useCustomInput?: boolean;
    customInput?: IUtxoEntry;
    accountId?: string;
    data?: string;
    autoCompound?: boolean;
  }

  export interface GeneratorSummary {
    fee: bigint;
    totalValue: bigint;
    totalInputs: number;
    totalOutputs: number;
    totalPayouts: number;
    totalTransfers: number;
    isTransaction: boolean;
    transactionId?: string;
    password?: string;
  }

  export interface ICreateTransactions {
    transactions: Array<Transaction>;
    fee: bigint;
  }
}