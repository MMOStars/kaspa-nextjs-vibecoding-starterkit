# Kaspa TypeDoc SDK - Complete Scraped Documentation

## Address

AddressVersion
Type: enum
Section: address
Description: Kaspa Address version (PubKey, PubKey ECDSA, ScriptHash) PubKey addresses always have the version byte set to 0 PubKey ECDSA addresses always have the version byte set to 1 ScriptHash addresses always have the version byte set to 8
Signature: `PubKey: 0PubKeyECDSA: 1ScriptHash: 8`
Source: web/kaspa/kaspa.d.ts:339
Additional Details:
PubKey addresses always have the version byte set to 0
PubKey ECDSA addresses always have the version byte set to 1
ScriptHash addresses always have the version byte set to 8

Address
Type: class
Section: address
Description: Return copy of self without private attributes. Return stringified version of self. Convert an address to a string.
Signature: `new Address(address): Addressset setPrefix(value): voidfree(): voidshort(n): stringtoJSON(): ObjecttoString(): stringtoString(): stringvalidate(address): boolean`
Source: web/kaspa/kaspa.d.ts:5062
Additional Details:
Kaspa [Address] struct that serializes to and from an address format string: kaspa:qz0s...t8cv.
Return stringified version of self.
Convert an address to a string.

## Consensus

NetworkType
Type: enum
Section: consensus
Signature: `Devnet: 2Mainnet: 0Simnet: 3Testnet: 1`
Source: web/kaspa/kaspa.d.ts:417

Opcodes
Type: enum
Section: consensus
Description: Kaspa Transaction Script Opcodes SeeScriptBuilder Numeric related opcodes. Splice opcodes. Bitwise logic opcodes. Crypto opcodes. Undefined opcodes. Undefined opcodes.
Signature: `Op0NotEqual: 146Op10: 90Op11: 91Op12: 92Op13: 93Op14: 94Op15: 95Op16: 96Op1Add: 139Op1Negate: 79Op1Sub: 140Op2: 82Op2Div: 142Op2Drop: 109Op2Dup: 110Op2Mul: 141Op2Over: 112Op2Rot: 113Op2Swap: 114Op3: 83Op3Dup: 111Op4: 84Op5: 85Op6: 86Op7: 87Op8: 88Op9: 89OpAbs: 144OpAdd: 147OpAnd: 132OpBlake2b: 170OpBoolAnd: 154OpBoolOr: 155OpCat: 126OpCheckLockTimeVerify: 176OpCheckMultiSig: 174OpCheckMultiSigECDSA: 169OpCheckMultiSigVerify: 175OpCheckSequenceVerify: 177OpCheckSig: 172OpCheckSigECDSA: 171OpCheckSigVerify: 173OpData1: 1OpData10: 10OpData11: 11OpData12: 12OpData13: 13OpData14: 14OpData15: 15OpData16: 16OpData17: 17OpData18: 18OpData19: 19OpData2: 2OpData20: 20OpData21: 21OpData22: 22OpData23: 23OpData24: 24OpData25: 25OpData26: 26OpData27: 27OpData28: 28OpData29: 29OpData3: 3OpData30: 30OpData31: 31OpData32: 32OpData33: 33OpData34: 34OpData35: 35OpData36: 36OpData37: 37OpData38: 38OpData39: 39OpData4: 4OpData40: 40OpData41: 41OpData42: 42OpData43: 43OpData44: 44OpData45: 45OpData46: 46OpData47: 47OpData48: 48OpData49: 49OpData5: 5OpData50: 50OpData51: 51OpData52: 52OpData53: 53OpData54: 54OpData55: 55OpData56: 56OpData57: 57OpData58: 58OpData59: 59OpData6: 6OpData60: 60OpData61: 61OpData62: 62OpData63: 63OpData64: 64OpData65: 65OpData66: 66OpData67: 67OpData68: 68OpData69: 69OpData7: 7OpData70: 70OpData71: 71OpData72: 72OpData73: 73OpData74: 74OpData75: 75OpData8: 8OpData9: 9OpDepth: 116OpDiv: 150OpDrop: 117OpDup: 118OpElse: 103OpEndIf: 104OpEqual: 135OpEqualVerify: 136OpFalse: 0OpFromAltStack: 108OpGreaterThan: 160OpGreaterThanOrEqual: 162OpIf: 99OpIfDup: 115OpInvalidOpCode: 255OpInvert: 131OpLShift: 152OpLeft: 128OpLessThan: 159OpLessThanOrEqual: 161OpMax: 164OpMin: 163OpMod: 151OpMul: 149OpNegate: 143OpNip: 119OpNop: 97OpNot: 145OpNotIf: 100OpNumEqual: 156OpNumEqualVerify: 157OpNumNotEqual: 158OpOr: 133OpOver: 120OpPick: 121OpPubKey: 254OpPubKeyHash: 253OpPubKeys: 251OpPushData1: 76OpPushData2: 77OpPushData4: 78OpRShift: 153OpReserved: 80OpReserved1: 137OpReserved2: 138OpReturn: 106OpRight: 129OpRoll: 122OpRot: 123OpSHA256: 168OpSize: 130OpSmallInteger: 250OpSub: 148OpSubStr: 127OpSwap: 124OpToAltStack: 107OpTrue: 81OpTuck: 125OpUnknown166: 166OpUnknown167: 167OpUnknown178: 178OpUnknown179: 179OpUnknown180: 180OpUnknown181: 181OpUnknown182: 182OpUnknown183: 183OpUnknown184: 184OpUnknown185: 185OpUnknown186: 186OpUnknown187: 187OpUnknown188: 188OpUnknown189: 189OpUnknown190: 190OpUnknown191: 191OpUnknown192: 192OpUnknown193: 193OpUnknown194: 194OpUnknown195: 195OpUnknown196: 196OpUnknown197: 197OpUnknown198: 198OpUnknown199: 199OpUnknown200: 200OpUnknown201: 201OpUnknown202: 202OpUnknown203: 203OpUnknown204: 204OpUnknown205: 205OpUnknown206: 206OpUnknown207: 207OpUnknown208: 208OpUnknown209: 209OpUnknown210: 210OpUnknown211: 211OpUnknown212: 212OpUnknown213: 213OpUnknown214: 214OpUnknown215: 215OpUnknown216: 216OpUnknown217: 217OpUnknown218: 218OpUnknown219: 219OpUnknown220: 220OpUnknown221: 221OpUnknown222: 222OpUnknown223: 223OpUnknown224: 224OpUnknown225: 225OpUnknown226: 226OpUnknown227: 227OpUnknown228: 228OpUnknown229: 229OpUnknown230: 230OpUnknown231: 231OpUnknown232: 232OpUnknown233: 233OpUnknown234: 234OpUnknown235: 235OpUnknown236: 236OpUnknown237: 237OpUnknown238: 238OpUnknown239: 239OpUnknown240: 240OpUnknown241: 241OpUnknown242: 242OpUnknown243: 243OpUnknown244: 244OpUnknown245: 245OpUnknown246: 246OpUnknown247: 247OpUnknown248: 248OpUnknown249: 249OpUnknown252: 252OpVer: 98OpVerIf: 101OpVerNotIf: 102OpVerify: 105OpWithin: 165OpXor: 134`
Source: web/kaspa/kaspa.d.ts:438
Additional Details:
Bitwise logic opcodes.
Crypto opcodes.
Undefined opcodes.

SighashType
Type: enum
Section: consensus
Description: Kaspa Sighash types allowed by consensus
Signature: `All: 0AllAnyOneCanPay: 3None: 1NoneAnyOneCanPay: 4Single: 2SingleAnyOneCanPay: 5`
Source: web/kaspa/kaspa.d.ts:718

Header
Type: class
Section: consensus
Description: Obtain JSON representation of the header. JSON representation should be obtained using WASM, to ensure proper serialization of big integers. Finalizes the header and recomputes (updates) the header hash Return copy of self without private attributes. Return stringified version of self.
Signature: `new Header(js_value): Headerget acceptedIdMerkleRoot(): stringset acceptedIdMerkleRoot(value): voidget blueWork(): bigintset blueWork(value): voidget hashMerkleRoot(): stringset hashMerkleRoot(value): voidget pruningPoint(): stringset pruningPoint(value): voidget utxoCommitment(): stringset utxoCommitment(value): voidasJSON(): stringfinalize(): stringfree(): voidgetBlueWorkAsHex(): stringtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:5414
Additional Details:
Kaspa Block Header
Finalizes the header and recomputes (updates) the header hash
Return copy of self without private attributes.
Return stringified version of self.

NetworkId
Type: class
Section: consensus
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new NetworkId(value): NetworkIdget suffix(): numberset suffix(value): voidaddressPrefix(): stringfree(): voidtoJSON(): ObjecttoString(): stringtoString(): string`
Source: web/kaspa/kaspa.d.ts:5554
Additional Details:
NetworkId is a unique identifier for a kaspa network instance. It is composed of a network type and an optional suffix.
Return stringified version of self.

ScriptBuilder
Type: class
Section: consensus
Description: AddData pushes the passed data to the end of the script. It automatically chooses canonical opcodes depending on the length of the data. A zero length buffer will lead to a push of empty data onto the stack (Op0 = OpFalse) and any push of data greater than MAX_SCRIPT_ELEMENT_SIZE will not modify the script since that is not allowed by the script engine. Also, the script will not be modified if pushing the data would cause the script to exceed the maximum allowed script engine size MAX_SCRIPTS_SIZE. Pushes the passed opcode to the end of the script. The script will not be modified if pushing the opcode would cause the script to exceed the maximum allowed script engine size. Adds the passed opcodes to the end of the script. Supplied opcodes can be represented as an Uint8Array or a HexString. Creates an equivalent pay-to-script-hash script. Can be used to create an P2SH address. SeeaddressFromScriptPublicKey Drains (empties) the script builder, returning the script bytes represented by a hex string. Generates a signature script that fits a pay-to-script-hash script. Return copy of self without private attributes. Return stringified version of self. Get script bytes represented by a hex string. Creates a new ScriptBuilder over an existing script. Supplied script can be represented as an Uint8Array or a HexString.
Signature: `new ScriptBuilder(): ScriptBuilderaddData(data): ScriptBuilderaddI64(value): ScriptBuilderaddLockTime(lock_time): ScriptBuilderaddOp(op): ScriptBuilderaddOps(opcodes): ScriptBuilderaddSequence(sequence): ScriptBuildercreatePayToScriptHashScript(): ScriptPublicKeydrain(): stringencodePayToScriptHashSignatureScript(signature): stringfree(): voidhexView(args?): stringtoJSON(): ObjecttoString(): stringtoString(): stringcanonicalDataSize(data): numberfromScript(script): ScriptBuilder`
Source: web/kaspa/kaspa.d.ts:6671
Additional Details:
ScriptBuilder provides a facility for building custom scripts. It allows you to push opcodes, ints, and data while respecting canonical encoding. In general it does not ensure the script will execute correctly, however any data pushes which would exceed the maximum allowed script engine limits and are therefore guaranteed not to execute will not be pushed and will result in the Script function returning an error.
Pushes the passed opcode to the end of the script. The script will not be modified if pushing the opcode would cause the script to exceed the maximum allowed script engine size.
Adds the passed opcodes to the end of the script. Supplied opcodes can be represented as an Uint8Array or a HexString.
Creates an equivalent pay-to-script-hash script. Can be used to create an P2SH address.
SeeaddressFromScriptPublicKey
Drains (empties) the script builder, returning the script bytes represented by a hex string.
Generates a signature script that fits a pay-to-script-hash script.
Return copy of self without private attributes.
Return stringified version of self.
Get script bytes represented by a hex string.
Creates a new ScriptBuilder over an existing script. Supplied script can be represented as an Uint8Array or a HexString.

ScriptPublicKey
Type: class
Section: consensus
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new ScriptPublicKey(version, script): ScriptPublicKeyfree(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:6739
Additional Details:
Represents a Kaspad ScriptPublicKey
Return stringified version of self.

Transaction
Type: class
Section: consensus
Description: Returns a list of unique addresses used by transaction inputs. This method can be used to determine addresses used by transaction inputs in order to select private keys needed for transaction signing. Recompute and finalize the tx id based on updated tx fields Determines whether or not a transaction is a coinbase transaction. A coinbase transaction is a special transaction created by miners that distributes fees and block subsidy to the previous blocks' miners, and specifies the script_pub_key that will be used to pay the current miner in future blocks. Serializes the transaction to a JSON string. The schema of the JSON is defined by ISerializableTransaction. Serializes the transaction to a pure JavaScript Object. The schema of the JavaScript object is defined by ISerializableTransaction. SeeISerializableTransaction Serializes the transaction to a "Safe" JSON schema where it converts all bigint values to string to avoid potential client-side precision loss. Return copy of self without private attributes. Return stringified version of self. Deserialize the Transaction Object from a JSON string. Deserialize the Transaction Object from a pure JavaScript Object. Deserialize the Transaction Object from a "Safe" JSON schema where all bigint values are represented as string.
Signature: `new Transaction(js_value): Transactionget inputs(): TransactionInput[]set inputs(value): voidget outputs(): TransactionOutput[]set outputs(value): voidget payload(): stringset payload(value): voidget subnetworkId(): stringset subnetworkId(value): voidaddresses(network_type): Address[]finalize(): Hashfree(): voidis_coinbase(): booleanserializeToJSON(): stringserializeToObject(): ISerializableTransactionserializeToSafeJSON(): stringtoJSON(): ObjecttoString(): stringdeserializeFromJSON(json): TransactiondeserializeFromObject(js_value): TransactiondeserializeFromSafeJSON(json): Transaction`
Source: web/kaspa/kaspa.d.ts:6795
Additional Details:
Represents a Kaspa transaction. This is an artificial construct that includes additional transaction-related data such as additional data from UTXOs used by transaction inputs.
Returns the transaction ID
Recompute and finalize the tx id based on updated tx fields
Determines whether or not a transaction is a coinbase transaction. A coinbase transaction is a special transaction created by miners that distributes fees and block subsidy to the previous blocks' miners, and specifies the script_pub_key that will be used to pay the current miner in future blocks.
Serializes the transaction to a JSON string. The schema of the JSON is defined by ISerializableTransaction.
Serializes the transaction to a pure JavaScript Object. The schema of the JavaScript object is defined by ISerializableTransaction.
SeeISerializableTransaction
Serializes the transaction to a "Safe" JSON schema where it converts all bigint values to string to avoid potential client-side precision loss.
Return copy of self without private attributes.
Return stringified version of self.
Deserialize the Transaction Object from a JSON string.
Deserialize the Transaction Object from a pure JavaScript Object.
Deserialize the Transaction Object from a "Safe" JSON schema where all bigint values are represented as string.

TransactionInput
Type: class
Section: consensus
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new TransactionInput(value): TransactionInputget previousOutpoint(): TransactionOutpointset previousOutpoint(value): voidget signatureScript(): stringset signatureScript(value): voidfree(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:6871
Additional Details:
Represents a Kaspa transaction input
Return stringified version of self.

TransactionOutpoint
Type: class
Section: consensus
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new TransactionOutpoint(transaction_id, index): TransactionOutpointfree(): voidgetId(): stringtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:6897
Additional Details:
Represents a Kaspa transaction outpoint. NOTE: This struct is immutable - to create a custom outpoint use the TransactionOutpoint::new constructor. (in JavaScript use new TransactionOutpoint(transactionId, index)).
Return stringified version of self.

TransactionOutput
Type: class
Section: consensus
Description: TransactionOutput constructor Return copy of self without private attributes. Return stringified version of self.
Signature: `new TransactionOutput(value, script_public_key): TransactionOutputfree(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:6916
Additional Details:
Represents a Kaspad transaction output
Return stringified version of self.

TransactionUtxoEntry
Type: class
Section: consensus
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new TransactionUtxoEntry(): TransactionUtxoEntryfree(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:7015
Additional Details:
Holds details about an individual transaction output in a utxo set such as whether or not it was contained in a coinbase tx, the daa score of the block that accepts the tx, its public key script, and how much it pays.
Return stringified version of self.

IBlock
Type: interface
Section: consensus
Description: Interface defining the structure of a block.
Signature: `interface IBlock { header: IHeader; transactions: ITransaction[]; verboseData?: IBlockVerboseData; }header: IHeadertransactions: ITransaction[]verboseData?: IBlockVerboseData`
Source: web/kaspa/kaspa.d.ts:2003

IHeader
Type: interface
Section: consensus
Description: Interface defining the structure of a block header.
Signature: `interface IHeader { acceptedIdMerkleRoot: string; bits: number; blueScore: bigint; blueWork: string | bigint; daaScore: bigint; hash: string; hashMerkleRoot: string; nonce: bigint; parentsByLevel: string[][]; pruningPoint: string; timestamp: bigint; utxoCommitment: string; version: number; }acceptedIdMerkleRoot: stringbits: numberblueScore: bigintblueWork: string | bigintdaaScore: biginthash: stringhashMerkleRoot: stringnonce: bigintparentsByLevel: string[][]pruningPoint: stringtimestamp: bigintutxoCommitment: stringversion: number`
Source: web/kaspa/kaspa.d.ts:793

IRawBlock
Type: interface
Section: consensus
Description: Interface defining the structure of a raw block. Raw block is a structure used by GetBlockTemplate and SubmitBlock RPCs and differs from IBlock in that it does not include verbose data and carries IRawHeader that does not include a cached block hash.
Signature: `interface IRawBlock { header: IRawHeader; transactions: ITransaction[]; }header: IRawHeadertransactions: ITransaction[]`
Source: web/kaspa/kaspa.d.ts:2036

IRawHeader
Type: interface
Section: consensus
Description: Interface defining the structure of a raw block header. This interface is explicitly used by GetBlockTemplate and SubmitBlock RPCs and unlike IHeader, does not include a hash.
Signature: `interface IRawHeader { acceptedIdMerkleRoot: string; bits: number; blueScore: bigint; blueWork: string | bigint; daaScore: bigint; hashMerkleRoot: string; nonce: bigint; parentsByLevel: string[][]; pruningPoint: string; timestamp: bigint; utxoCommitment: string; version: number; }acceptedIdMerkleRoot: stringbits: numberblueScore: bigintblueWork: string | bigintdaaScore: biginthashMerkleRoot: stringnonce: bigintparentsByLevel: string[][]pruningPoint: stringtimestamp: bigintutxoCommitment: stringversion: number`
Source: web/kaspa/kaspa.d.ts:817

IScriptPublicKey
Type: interface
Section: consensus
Description: Interface defines the structure of a Script Public Key.
Signature: `interface IScriptPublicKey { script: string; version: number; }script: stringversion: number`
Source: web/kaspa/kaspa.d.ts:974

ITransaction
Type: interface
Section: consensus
Description: Interface defining the structure of a transaction. The mass of the transaction (the mass is undefined or zero unless explicitly set or obtained from the node) Optional verbose data provided by RPC
Signature: `interface ITransaction { gas: bigint; inputs: ITransactionInput[]; lockTime: bigint; mass?: bigint; outputs: ITransactionOutput[]; payload: string; subnetworkId: string; verboseData?: ITransactionVerboseData; version: number; }gas: bigintinputs: ITransactionInput[]lockTime: bigintmass?: bigintoutputs: ITransactionOutput[]payload: stringsubnetworkId: stringverboseData?: ITransactionVerboseDataversion: number`
Source: web/kaspa/kaspa.d.ts:939
Additional Details:
The mass of the transaction (the mass is undefined or zero unless explicitly set or obtained from the node)
Optional verbose data provided by RPC

ITransactionInput
Type: interface
Section: consensus
Description: Interface defines the structure of a transaction input. Optional verbose data provided by RPC
Signature: `interface ITransactionInput { previousOutpoint: ITransactionOutpoint; sequence: bigint; sigOpCount: number; signatureScript?: string; utxo?: UtxoEntryReference; verboseData?: ITransactionInputVerboseData; }previousOutpoint: ITransactionOutpointsequence: bigintsigOpCount: numbersignatureScript?: stringutxo?: UtxoEntryReferenceverboseData?: ITransactionInputVerboseData`
Source: web/kaspa/kaspa.d.ts:732
Additional Details:
Optional verbose data provided by RPC

ITransactionOutpoint
Type: interface
Section: consensus
Description: Interface defines the structure of a transaction outpoint (used by transaction input).
Signature: `interface ITransactionOutpoint { index: number; transactionId: string; }index: numbertransactionId: string`
Source: web/kaspa/kaspa.d.ts:781

ITransactionOutput
Type: interface
Section: consensus
Description: Interface defining the structure of a transaction output. Optional verbose data provided by RPC
Signature: `interface ITransactionOutput { scriptPublicKey: string | IScriptPublicKey; value: bigint; verboseData?: ITransactionOutputVerboseData; }scriptPublicKey: string | IScriptPublicKeyvalue: bigintverboseData?: ITransactionOutputVerboseData`
Source: web/kaspa/kaspa.d.ts:839
Additional Details:
Optional verbose data provided by RPC

IUtxoEntry
Type: interface
Section: consensus
Description: Interface defines the structure of a UTXO entry.
Signature: `interface IUtxoEntry { address?: Address; amount: bigint; blockDaaScore: bigint; isCoinbase: boolean; outpoint: ITransactionOutpoint; scriptPublicKey: IScriptPublicKey; }address?: Addressamount: bigintblockDaaScore: bigintisCoinbase: booleanoutpoint: ITransactionOutpointscriptPublicKey: IScriptPublicKey`
Source: web/kaspa/kaspa.d.ts:758

## Encryption

argon2sha256ivFromBinary
Type: function
Section: encryption
Description: WASM32 binding for argon2sha256iv hash function. The data to hash (HexString or Uint8Array).
Signature: `argon2sha256ivFromBinary(data, hashLength): HexString`
Parameters:
- data (string): The data to hash (HexString or Uint8Array).
- hashLength (number): 
Returns: HexString
Functions:
- `argon2sha256ivFromBinary(data, hashLength): HexString`
Source: web/kaspa/kaspa.d.ts:202
Additional Details:
The data to hash (HexString or Uint8Array).

argon2sha256ivFromText
Type: function
Section: encryption
Description: WASM32 binding for argon2sha256iv hash function. The text string to hash.
Signature: `argon2sha256ivFromText(text, byteLength): HexString`
Parameters:
- text (string): The text string to hash.
- byteLength (number): 
Returns: HexString
Functions:
- `argon2sha256ivFromText(text, byteLength): HexString`
Source: web/kaspa/kaspa.d.ts:196
Additional Details:
The text string to hash.

decryptXChaCha20Poly1305
Type: function
Section: encryption
Description: WASM32 binding for decryptXChaCha20Poly1305 function.
Signature: `decryptXChaCha20Poly1305(base64string, password): string`
Parameters:
- base64string (string): 
- password (string): 
Returns: string
Functions:
- `decryptXChaCha20Poly1305(base64string, password): string`
Source: web/kaspa/kaspa.d.ts:231

encryptXChaCha20Poly1305
Type: function
Section: encryption
Description: WASM32 binding for encryptXChaCha20Poly1305 function.
Signature: `encryptXChaCha20Poly1305(plainText, password): string`
Parameters:
- plainText (string): 
- password (string): 
Returns: string
Functions:
- `encryptXChaCha20Poly1305(plainText, password): string`
Source: web/kaspa/kaspa.d.ts:237

sha256FromBinary
Type: function
Section: encryption
Description: WASM32 binding for SHA256 hash function. The data to hash (HexString or Uint8Array).
Signature: `sha256FromBinary(data): HexString`
Parameters:
- data (string): The data to hash (HexString or Uint8Array).
Returns: HexString
Functions:
- `sha256FromBinary(data): HexString`
Source: web/kaspa/kaspa.d.ts:226
Additional Details:
The data to hash (HexString or Uint8Array).

sha256FromText
Type: function
Section: encryption
Description: WASM32 binding for SHA256 hash function. The text string to hash.
Signature: `sha256FromText(text): HexString`
Parameters:
- text (string): The text string to hash.
Returns: HexString
Functions:
- `sha256FromText(text): HexString`
Source: web/kaspa/kaspa.d.ts:220
Additional Details:
The text string to hash.

sha256dFromBinary
Type: function
Section: encryption
Description: WASM32 binding for SHA256d hash function. The data to hash (HexString or Uint8Array).
Signature: `sha256dFromBinary(data): HexString`
Parameters:
- data (string): The data to hash (HexString or Uint8Array).
Returns: HexString
Functions:
- `sha256dFromBinary(data): HexString`
Source: web/kaspa/kaspa.d.ts:214
Additional Details:
The data to hash (HexString or Uint8Array).

sha256dFromText
Type: function
Section: encryption
Description: WASM32 binding for SHA256d hash function. The text string to hash.
Signature: `sha256dFromText(text): HexString`
Parameters:
- text (string): The text string to hash.
Returns: HexString
Functions:
- `sha256dFromText(text): HexString`
Source: web/kaspa/kaspa.d.ts:208
Additional Details:
The text string to hash.

## General

Abortable
Type: class
Section: general
Description: Abortable trigger wraps an Arc, which can be cloned to signal task terminating using an atomic bool. let abortable = Abortable::default(); let result = my_task(abortable).await?; // ... elsewhere abortable.abort(); Copy
Signature: `new Abortable(): Abortableabort(): voidcheck(): voidfree(): voidisAborted(): booleanreset(): void`
Source: web/kaspa/kaspa.d.ts:5028

Aborted
Type: class
Section: general
Description: Error emitted by [Abortable].
Signature: `new Aborted(): Abortedfree(): void`
Source: web/kaspa/kaspa.d.ts:5040

Hash
Type: class
Section: general
Signature: `new Hash(hex_str): Hashfree(): voidtoString(): string`
Source: web/kaspa/kaspa.d.ts:5404

IHexViewColor
Type: interface
Section: general
Description: Color range configuration for Hex View.
Signature: `interface IHexViewColor { background?: string; color?: string; end: number; start: number; }background?: stringcolor?: stringend: numberstart: number`
Source: web/kaspa/kaspa.d.ts:4639

IHexViewConfig
Type: interface
Section: general
Description: Configuration interface for Hex View.
Signature: `interface IHexViewConfig { colors?: IHexViewColor[]; offset?: number; replacementCharacter?: string; width?: number; }colors?: IHexViewColor[]offset?: numberreplacementCharacter?: stringwidth?: number`
Source: web/kaspa/kaspa.d.ts:4651

INetworkAddress
Type: interface
Section: general
Description: Generic network address representation. IPv4 or IPv6 address. Optional port number.
Signature: `interface INetworkAddress { ip: string; port?: number; }ip: stringport?: number`
Source: web/kaspa/kaspa.d.ts:2049
Additional Details:
Optional port number.

IWASM32BindingsConfig
Type: interface
Section: general
Description: Interface for configuring workflow-rs WASM32 bindings. This option can be used to disable the validation of class names for instances of classes exported by Rust WASM32 when passing these classes to WASM32 functions. This can be useful to programmatically disable checks when using a bundler that mangles class symbol names.
Signature: `interface IWASM32BindingsConfig { validateClassNames: boolean; }validateClassNames: boolean`
Source: web/kaspa/kaspa.d.ts:4950
Additional Details:
This option can be used to disable the validation of class names for instances of classes exported by Rust WASM32 when passing these classes to WASM32 functions. This can be useful to programmatically disable checks when using a bundler that mangles class symbol names.

HexString
Type: type
Section: general
Description: A string containing a hexadecimal representation of the data (typically representing for IDs or Hashes).
Signature: `HexString: string`
Source: web/kaspa/kaspa.d.ts:4630

defer
Type: function
Section: general
Description: r" Deferred promise - an object that has resolve() and reject() r" functions that can be called outside of the promise body. r" WARNING: This function uses eval and can not be used in environments r" where dynamically-created code can not be executed such as web browser r" extensions. r"
Signature: `defer(): Promise`
Returns: Promise<any>
Functions:
- `defer(): Promise`
Source: web/kaspa/kaspa.d.ts:326

initBrowserPanicHook
Type: function
Section: general
Description: Initialize Rust panic handler in browser mode. This will output additional debug information during a panic in the browser by creating a full-screen DIV. This is useful on mobile devices or where the user otherwise has no access to console/developer tools. Use presentPanicHookLogs to activate the panic logs in the browser environment. SeepresentPanicHookLogs
Signature: `initBrowserPanicHook(): void`
Returns: void
Functions:
- `initBrowserPanicHook(): void`
Source: web/kaspa/kaspa.d.ts:307
Additional Details:
SeepresentPanicHookLogs

initConsolePanicHook
Type: function
Section: general
Description: Initialize Rust panic handler in console mode. This will output additional debug information during a panic to the console. This function should be called right after loading WASM libraries.
Signature: `initConsolePanicHook(): void`
Returns: void
Functions:
- `initConsolePanicHook(): void`
Source: web/kaspa/kaspa.d.ts:295

initWASM32Bindings
Type: function
Section: general
Description: Configuration for the WASM32 bindings runtime interface. SeeIWASM32BindingsConfig
Signature: `initWASM32Bindings(config): void`
Parameters:
- config (IWASM32BindingsConfig): 
Returns: void
Functions:
- `initWASM32Bindings(config): void`
Source: web/kaspa/kaspa.d.ts:287

presentPanicHookLogs
Type: function
Section: general
Description: Present panic logs to the user in the browser. This function should be called after a panic has occurred and the browser-based panic hook has been activated. It will present the collected panic logs in a full-screen DIV in the browser. SeeinitBrowserPanicHook
Signature: `presentPanicHookLogs(): void`
Returns: void
Functions:
- `presentPanicHookLogs(): void`
Source: web/kaspa/kaspa.d.ts:317
Additional Details:
SeeinitBrowserPanicHook

setLogLevel
Type: function
Section: general
Description: Set the logger log level using a string representation. Available variants are: 'off', 'error', 'warn', 'info', 'debug', 'trace'
Signature: `setLogLevel(level): void`
Parameters:
- level ("error"): 
Returns: void
Functions:
- `setLogLevel(level): void`
Source: web/kaspa/kaspa.d.ts:281

version
Type: function
Section: general
Description: Returns the version of the Rusty Kaspa framework.
Signature: `version(): string`
Returns: string
Functions:
- `version(): string`
Source: web/kaspa/kaspa.d.ts:275

## Message signing

ISignMessage
Type: interface
Section: message signing
Description: Interface declaration for signMessage function arguments.
Signature: `interface ISignMessage { message: string; noAuxRand?: boolean; privateKey: string | PrivateKey; }message: stringnoAuxRand?: booleanprivateKey: string | PrivateKey`
Source: web/kaspa/kaspa.d.ts:2316

IVerifyMessage
Type: interface
Section: message signing
Description: Interface declaration for verifyMessage function arguments.
Signature: `interface IVerifyMessage { message: string; publicKey: string | PublicKey; signature: string; }message: stringpublicKey: string | PublicKeysignature: string`
Source: web/kaspa/kaspa.d.ts:2303

signMessage
Type: function
Section: message signing
Description: Signs a message with the given private key
Signature: `signMessage(value): HexString`
Parameters:
- value (ISignMessage): 
Returns: HexString
Functions:
- `signMessage(value): HexString`
Source: web/kaspa/kaspa.d.ts:79

verifyMessage
Type: function
Section: message signing
Description: Verifies with a public key the signature of the given message
Signature: `verifyMessage(value): boolean`
Parameters:
- value (IVerifyMessage): 
Returns: boolean
Functions:
- `verifyMessage(value): boolean`
Source: web/kaspa/kaspa.d.ts:74

## Mining

PoW
Type: class
Section: mining
Description: Checks if the computed target meets or exceeds the difficulty specified in the template. Return copy of self without private attributes. Return stringified version of self. Can be used for parsing Stratum templates.
Signature: `new PoW(header, timestamp?): PoWcheckWork(nonce): [boolean, bigint]free(): voidtoJSON(): ObjecttoString(): stringfromRaw(pre_pow_hash, timestamp, target_bits?): PoW`
Source: web/kaspa/kaspa.d.ts:5822
Additional Details:
Represents a Kaspa header PoW manager
Hash of the header without timestamp and nonce.
The target based on the provided bits.
Return copy of self without private attributes.
Return stringified version of self.
Can be used for parsing Stratum templates.

calculateTarget
Type: function
Section: mining
Description: Calculates target from difficulty, based on set_difficulty function on https://github.com/tmrlvi/kaspa-miner/blob/bf361d02a46c580f55f46b5dfa773477634a5753/src/client/stratum.rs#L375
Signature: `calculateTarget(difficulty): bigint`
Parameters:
- difficulty (number): 
Returns: bigint
Functions:
- `calculateTarget(difficulty): bigint`
Source: web/kaspa/kaspa.d.ts:51

## Node rpc

SubmitBlockRejectReason
Type: enum
Section: node rpc
Description: The block is invalid. The node is not synced. Route is full.
Signature: `BlockInvalid: "BlockInvalid"IsInIBD: "IsInIBD"RouteIsFull: "RouteIsFull"`
Source: web/kaspa/kaspa.d.ts:1184
Additional Details:
Route is full.

NodeDescriptor
Type: class
Section: node rpc
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new NodeDescriptor(): NodeDescriptorfree(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:5579
Additional Details:
Data structure representing a Node connection endpoint as provided by the Resolver.
The unique identifier of the node.
The URL of the node WebSocket (wRPC URL).
Return stringified version of self.

Resolver
Type: class
Section: node rpc
Description: Creates a new Resolver client with the given configuration supplied as IResolverConfig interface. If not supplied, the default configuration containing a list of community-operated resolvers will be used. Connect to a public Kaspa wRPC endpoint for the given encoding and network identifier supplied via IResolverConnect interface. SeeIResolverConnect, RpcClient Fetches a public Kaspa wRPC endpoint for the given encoding and network identifier. SeeEncoding, NetworkId, Node Fetches a public Kaspa wRPC endpoint URL for the given encoding and network identifier. SeeEncoding, NetworkId Return copy of self without private attributes. Return stringified version of self.
Signature: `new Resolver(args?): Resolverconnect(options): Promisefree(): voidgetNode(encoding, network_id): PromisegetUrl(encoding, network_id): PromisetoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:6060
Additional Details:
Resolver is a client for obtaining public Kaspa wRPC URL. Resolver queries a list of public Kaspa Resolver URLs using HTTP to fetch wRPC endpoints for the given encoding, network identifier and other parameters. It then provides this information to the RpcClient. Each time RpcClient disconnects, it will query the resolver to fetch a new wRPC URL. // using integrated public URLslet rpc = RpcClient({ resolver: new Resolver(), networkId : "mainnet"});// specifying custom resolver URLslet rpc = RpcClient({ resolver: new Resolver({urls: ["",...]}), networkId : "mainnet"}); Copy SeeIResolverConfig, IResolverConnect, RpcClient
Resolver is a client for obtaining public Kaspa wRPC URL. Resolver queries a list of public Kaspa Resolver URLs using HTTP to fetch wRPC endpoints for the given encoding, network identifier and other parameters. It then provides this information to the RpcClient. Each time RpcClient disconnects, it will query the resolver to fetch a new wRPC URL. // using integrated public URLslet rpc = RpcClient({ resolver: new Resolver(), networkId : "mainnet"});// specifying custom resolver URLslet rpc = RpcClient({ resolver: new Resolver({urls: ["",...]}), networkId : "mainnet"}); Copy
SeeIResolverConfig, IResolverConnect, RpcClient
List of public Kaspa Resolver URLs.
Connect to a public Kaspa wRPC endpoint for the given encoding and network identifier supplied via IResolverConnect interface.
SeeIResolverConnect, RpcClient
Fetches a public Kaspa wRPC endpoint for the given encoding and network identifier.
SeeEncoding, NetworkId, Node
Fetches a public Kaspa wRPC endpoint URL for the given encoding and network identifier.
SeeEncoding, NetworkId
Return copy of self without private attributes.
Return stringified version of self.

RpcClient
Type: class
Section: node rpc
Description: Create a new RPC client with optional Encoding and a url. SeeIRpcConfig interface for more details. Adds a peer to the Kaspa node's list of known peers. Returned information: None. SeeIAddPeerRequest, IAddPeerResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Bans a peer from connecting to the Kaspa node for a specified duration. Returned information: None. SeeIBanRequest, IBanResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Unregister a single event listener callback from all events. Connect to the Kaspa RPC server. This function starts a background task that connects and reconnects to the server if the connection is terminated. Use disconnect() to terminate the connection. SeeIConnectOptions interface for more details. Disconnect from the Kaspa RPC server. Estimates the network's current hash rate in hashes per second. Returned information: Estimated network hashes per second. SeeIEstimateNetworkHashesPerSecondRequest, IEstimateNetworkHashesPerSecondResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves the balance of a specific address in the Kaspa BlockDAG. Returned information: Balance of the address. SeeIGetBalanceByAddressRequest, IGetBalanceByAddressResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves balances for multiple addresses in the Kaspa BlockDAG. Returned information: Balances of the addresses. SeeIGetBalancesByAddressesRequest, IGetBalancesByAddressesResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves a specific block from the Kaspa BlockDAG. Returned information: Block information. SeeIGetBlockRequest, IGetBlockResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves the current number of blocks in the Kaspa BlockDAG. This is not a block count, not a "block height" and can not be used for transaction validation. Returned information: Current block count. SeeIGetBlockCountRequest, IGetBlockCountResponse Throwsstring on an RPC error or a server-side error. Provides information about the Directed Acyclic Graph (DAG) structure of the Kaspa BlockDAG. Returned information: Number of blocks in the DAG, number of tips in the DAG, hash of the selected parent block, difficulty of the selected parent block, selected parent block blue score, selected parent block time. SeeIGetBlockDagInfoRequest, IGetBlockDagInfoResponse Throwsstring on an RPC error or a server-side error. Generates a new block template for mining. Returned information: Block template information. SeeIGetBlockTemplateRequest, IGetBlockTemplateResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves multiple blocks from the Kaspa BlockDAG. Returned information: List of block information. SeeIGetBlocksRequest, IGetBlocksResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Returns the total current coin supply of Kaspa network. Returned information: Total coin supply. SeeIGetCoinSupplyRequest, IGetCoinSupplyResponse Throwsstring on an RPC error or a server-side error. Retrieves information about the peers connected to the Kaspa node. Returned information: Peer ID, IP address and port, connection status, protocol version. SeeIGetConnectedPeerInfoRequest, IGetConnectedPeerInfoResponse Throwsstring on an RPC error or a server-side error. Retrieves current number of network connections SeeIGetConnectionsRequest, IGetConnectionsResponse Throwsstring on an RPC error or a server-side error. Checks if block is blue or not. Returned information: Block blueness. SeeIGetCurrentBlockColorRequest, IGetCurrentBlockColorResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves the current network configuration. Returned information: Current network configuration. SeeIGetCurrentNetworkRequest, IGetCurrentNetworkResponse Throwsstring on an RPC error or a server-side error. Retrieves the estimated DAA (Difficulty Adjustment Algorithm) score timestamp estimate. Returned information: DAA score timestamp estimate. SeeIGetDaaScoreTimestampEstimateRequest, IGetDaaScoreTimestampEstimateResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Feerate estimates SeeIGetFeeEstimateRequest, IGetFeeEstimateResponse Throwsstring on an RPC error or a server-side error. Feerate estimates (experimental) SeeIGetFeeEstimateExperimentalRequest, IGetFeeEstimateExperimentalResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves block headers from the Kaspa BlockDAG. Returned information: List of block headers. SeeIGetHeadersRequest, IGetHeadersResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves general information about the Kaspa node. Returned information: Version of the Kaspa node, protocol version, network identifier. This call is primarily used by gRPC clients. For wRPC clients, use RpcClient.getServerInfo. SeeIGetInfoRequest, IGetInfoResponse Throwsstring on an RPC error or a server-side error. Retrieves mempool entries from the Kaspa node's mempool. Returned information: List of mempool entries. SeeIGetMempoolEntriesRequest, IGetMempoolEntriesResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves mempool entries associated with specific addresses. Returned information: List of mempool entries. SeeIGetMempoolEntriesByAddressesRequest, IGetMempoolEntriesByAddressesResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves a specific mempool entry by transaction ID. Returned information: Mempool entry information. SeeIGetMempoolEntryRequest, IGetMempoolEntryResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves various metrics and statistics related to the performance and status of the Kaspa node. Returned information: Memory usage, CPU usage, network activity. SeeIGetMetricsRequest, IGetMetricsResponse Throwsstring on an RPC error or a server-side error. Provides a list of addresses of known peers in the Kaspa network that the node can potentially connect to. Returned information: List of peer addresses. SeeIGetPeerAddressesRequest, IGetPeerAddressesResponse Throwsstring on an RPC error or a server-side error. Retrieves information about the Kaspa server. Returned information: Version of the Kaspa server, protocol version, network identifier. SeeIGetServerInfoRequest, IGetServerInfoResponse Throwsstring on an RPC error or a server-side error. Retrieves the current sink block, which is the block with the highest cumulative difficulty in the Kaspa BlockDAG. Returned information: Sink block hash, sink block height. SeeIGetSinkRequest, IGetSinkResponse Throwsstring on an RPC error or a server-side error. Returns the blue score of the current sink block, indicating the total amount of work that has been done on the main chain leading up to that block. Returned information: Blue score of the sink block. SeeIGetSinkBlueScoreRequest, IGetSinkBlueScoreResponse Throwsstring on an RPC error or a server-side error. Retrieves information about a subnetwork in the Kaspa BlockDAG. Returned information: Subnetwork information. SeeIGetSubnetworkRequest, IGetSubnetworkResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Obtains basic information about the synchronization status of the Kaspa node. Returned information: Syncing status. SeeIGetSyncStatusRequest, IGetSyncStatusResponse Throwsstring on an RPC error or a server-side error. Retrieves unspent transaction outputs (UTXOs) associated with specific addresses. Returned information: List of UTXOs. SeeIGetUtxosByAddressesRequest, IGetUtxosByAddressesResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Retrieves the virtual chain corresponding to a specified block hash. Returned information: Virtual chain information. SeeIGetVirtualChainFromBlockRequest, IGetVirtualChainFromBlockResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Tests the connection and responsiveness of a Kaspa node. Returned information: None. SeeIPingRequest, IPingResponse Throwsstring on an RPC error or a server-side error. Unregister all notification callbacks for all events. Unregister an event listener. This function will remove the callback for the specified event. If the callback is not supplied, all callbacks will be removed for the specified event. SeeRpcClient.addEventListener Resolves a finality conflict in the Kaspa BlockDAG. Returned information: None. SeeIResolveFinalityConflictRequest, IResolveFinalityConflictResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Set the network id for the RPC client. This setting will take effect on the next connection. Set the resolver for the RPC client. This setting will take effect on the next connection. Gracefully shuts down the Kaspa node. Returned information: None. SeeIShutdownRequest, IShutdownResponse Throwsstring on an RPC error or a server-side error. Start background RPC services (automatically started when invoking RpcClient.connect). Stop background RPC services (automatically stopped when invoking RpcClient.disconnect). Submits a block to the Kaspa network. Returned information: None. SeeISubmitBlockRequest, ISubmitBlockResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Submits a transaction to the Kaspa network. Returned information: Submitted Transaction Id. SeeISubmitTransactionRequest, ISubmitTransactionResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Submits an RBF transaction to the Kaspa network. Returned information: Submitted Transaction Id, Transaction that was replaced. SeeISubmitTransactionReplacementRequest, ISubmitTransactionReplacementResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Manage subscription for a block added notification event. Block added notification event is produced when a new block is added to the Kaspa BlockDAG. Manage subscription for a finality conflict notification event. Finality conflict notification event is produced when a finality conflict occurs in the Kaspa BlockDAG. Manage subscription for a finality conflict resolved notification event. Finality conflict resolved notification event is produced when a finality conflict in the Kaspa BlockDAG is resolved. Manage subscription for a new block template notification event. New block template notification event is produced when a new block template is generated for mining in the Kaspa BlockDAG. Manage subscription for a pruning point UTXO set override notification event. Pruning point UTXO set override notification event is produced when the UTXO set override for the pruning point changes in the Kaspa BlockDAG. Manage subscription for a sink blue score changed notification event. Sink blue score changed notification event is produced when the blue score of the sink block changes in the Kaspa BlockDAG. Subscribe for a UTXOs changed notification event. UTXOs changed notification event is produced when the set of unspent transaction outputs (UTXOs) changes in the Kaspa BlockDAG. The event notification will be scoped to the provided list of addresses. Manage subscription for a virtual chain changed notification event. Virtual chain changed notification event is produced when the virtual chain changes in the Kaspa BlockDAG. Manage subscription for a virtual DAA score changed notification event. Virtual DAA score changed notification event is produced when the virtual Difficulty Adjustment Algorithm (DAA) score changes in the Kaspa BlockDAG. Return copy of self without private attributes. Return stringified version of self. Triggers a disconnection on the underlying WebSocket if the WebSocket is in connected state. This is intended for debug purposes only. Can be used to test application reconnection logic. Unbans a previously banned peer, allowing it to connect to the Kaspa node again. Returned information: None. SeeIUnbanRequest, IUnbanResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments. Unsubscribe from UTXOs changed notification event for a specific set of addresses. Manage subscription for a virtual chain changed notification event. Virtual chain changed notification event is produced when the virtual chain changes in the Kaspa BlockDAG. Manage subscription for a virtual DAA score changed notification event. Virtual DAA score changed notification event is produced when the virtual Difficulty Adjustment Algorithm (DAA) score changes in the Kaspa BlockDAG. Constructs an WebSocket RPC URL given the partial URL or an IP, RPC encoding and a network type. Arguments url - Partial URL or an IP address encoding - RPC encoding network_type - Network type
Signature: `new RpcClient(config?): RpcClientaddEventListener(callback): voidaddEventListener(event, callback?): any(eventData): voidaddPeer(request): Promiseban(request): PromiseclearEventListener(callback): voidconnect(args?): Promisedisconnect(): PromiseestimateNetworkHashesPerSecond(request): Promisefree(): voidgetBalanceByAddress(request): PromisegetBalancesByAddresses(request): PromisegetBlock(request): PromisegetBlockCount(request?): PromisegetBlockDagInfo(request?): PromisegetBlockTemplate(request): PromisegetBlocks(request): PromisegetCoinSupply(request?): PromisegetConnectedPeerInfo(request?): PromisegetConnections(request?): PromisegetCurrentBlockColor(request): PromisegetCurrentNetwork(request?): PromisegetDaaScoreTimestampEstimate(request): PromisegetFeeEstimate(request?): PromisegetFeeEstimateExperimental(request): PromisegetHeaders(request): PromisegetInfo(request?): PromisegetMempoolEntries(request): PromisegetMempoolEntriesByAddresses(request): PromisegetMempoolEntry(request): PromisegetMetrics(request?): PromisegetPeerAddresses(request?): PromisegetServerInfo(request?): PromisegetSink(request?): PromisegetSinkBlueScore(request?): PromisegetSubnetwork(request): PromisegetSyncStatus(request?): PromisegetUtxosByAddresses(request): PromisegetVirtualChainFromBlock(request): Promiseping(request?): PromiseremoveAllEventListeners(): voidremoveEventListener(event, callback?): voidresolveFinalityConflict(request): PromisesetNetworkId(network_id): voidsetResolver(resolver): voidshutdown(request?): Promisestart(): Promisestop(): PromisesubmitBlock(request): PromisesubmitTransaction(request): PromisesubmitTransactionReplacement(request): PromisesubscribeBlockAdded(): PromisesubscribeFinalityConflict(): PromisesubscribeFinalityConflictResolved(): PromisesubscribeNewBlockTemplate(): PromisesubscribePruningPointUtxoSetOverride(): PromisesubscribeSinkBlueScoreChanged(): PromisesubscribeUtxosChanged(addresses): PromisesubscribeVirtualChainChanged(include_accepted_transaction_ids): PromisesubscribeVirtualDaaScoreChanged(): PromisetoJSON(): ObjecttoString(): stringtriggerAbort(): voidunban(request): PromiseunsubscribeBlockAdded(): PromiseunsubscribeFinalityConflict(): PromiseunsubscribeFinalityConflictResolved(): PromiseunsubscribeNewBlockTemplate(): PromiseunsubscribePruningPointUtxoSetOverride(): PromiseunsubscribeSinkBlueScoreChanged(): PromiseunsubscribeUtxosChanged(addresses): PromiseunsubscribeVirtualChainChanged(include_accepted_transaction_ids): PromiseunsubscribeVirtualDaaScoreChanged(): PromisedefaultPort(encoding, network): numberparseUrl(url, encoding, network): string`
Source: web/kaspa/kaspa.d.ts:4660
Additional Details:
Kaspa RPC client uses (wRPC) interface to connect directly with Kaspa Node. wRPC supports two types of encodings: borsh (binary, default) and json. There are two ways to connect: Directly to any Kaspa Node or to a community-maintained public node infrastructure using the Resolver class. Connecting to a public node using a resolver let rpc = new RpcClient({ resolver : new Resolver(), networkId : "mainnet",});await rpc.connect(); Copy Connecting to a Kaspa Node directly let rpc = new RpcClient({ // if port is not provided it will default // to the default port for the networkId url : "127.0.0.1", networkId : "mainnet",}); Copy Example usage // Create a new RPC client with a URLlet rpc = new RpcClient({ url : "wss://" });// Create a new RPC client with a resolver// (networkId is required when using a resolver)let rpc = new RpcClient({ resolver : new Resolver(), networkId : "mainnet",});rpc.addEventListener("connect", async (event) => { console.log("Connected to", rpc.url); await rpc.subscribeDaaScore();});rpc.addEventListener("disconnect", (event) => { console.log("Disconnected from", rpc.url);});try { await rpc.connect();} catch(err) { console.log("Error connecting:", err);} Copy You can register event listeners to receive notifications from the RPC client using RpcClient.addEventListener and RpcClient.removeEventListener functions. IMPORTANT: If RPC is disconnected, upon reconnection you do not need to re-register event listeners, but your have to re-subscribe for Kaspa node notifications: rpc.addEventListener("connect", async (event) => { console.log("Connected to", rpc.url); // re-subscribe each time we connect await rpc.subscribeDaaScore(); // ... perform wallet address subscriptions}); Copy If using NodeJS, it is important that RpcClient.disconnect is called before the process exits to ensure that the WebSocket connection is properly closed. Failure to do this will prevent the process from exiting.
SeeIRpcConfig interface for more details.
The current protocol encoding.
The current connection status of the RPC client.
Optional: Resolver node id.
Current rpc resolver
The current URL of the RPC client.
Adds a peer to the Kaspa node's list of known peers. Returned information: None.
SeeIAddPeerRequest, IAddPeerResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Bans a peer from connecting to the Kaspa node for a specified duration. Returned information: None.
SeeIBanRequest, IBanResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Unregister a single event listener callback from all events.
Connect to the Kaspa RPC server. This function starts a background task that connects and reconnects to the server if the connection is terminated. Use disconnect() to terminate the connection.
SeeIConnectOptions interface for more details.
Disconnect from the Kaspa RPC server.
Estimates the network's current hash rate in hashes per second. Returned information: Estimated network hashes per second.
SeeIEstimateNetworkHashesPerSecondRequest, IEstimateNetworkHashesPerSecondResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves the balance of a specific address in the Kaspa BlockDAG. Returned information: Balance of the address.
SeeIGetBalanceByAddressRequest, IGetBalanceByAddressResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves balances for multiple addresses in the Kaspa BlockDAG. Returned information: Balances of the addresses.
SeeIGetBalancesByAddressesRequest, IGetBalancesByAddressesResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves a specific block from the Kaspa BlockDAG. Returned information: Block information.
SeeIGetBlockRequest, IGetBlockResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves the current number of blocks in the Kaspa BlockDAG. This is not a block count, not a "block height" and can not be used for transaction validation. Returned information: Current block count.
SeeIGetBlockCountRequest, IGetBlockCountResponse Throwsstring on an RPC error or a server-side error.
Provides information about the Directed Acyclic Graph (DAG) structure of the Kaspa BlockDAG. Returned information: Number of blocks in the DAG, number of tips in the DAG, hash of the selected parent block, difficulty of the selected parent block, selected parent block blue score, selected parent block time.
SeeIGetBlockDagInfoRequest, IGetBlockDagInfoResponse Throwsstring on an RPC error or a server-side error.
Generates a new block template for mining. Returned information: Block template information.
SeeIGetBlockTemplateRequest, IGetBlockTemplateResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves multiple blocks from the Kaspa BlockDAG. Returned information: List of block information.
SeeIGetBlocksRequest, IGetBlocksResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Returns the total current coin supply of Kaspa network. Returned information: Total coin supply.
SeeIGetCoinSupplyRequest, IGetCoinSupplyResponse Throwsstring on an RPC error or a server-side error.
Retrieves information about the peers connected to the Kaspa node. Returned information: Peer ID, IP address and port, connection status, protocol version.
SeeIGetConnectedPeerInfoRequest, IGetConnectedPeerInfoResponse Throwsstring on an RPC error or a server-side error.
Retrieves current number of network connections
SeeIGetConnectionsRequest, IGetConnectionsResponse Throwsstring on an RPC error or a server-side error.
Checks if block is blue or not. Returned information: Block blueness.
SeeIGetCurrentBlockColorRequest, IGetCurrentBlockColorResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves the current network configuration. Returned information: Current network configuration.
SeeIGetCurrentNetworkRequest, IGetCurrentNetworkResponse Throwsstring on an RPC error or a server-side error.
Retrieves the estimated DAA (Difficulty Adjustment Algorithm) score timestamp estimate. Returned information: DAA score timestamp estimate.
SeeIGetDaaScoreTimestampEstimateRequest, IGetDaaScoreTimestampEstimateResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Feerate estimates
SeeIGetFeeEstimateRequest, IGetFeeEstimateResponse Throwsstring on an RPC error or a server-side error.
Feerate estimates (experimental)
SeeIGetFeeEstimateExperimentalRequest, IGetFeeEstimateExperimentalResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves block headers from the Kaspa BlockDAG. Returned information: List of block headers.
SeeIGetHeadersRequest, IGetHeadersResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves general information about the Kaspa node. Returned information: Version of the Kaspa node, protocol version, network identifier. This call is primarily used by gRPC clients. For wRPC clients, use RpcClient.getServerInfo.
SeeIGetInfoRequest, IGetInfoResponse Throwsstring on an RPC error or a server-side error.
Retrieves mempool entries from the Kaspa node's mempool. Returned information: List of mempool entries.
SeeIGetMempoolEntriesRequest, IGetMempoolEntriesResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves mempool entries associated with specific addresses. Returned information: List of mempool entries.
SeeIGetMempoolEntriesByAddressesRequest, IGetMempoolEntriesByAddressesResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves a specific mempool entry by transaction ID. Returned information: Mempool entry information.
SeeIGetMempoolEntryRequest, IGetMempoolEntryResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves various metrics and statistics related to the performance and status of the Kaspa node. Returned information: Memory usage, CPU usage, network activity.
SeeIGetMetricsRequest, IGetMetricsResponse Throwsstring on an RPC error or a server-side error.
Provides a list of addresses of known peers in the Kaspa network that the node can potentially connect to. Returned information: List of peer addresses.
SeeIGetPeerAddressesRequest, IGetPeerAddressesResponse Throwsstring on an RPC error or a server-side error.
Retrieves information about the Kaspa server. Returned information: Version of the Kaspa server, protocol version, network identifier.
SeeIGetServerInfoRequest, IGetServerInfoResponse Throwsstring on an RPC error or a server-side error.
Retrieves the current sink block, which is the block with the highest cumulative difficulty in the Kaspa BlockDAG. Returned information: Sink block hash, sink block height.
SeeIGetSinkRequest, IGetSinkResponse Throwsstring on an RPC error or a server-side error.
Returns the blue score of the current sink block, indicating the total amount of work that has been done on the main chain leading up to that block. Returned information: Blue score of the sink block.
SeeIGetSinkBlueScoreRequest, IGetSinkBlueScoreResponse Throwsstring on an RPC error or a server-side error.
Retrieves information about a subnetwork in the Kaspa BlockDAG. Returned information: Subnetwork information.
SeeIGetSubnetworkRequest, IGetSubnetworkResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Obtains basic information about the synchronization status of the Kaspa node. Returned information: Syncing status.
SeeIGetSyncStatusRequest, IGetSyncStatusResponse Throwsstring on an RPC error or a server-side error.
Retrieves unspent transaction outputs (UTXOs) associated with specific addresses. Returned information: List of UTXOs.
SeeIGetUtxosByAddressesRequest, IGetUtxosByAddressesResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Retrieves the virtual chain corresponding to a specified block hash. Returned information: Virtual chain information.
SeeIGetVirtualChainFromBlockRequest, IGetVirtualChainFromBlockResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Tests the connection and responsiveness of a Kaspa node. Returned information: None.
SeeIPingRequest, IPingResponse Throwsstring on an RPC error or a server-side error.
Unregister all notification callbacks for all events.
Unregister an event listener. This function will remove the callback for the specified event. If the callback is not supplied, all callbacks will be removed for the specified event.
SeeRpcClient.addEventListener
Resolves a finality conflict in the Kaspa BlockDAG. Returned information: None.
SeeIResolveFinalityConflictRequest, IResolveFinalityConflictResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Set the network id for the RPC client. This setting will take effect on the next connection.
Set the resolver for the RPC client. This setting will take effect on the next connection.
Gracefully shuts down the Kaspa node. Returned information: None.
SeeIShutdownRequest, IShutdownResponse Throwsstring on an RPC error or a server-side error.
Start background RPC services (automatically started when invoking RpcClient.connect).
Stop background RPC services (automatically stopped when invoking RpcClient.disconnect).
Submits a block to the Kaspa network. Returned information: None.
SeeISubmitBlockRequest, ISubmitBlockResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Submits a transaction to the Kaspa network. Returned information: Submitted Transaction Id.
SeeISubmitTransactionRequest, ISubmitTransactionResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Submits an RBF transaction to the Kaspa network. Returned information: Submitted Transaction Id, Transaction that was replaced.
SeeISubmitTransactionReplacementRequest, ISubmitTransactionReplacementResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Manage subscription for a block added notification event. Block added notification event is produced when a new block is added to the Kaspa BlockDAG.
Manage subscription for a finality conflict notification event. Finality conflict notification event is produced when a finality conflict occurs in the Kaspa BlockDAG.
Manage subscription for a finality conflict resolved notification event. Finality conflict resolved notification event is produced when a finality conflict in the Kaspa BlockDAG is resolved.
Manage subscription for a new block template notification event. New block template notification event is produced when a new block template is generated for mining in the Kaspa BlockDAG.
Manage subscription for a pruning point UTXO set override notification event. Pruning point UTXO set override notification event is produced when the UTXO set override for the pruning point changes in the Kaspa BlockDAG.
Manage subscription for a sink blue score changed notification event. Sink blue score changed notification event is produced when the blue score of the sink block changes in the Kaspa BlockDAG.
Subscribe for a UTXOs changed notification event. UTXOs changed notification event is produced when the set of unspent transaction outputs (UTXOs) changes in the Kaspa BlockDAG. The event notification will be scoped to the provided list of addresses.
Manage subscription for a virtual chain changed notification event. Virtual chain changed notification event is produced when the virtual chain changes in the Kaspa BlockDAG.
Manage subscription for a virtual DAA score changed notification event. Virtual DAA score changed notification event is produced when the virtual Difficulty Adjustment Algorithm (DAA) score changes in the Kaspa BlockDAG.
Return copy of self without private attributes.
Return stringified version of self.
Triggers a disconnection on the underlying WebSocket if the WebSocket is in connected state. This is intended for debug purposes only. Can be used to test application reconnection logic.
Unbans a previously banned peer, allowing it to connect to the Kaspa node again. Returned information: None.
SeeIUnbanRequest, IUnbanResponse Throwsstring on an RPC error, a server-side error or when supplying incorrect arguments.
Unsubscribe from UTXOs changed notification event for a specific set of addresses.
Constructs an WebSocket RPC URL given the partial URL or an IP, RPC encoding and a network type. Arguments url - Partial URL or an IP address encoding - RPC encoding network_type - Network type

IAcceptedTransactionIds
Type: interface
Section: node rpc
Description: Accepted transaction IDs.
Signature: `interface IAcceptedTransactionIds { acceptedTransactionIds: string[]; acceptingBlockHash: string; }acceptedTransactionIds: string[]acceptingBlockHash: string`
Source: web/kaspa/kaspa.d.ts:1978

IAddPeerRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.addPeer RPC method.
Signature: `interface IAddPeerRequest { isPermanent: boolean; peerAddress: INetworkAddress; }isPermanent: booleanpeerAddress: INetworkAddress`
Source: web/kaspa/kaspa.d.ts:1690

IAddPeerResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.addPeer RPC method.
Signature: `interface IAddPeerResponse {}`
Source: web/kaspa/kaspa.d.ts:1680

IBalancesByAddressesEntry
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getBalancesByAddresses RPC method.
Signature: `interface IBalancesByAddressesEntry { address: Address; balance: bigint; }address: Addressbalance: bigint`
Source: web/kaspa/kaspa.d.ts:1579

IBanRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.ban RPC method. IPv4 or IPv6 address to ban.
Signature: `interface IBanRequest { ip: string; }ip: string`
Source: web/kaspa/kaspa.d.ts:1665
Additional Details:
IPv4 or IPv6 address to ban.

IBanResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.ban RPC method.
Signature: `interface IBanResponse {}`
Source: web/kaspa/kaspa.d.ts:1655

IBlockAdded
Type: interface
Section: node rpc
Description: Block added notification event is produced when a new block is added to the Kaspa BlockDAG.
Signature: `interface IBlockAdded { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:4808

IBlockVerboseData
Type: interface
Section: node rpc
Description: Interface defining the structure of a block verbose data.
Signature: `interface IBlockVerboseData { blueScore: number; childrenHashes: string[]; difficulty: number; hash: string; isChainBlock: boolean; isHeaderOnly: boolean; mergeSetBluesHashes: string[]; mergeSetRedsHashes: string[]; selectedParentHash: string; transactionIds: string[]; }blueScore: numberchildrenHashes: string[]difficulty: numberhash: stringisChainBlock: booleanisHeaderOnly: booleanmergeSetBluesHashes: string[]mergeSetRedsHashes: string[]selectedParentHash: stringtransactionIds: string[]`
Source: web/kaspa/kaspa.d.ts:2014

IEstimateNetworkHashesPerSecondRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.estimateNetworkHashesPerSecond RPC method.
Signature: `interface IEstimateNetworkHashesPerSecondRequest { startHash?: string; windowSize: number; }startHash?: stringwindowSize: number`
Source: web/kaspa/kaspa.d.ts:1642

IEstimateNetworkHashesPerSecondResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.estimateNetworkHashesPerSecond RPC method.
Signature: `interface IEstimateNetworkHashesPerSecondResponse { networkHashesPerSecond: bigint; }networkHashesPerSecond: bigint`
Source: web/kaspa/kaspa.d.ts:1632

IFeeEstimate
Type: interface
Section: node rpc
Description: An array of low priority feerate values. The first value of this vector is guaranteed to exist and provide an estimation for sub-hour DAG inclusion. A vector of normal priority feerate values. The first value of this vector is guaranteed to exist and provide an estimation for sub-minute DAG inclusion. All other values will have shorter estimation times than all low_bucket values. Therefor by chaining [priority] | normal | low and interpolating between them, one can compose a complete feerate function on the client side. The API makes an effort to sample enough "interesting" points on the feerate-to-time curve, so that the interpolation is meaningful. Top-priority feerate bucket. Provides an estimation of the feerate required for sub-second DAG inclusion. Note: for all buckets, feerate values represent fee/mass of a transaction in sompi/gram units. Given a feerate value recommendation, calculate the required fee by taking the transaction mass and multiplying it by feerate: fee = feerate * mass(tx)
Signature: `interface IFeeEstimate { lowBuckets: IFeerateBucket[]; normalBuckets: IFeerateBucket[]; priorityBucket: IFeerateBucket; }lowBuckets: IFeerateBucket[]normalBuckets: IFeerateBucket[]priorityBucket: IFeerateBucket`
Source: web/kaspa/kaspa.d.ts:1047
Additional Details:
A vector of normal priority feerate values. The first value of this vector is guaranteed to exist and provide an estimation for sub-minute DAG inclusion. All other values will have shorter estimation times than all low_bucket values. Therefor by chaining [priority] | normal | low and interpolating between them, one can compose a complete feerate function on the client side. The API makes an effort to sample enough "interesting" points on the feerate-to-time curve, so that the interpolation is meaningful.
Top-priority feerate bucket. Provides an estimation of the feerate required for sub-second DAG inclusion. Note: for all buckets, feerate values represent fee/mass of a transaction in sompi/gram units. Given a feerate value recommendation, calculate the required fee by taking the transaction mass and multiplying it by feerate: fee = feerate * mass(tx)

IFeeEstimateVerboseExperimentalData
Type: interface
Section: node rpc
Signature: `interface IFeeEstimateVerboseExperimentalData { mempoolReadyTransactionsCount: bigint; mempoolReadyTransactionsTotalMass: bigint; networkMassPerSecond: bigint; nextBlockTemplateFeerateMax: number; nextBlockTemplateFeerateMedian: number; nextBlockTemplateFeerateMin: number; }mempoolReadyTransactionsCount: bigintmempoolReadyTransactionsTotalMass: bigintnetworkMassPerSecond: bigintnextBlockTemplateFeerateMax: numbernextBlockTemplateFeerateMedian: numbernextBlockTemplateFeerateMin: number`
Source: web/kaspa/kaspa.d.ts:1009

IFeerateBucket
Type: interface
Section: node rpc
Description: The estimated inclusion time for a transaction with fee/mass = feerate The fee/mass ratio estimated to be required for inclusion time
Signature: `interface IFeerateBucket { estimatedSeconds: number; feerate: number; }estimatedSeconds: numberfeerate: number`
Source: web/kaspa/kaspa.d.ts:1080
Additional Details:
The fee/mass ratio estimated to be required for inclusion time

IFinalityConflict
Type: interface
Section: node rpc
Description: Finality conflict notification event is produced when a finality conflict occurs in the Kaspa BlockDAG.
Signature: `interface IFinalityConflict { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:4784

IFinalityConflictResolved
Type: interface
Section: node rpc
Description: Finality conflict resolved notification event is produced when a finality conflict in the Kaspa BlockDAG is resolved.
Signature: `interface IFinalityConflictResolved { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:4772

IGetBalanceByAddressRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getBalanceByAddress RPC method.
Signature: `interface IGetBalanceByAddressRequest { address: string | Address; }address: string | Address`
Source: web/kaspa/kaspa.d.ts:1622

IGetBalanceByAddressResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getBalanceByAddress RPC method.
Signature: `interface IGetBalanceByAddressResponse { balance: bigint; }balance: bigint`
Source: web/kaspa/kaspa.d.ts:1612

IGetBalancesByAddressesRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getBalancesByAddresses RPC method.
Signature: `interface IGetBalancesByAddressesRequest { addresses: string[] | Address[]; }addresses: string[] | Address[]`
Source: web/kaspa/kaspa.d.ts:1600

IGetBalancesByAddressesResponse
Type: interface
Section: node rpc
Signature: `interface IGetBalancesByAddressesResponse { entries: IBalancesByAddressesEntry[]; }entries: IBalancesByAddressesEntry[]`
Source: web/kaspa/kaspa.d.ts:1588

IGetBlockCountRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getBlockCount RPC method.
Signature: `interface IGetBlockCountRequest {}`
Source: web/kaspa/kaspa.d.ts:1949

IGetBlockCountResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getBlockCount RPC method.
Signature: `interface IGetBlockCountResponse { blockCount: bigint; headerCount: bigint; }blockCount: bigintheaderCount: bigint`
Source: web/kaspa/kaspa.d.ts:1938

IGetBlockDagInfoRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getBlockDagInfo RPC method.
Signature: `interface IGetBlockDagInfoRequest {}`
Source: web/kaspa/kaspa.d.ts:1930

IGetBlockDagInfoResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getBlockDagInfo RPC method.
Signature: `interface IGetBlockDagInfoResponse { blockCount: bigint; difficulty: number; headerCount: bigint; network: string; pastMedianTime: bigint; pruningPointHash: string; sink: string; tipHashes: string[]; virtualDaaScore: bigint; virtualParentHashes: string[]; }blockCount: bigintdifficulty: numberheaderCount: bigintnetwork: stringpastMedianTime: bigintpruningPointHash: stringsink: stringtipHashes: string[]virtualDaaScore: bigintvirtualParentHashes: string[]`
Source: web/kaspa/kaspa.d.ts:1911

IGetBlockRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getBlock RPC method.
Signature: `interface IGetBlockRequest { hash: string; includeTransactions: boolean; }hash: stringincludeTransactions: boolean`
Source: web/kaspa/kaspa.d.ts:1566

IGetBlockResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getBlock RPC method.
Signature: `interface IGetBlockResponse { block: IBlock; }block: IBlock`
Source: web/kaspa/kaspa.d.ts:1554

IGetBlockTemplateRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getBlockTemplate RPC method. extraData can contain a user-supplied plain text or a byte array represented by Uint8array.
Signature: `interface IGetBlockTemplateRequest { extraData?: string | Uint8Array; payAddress: string | Address; }extraData?: string | Uint8ArraypayAddress: string | Address`
Source: web/kaspa/kaspa.d.ts:1511
Additional Details:
extraData can contain a user-supplied plain text or a byte array represented by Uint8array.

IGetBlockTemplateResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getBlockTemplate RPC method.
Signature: `interface IGetBlockTemplateResponse { block: IRawBlock; }block: IRawBlock`
Source: web/kaspa/kaspa.d.ts:1499

IGetBlocksRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getBlocks RPC method.
Signature: `interface IGetBlocksRequest { includeBlocks: boolean; includeTransactions: boolean; lowHash?: string; }includeBlocks: booleanincludeTransactions: booleanlowHash?: string`
Source: web/kaspa/kaspa.d.ts:1540

IGetBlocksResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getBlocks RPC method.
Signature: `interface IGetBlocksResponse { blockHashes: string[]; blocks: IBlock[]; }blockHashes: string[]blocks: IBlock[]`
Source: web/kaspa/kaspa.d.ts:1527

IGetCoinSupplyRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getCoinSupply RPC method.
Signature: `interface IGetCoinSupplyRequest {}`
Source: web/kaspa/kaspa.d.ts:1903

IGetCoinSupplyResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getCoinSupply RPC method.
Signature: `interface IGetCoinSupplyResponse { circulatingSompi: bigint; maxSompi: bigint; }circulatingSompi: bigintmaxSompi: bigint`
Source: web/kaspa/kaspa.d.ts:1892

IGetConnectedPeerInfoRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getConnectedPeerInfo RPC method.
Signature: `interface IGetConnectedPeerInfoRequest {}`
Source: web/kaspa/kaspa.d.ts:1884

IGetConnectedPeerInfoResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getConnectedPeerInfo RPC method.
Signature: `interface IGetConnectedPeerInfoResponse { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:1874

IGetConnectionsRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getConnections RPC method.
Signature: `interface IGetConnectionsRequest {}`
Source: web/kaspa/kaspa.d.ts:1804

IGetConnectionsResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getConnections RPC method.
Signature: `interface IGetConnectionsResponse { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:1794

IGetCurrentBlockColorRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getCurrentBlockColor RPC method.
Signature: `interface IGetCurrentBlockColorRequest { hash: string; }hash: string`
Source: web/kaspa/kaspa.d.ts:1487

IGetCurrentBlockColorResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getCurrentBlockColor RPC method.
Signature: `interface IGetCurrentBlockColorResponse { blue: boolean; }blue: boolean`
Source: web/kaspa/kaspa.d.ts:1475

IGetCurrentNetworkRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getCurrentNetwork RPC method.
Signature: `interface IGetCurrentNetworkRequest {}`
Source: web/kaspa/kaspa.d.ts:1441

IGetCurrentNetworkResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getCurrentNetwork RPC method.
Signature: `interface IGetCurrentNetworkResponse { network: string; }network: string`
Source: web/kaspa/kaspa.d.ts:1429

IGetDaaScoreTimestampEstimateRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getDaaScoreTimestampEstimate RPC method.
Signature: `interface IGetDaaScoreTimestampEstimateRequest { daaScores: bigint[]; }daaScores: bigint[]`
Source: web/kaspa/kaspa.d.ts:1463

IGetDaaScoreTimestampEstimateResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getDaaScoreTimestampEstimate RPC method.
Signature: `interface IGetDaaScoreTimestampEstimateResponse { timestamps: bigint[]; }timestamps: bigint[]`
Source: web/kaspa/kaspa.d.ts:1451

IGetFeeEstimateExperimentalRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getFeeEstimateExperimental RPC method. Get fee estimate from the node.
Signature: `interface IGetFeeEstimateExperimentalRequest {}`
Source: web/kaspa/kaspa.d.ts:1000

IGetFeeEstimateExperimentalResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getFeeEstimateExperimental RPC method.
Signature: `interface IGetFeeEstimateExperimentalResponse { estimate: IFeeEstimate; verbose?: IFeeEstimateVerboseExperimentalData; }estimate: IFeeEstimateverbose?: IFeeEstimateVerboseExperimentalData`
Source: web/kaspa/kaspa.d.ts:987

IGetFeeEstimateRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getFeeEstimate RPC method. Get fee estimate from the node.
Signature: `interface IGetFeeEstimateRequest {}`
Source: web/kaspa/kaspa.d.ts:1038

IGetFeeEstimateResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getFeeEstimate RPC method.
Signature: `interface IGetFeeEstimateResponse { estimate: IFeeEstimate; }estimate: IFeeEstimate`
Source: web/kaspa/kaspa.d.ts:1026

IGetHeadersRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getHeaders RPC method.
Signature: `interface IGetHeadersRequest { isAscending: boolean; limit: bigint; startHash: string; }isAscending: booleanlimit: bigintstartHash: string`
Source: web/kaspa/kaspa.d.ts:1415

IGetHeadersResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getHeaders RPC method.
Signature: `interface IGetHeadersResponse { headers: IHeader[]; }headers: IHeader[]`
Source: web/kaspa/kaspa.d.ts:1403

IGetInfoRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getInfo RPC method.
Signature: `interface IGetInfoRequest {}`
Source: web/kaspa/kaspa.d.ts:1866

IGetInfoResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getInfo RPC method. GRPC ONLY GRPC ONLY
Signature: `interface IGetInfoResponse { hasMessageId: boolean; hasNotifyCommand: boolean; isSynced: boolean; isUtxoIndexed: boolean; mempoolSize: bigint; p2pId: string; serverVersion: string; }hasMessageId: booleanhasNotifyCommand: booleanisSynced: booleanisUtxoIndexed: booleanmempoolSize: bigintp2pId: stringserverVersion: string`
Source: web/kaspa/kaspa.d.ts:1848

IGetMempoolEntriesByAddressesRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getMempoolEntriesByAddresses RPC method.
Signature: `interface IGetMempoolEntriesByAddressesRequest { addresses: string[] | Address[]; filterTransactionPool?: boolean; includeOrphanPool?: boolean; }addresses: string[] | Address[]filterTransactionPool?: booleanincludeOrphanPool?: boolean`
Source: web/kaspa/kaspa.d.ts:1364

IGetMempoolEntriesByAddressesResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getMempoolEntriesByAddresses RPC method.
Signature: `interface IGetMempoolEntriesByAddressesResponse { entries: IMempoolEntry[]; }entries: IMempoolEntry[]`
Source: web/kaspa/kaspa.d.ts:1352

IGetMempoolEntriesRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getMempoolEntries RPC method.
Signature: `interface IGetMempoolEntriesRequest { filterTransactionPool?: boolean; includeOrphanPool?: boolean; }filterTransactionPool?: booleanincludeOrphanPool?: boolean`
Source: web/kaspa/kaspa.d.ts:1390

IGetMempoolEntriesResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getMempoolEntries RPC method.
Signature: `interface IGetMempoolEntriesResponse { mempoolEntries: IMempoolEntry[]; }mempoolEntries: IMempoolEntry[]`
Source: web/kaspa/kaspa.d.ts:1378

IGetMempoolEntryRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getMempoolEntry RPC method.
Signature: `interface IGetMempoolEntryRequest { filterTransactionPool?: boolean; includeOrphanPool?: boolean; transactionId: string; }filterTransactionPool?: booleanincludeOrphanPool?: booleantransactionId: string`
Source: web/kaspa/kaspa.d.ts:1338

IGetMempoolEntryResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getMempoolEntry RPC method.
Signature: `interface IGetMempoolEntryResponse { mempoolEntry: IMempoolEntry; }mempoolEntry: IMempoolEntry`
Source: web/kaspa/kaspa.d.ts:1326

IGetMetricsRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getMetrics RPC method.
Signature: `interface IGetMetricsRequest {}`
Source: web/kaspa/kaspa.d.ts:1822

IGetMetricsResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getMetrics RPC method.
Signature: `interface IGetMetricsResponse { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:1812

IGetPeerAddressesRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getPeerAddresses RPC method.
Signature: `interface IGetPeerAddressesRequest {}`
Source: web/kaspa/kaspa.d.ts:1840

IGetPeerAddressesResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getPeerAddresses RPC method.
Signature: `interface IGetPeerAddressesResponse { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:1830

IGetServerInfoRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getServerInfo RPC method.
Signature: `interface IGetServerInfoRequest {}`
Source: web/kaspa/kaspa.d.ts:1734

IGetServerInfoResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getServerInfo RPC method.
Signature: `interface IGetServerInfoResponse { hasUtxoIndex: boolean; isSynced: boolean; networkId: string; rpcApiVersion: number[]; serverVersion: string; virtualDaaScore: bigint; }hasUtxoIndex: booleanisSynced: booleannetworkId: stringrpcApiVersion: number[]serverVersion: stringvirtualDaaScore: bigint`
Source: web/kaspa/kaspa.d.ts:1719

IGetSinkBlueScoreRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getSinkBlueScore RPC method.
Signature: `interface IGetSinkBlueScoreRequest {}`
Source: web/kaspa/kaspa.d.ts:1768

IGetSinkBlueScoreResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getSinkBlueScore RPC method.
Signature: `interface IGetSinkBlueScoreResponse { blueScore: bigint; }blueScore: bigint`
Source: web/kaspa/kaspa.d.ts:1758

IGetSinkRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getSink RPC method.
Signature: `interface IGetSinkRequest {}`
Source: web/kaspa/kaspa.d.ts:1786

IGetSinkResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getSink RPC method.
Signature: `interface IGetSinkResponse { sink: string; }sink: string`
Source: web/kaspa/kaspa.d.ts:1776

IGetSubnetworkRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getSubnetwork RPC method.
Signature: `interface IGetSubnetworkRequest { subnetworkId: string; }subnetworkId: string`
Source: web/kaspa/kaspa.d.ts:1314

IGetSubnetworkResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getSubnetwork RPC method.
Signature: `interface IGetSubnetworkResponse { gasLimit: bigint; }gasLimit: bigint`
Source: web/kaspa/kaspa.d.ts:1302

IGetSyncStatusRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getSyncStatus RPC method.
Signature: `interface IGetSyncStatusRequest {}`
Source: web/kaspa/kaspa.d.ts:1711

IGetSyncStatusResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getSyncStatus RPC method.
Signature: `interface IGetSyncStatusResponse { isSynced: boolean; }isSynced: boolean`
Source: web/kaspa/kaspa.d.ts:1701

IGetUtxosByAddressesRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getUtxosByAddresses RPC method.
Signature: `interface IGetUtxosByAddressesRequest { addresses: string[] | Address[]; }addresses: string[] | Address[]`
Source: web/kaspa/kaspa.d.ts:1290

IGetUtxosByAddressesResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getUtxosByAddresses RPC method.
Signature: `interface IGetUtxosByAddressesResponse { entries: UtxoEntryReference[]; }entries: UtxoEntryReference[]`
Source: web/kaspa/kaspa.d.ts:1278

IGetVirtualChainFromBlockRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.getVirtualChainFromBlock RPC method.
Signature: `interface IGetVirtualChainFromBlockRequest { includeAcceptedTransactionIds: boolean; startHash: string; }includeAcceptedTransactionIds: booleanstartHash: string`
Source: web/kaspa/kaspa.d.ts:1265

IGetVirtualChainFromBlockResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.getVirtualChainFromBlock RPC method.
Signature: `interface IGetVirtualChainFromBlockResponse { acceptedTransactionIds: IAcceptedTransactionIds[]; addedChainBlockHashes: string[]; removedChainBlockHashes: string[]; }acceptedTransactionIds: IAcceptedTransactionIds[]addedChainBlockHashes: string[]removedChainBlockHashes: string[]`
Source: web/kaspa/kaspa.d.ts:1251

IMempoolEntry
Type: interface
Section: node rpc
Description: Mempool entry.
Signature: `interface IMempoolEntry { fee: bigint; isOrphan: boolean; transaction: ITransaction; }fee: bigintisOrphan: booleantransaction: ITransaction`
Source: web/kaspa/kaspa.d.ts:1990

INewBlockTemplate
Type: interface
Section: node rpc
Description: New block template notification event is produced when a new block template is generated for mining in the Kaspa BlockDAG.
Signature: `interface INewBlockTemplate { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:4710

IPingRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.ping RPC method.
Signature: `interface IPingRequest { message?: string; }message?: string`
Source: web/kaspa/kaspa.d.ts:1967

IPingResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.ping RPC method.
Signature: `interface IPingResponse { message?: string; }message?: string`
Source: web/kaspa/kaspa.d.ts:1957

IPruningPointUtxoSetOverride
Type: interface
Section: node rpc
Description: Pruning point UTXO set override notification event is produced when the UTXO set override for the pruning point changes in the Kaspa BlockDAG.
Signature: `interface IPruningPointUtxoSetOverride { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:4722

IResolveFinalityConflictRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.resolveFinalityConflict RPC method.
Signature: `interface IResolveFinalityConflictRequest { finalityBlockHash: string; }finalityBlockHash: string`
Source: web/kaspa/kaspa.d.ts:1239

IResolveFinalityConflictResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.resolveFinalityConflict RPC method.
Signature: `interface IResolveFinalityConflictResponse {}`
Source: web/kaspa/kaspa.d.ts:1229

IResolverConfig
Type: interface
Section: node rpc
Description: RPC Resolver configuration options Use strict TLS for RPC connections. If not set or false (default), the resolver will provide the best available connection regardless of whether this connection supports TLS or not. If set to true, the resolver will only provide TLS-enabled connections. This setting is ignored in the browser environment when the browser navigator location is https. In which case the resolver will always use TLS-enabled connections. Optional URLs for one or multiple resolvers.
Signature: `interface IResolverConfig { tls?: boolean; urls?: string[]; }tls?: booleanurls?: string[]`
Source: web/kaspa/kaspa.d.ts:4922
Additional Details:
Use strict TLS for RPC connections. If not set or false (default), the resolver will provide the best available connection regardless of whether this connection supports TLS or not. If set to true, the resolver will only provide TLS-enabled connections. This setting is ignored in the browser environment when the browser navigator location is https. In which case the resolver will always use TLS-enabled connections.
Optional URLs for one or multiple resolvers.

IResolverConnect
Type: interface
Section: node rpc
Description: RPC Resolver connection options RPC encoding: borsh (default) or json Network identifier: mainnet or testnet-11 etc.
Signature: `interface IResolverConnect { encoding?: string | Encoding; networkId?: string | NetworkId; }encoding?: string | EncodingnetworkId?: string | NetworkId`
Source: web/kaspa/kaspa.d.ts:4904
Additional Details:
Network identifier: mainnet or testnet-11 etc.

IRpcConfig
Type: interface
Section: node rpc
Description: RPC client configuration options RPC encoding: borsh or json (default is borsh) Network identifier: mainnet, testnet-10 etc. networkId is required when using a resolver. An instance of the Resolver class to use for an automatic public node lookup. If supplying a resolver, the url property is ignored. URL for wRPC node endpoint
Signature: `interface IRpcConfig { encoding?: Encoding; networkId?: string | NetworkId; resolver?: Resolver; url?: string; }encoding?: EncodingnetworkId?: string | NetworkIdresolver?: Resolverurl?: string`
Source: web/kaspa/kaspa.d.ts:4681
Additional Details:
RPC encoding: borsh or json (default is borsh)
Network identifier: mainnet, testnet-10 etc. networkId is required when using a resolver.
An instance of the Resolver class to use for an automatic public node lookup. If supplying a resolver, the url property is ignored.
URL for wRPC node endpoint

IShutdownRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.shutdown RPC method.
Signature: `interface IShutdownRequest {}`
Source: web/kaspa/kaspa.d.ts:1750

IShutdownResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.shutdown RPC method.
Signature: `interface IShutdownResponse {}`
Source: web/kaspa/kaspa.d.ts:1742

ISinkBlueScoreChanged
Type: interface
Section: node rpc
Description: Sink blue score changed notification event is produced when the blue score of the sink block changes in the Kaspa BlockDAG.
Signature: `interface ISinkBlueScoreChanged { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:4746

ISubmitBlockReport
Type: interface
Section: node rpc
Signature: `interface ISubmitBlockReport { reason?: SubmitBlockRejectReason; type: "success" | "reject"; }reason?: SubmitBlockRejectReasontype: "success" | "reject"`
Source: web/kaspa/kaspa.d.ts:1203

ISubmitBlockRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.submitBlock RPC method.
Signature: `interface ISubmitBlockRequest { allowNonDAABlocks: boolean; block: IRawBlock; }allowNonDAABlocks: booleanblock: IRawBlock`
Source: web/kaspa/kaspa.d.ts:1216

ISubmitBlockResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.submitBlock RPC method.
Signature: `interface ISubmitBlockResponse { report: ISubmitBlockReport; }report: ISubmitBlockReport`
Source: web/kaspa/kaspa.d.ts:1174

ISubmitTransactionReplacementRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.submitTransactionReplacement RPC method. Submit transaction replacement to the node.
Signature: `interface ISubmitTransactionReplacementRequest { transaction: Transaction; }transaction: Transaction`
Source: web/kaspa/kaspa.d.ts:1162

ISubmitTransactionReplacementResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.submitTransactionReplacement RPC method.
Signature: `interface ISubmitTransactionReplacementResponse { replacedTransaction: Transaction; transactionId: string; }replacedTransaction: TransactiontransactionId: string`
Source: web/kaspa/kaspa.d.ts:1149

ISubmitTransactionRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.submitTransaction RPC method. Submit transaction to the node.
Signature: `interface ISubmitTransactionRequest { allowOrphan?: boolean; transaction: Transaction; }allowOrphan?: booleantransaction: Transaction`
Source: web/kaspa/kaspa.d.ts:1136

ISubmitTransactionResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.submitTransaction RPC method.
Signature: `interface ISubmitTransactionResponse { transactionId: string; }transactionId: string`
Source: web/kaspa/kaspa.d.ts:1124

ITransactionInputVerboseData
Type: interface
Section: node rpc
Description: Option transaction input verbose data.
Signature: `interface ITransactionInputVerboseData {}`
Source: web/kaspa/kaspa.d.ts:748

ITransactionOutputVerboseData
Type: interface
Section: node rpc
Description: TransactionOutput verbose data.
Signature: `interface ITransactionOutputVerboseData { scriptPublicKeyAddress: string; scriptPublicKeyType: string; }scriptPublicKeyAddress: stringscriptPublicKeyType: string`
Source: web/kaspa/kaspa.d.ts:852

ITransactionVerboseData
Type: interface
Section: node rpc
Description: Optional transaction verbose data.
Signature: `interface ITransactionVerboseData { blockHash: string; blockTime: bigint; computeMass: bigint; hash: string; transactionId: string; }blockHash: stringblockTime: bigintcomputeMass: biginthash: stringtransactionId: string`
Source: web/kaspa/kaspa.d.ts:959

IUnbanRequest
Type: interface
Section: node rpc
Description: Argument interface for the RpcClient.unban RPC method. IPv4 or IPv6 address to unban.
Signature: `interface IUnbanRequest { ip: string; }ip: string`
Source: web/kaspa/kaspa.d.ts:1109
Additional Details:
IPv4 or IPv6 address to unban.

IUnbanResponse
Type: interface
Section: node rpc
Description: Return interface for the RpcClient.unban RPC method.
Signature: `interface IUnbanResponse {}`
Source: web/kaspa/kaspa.d.ts:1099

IUtxosChanged
Type: interface
Section: node rpc
Description: UTXOs changed notification event is produced when the set of unspent transaction outputs (UTXOs) changes in the Kaspa BlockDAG. The event notification is scoped to the monitored list of addresses specified during the subscription.
Signature: `interface IUtxosChanged { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:4760

IVirtualChainChanged
Type: interface
Section: node rpc
Description: Virtual chain changed notification event is produced when the virtual chain changes in the Kaspa BlockDAG.
Signature: `interface IVirtualChainChanged { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:4796

IVirtualDaaScoreChanged
Type: interface
Section: node rpc
Description: Virtual DAA score changed notification event is produced when the virtual Difficulty Adjustment Algorithm (DAA) score changes in the Kaspa BlockDAG.
Signature: `interface IVirtualDaaScoreChanged { [key: string]: any; }[key: string]: any`
Source: web/kaspa/kaspa.d.ts:4734

RpcEvent
Type: type
Section: node rpc
Description: RPC notification event.
Signature: `RpcEvent: { [K in keyof RpcEventMap]: { data: RpcEventMap[K]; event: K; }}[keyof RpcEventMap]`
Source: web/kaspa/kaspa.d.ts:4873

RpcEventCallback
Type: type
Section: node rpc
Description: RPC notification callback type. This type is used to define the callback function that is called when an RPC notification is received. SeeRpcClient.subscribeVirtualDaaScoreChanged, RpcClient.subscribeUtxosChanged, RpcClient.subscribeVirtualChainChanged, RpcClient.subscribeBlockAdded, RpcClient.subscribeFinalityConflict, RpcClient.subscribeFinalityConflictResolved, RpcClient.subscribeSinkBlueScoreChanged, RpcClient.subscribePruningPointUtxoSetOverride, RpcClient.subscribeNewBlockTemplate,
Signature: `(event): void`
Source: web/kaspa/kaspa.d.ts:4894
Additional Details:
SeeRpcClient.subscribeVirtualDaaScoreChanged, RpcClient.subscribeUtxosChanged, RpcClient.subscribeVirtualChainChanged, RpcClient.subscribeBlockAdded, RpcClient.subscribeFinalityConflict, RpcClient.subscribeFinalityConflictResolved, RpcClient.subscribeSinkBlueScoreChanged, RpcClient.subscribePruningPointUtxoSetOverride, RpcClient.subscribeNewBlockTemplate,

RpcEventData
Type: type
Section: node rpc
Description: RPC notification data payload.
Signature: `RpcEventData: IBlockAdded | IVirtualChainChanged | IFinalityConflict | IFinalityConflictResolved | IUtxosChanged | ISinkBlueScoreChanged | IVirtualDaaScoreChanged | IPruningPointUtxoSetOverride | INewBlockTemplate`
Source: web/kaspa/kaspa.d.ts:4839

RpcEventMap
Type: type
Section: node rpc
Description: RPC notification event data map.
Signature: `RpcEventMap: { block-added: IBlockAdded; connect: undefined; disconnect: undefined; finality-conflict: IFinalityConflict; finality-conflict-resolved: IFinalityConflictResolved; new-block-template: INewBlockTemplate; pruning-point-utxo-set-override: IPruningPointUtxoSetOverride; sink-blue-score-changed: ISinkBlueScoreChanged; utxos-changed: IUtxosChanged; virtual-chain-changed: IVirtualChainChanged; virtual-daa-score-changed: IVirtualDaaScoreChanged; }`
Source: web/kaspa/kaspa.d.ts:4854

## Other

RpcEventType
Type: enum
Section: other
Description: RPC notification events. See, {RpcClient.removeEventListener}
Signature: `BlockAdded: "block-added"Connect: "connect"Disconnect: "disconnect"FinalityConflict: "finality-conflict"FinalityConflictResolved: "finality-conflict-resolved"NewBlockTemplate: "new-block-template"PruningPointUtxoSetOverride: "pruning-point-utxo-set-override"SinkBlueScoreChanged: "sink-blue-score-changed"UtxosChanged: "utxos-changed"VirtualChainChanged: "virtual-chain-changed"VirtualDaaScoreChanged: "virtual-daa-score-changed"`
Source: web/kaspa/kaspa.d.ts:4820

AgentConstructorOptions
Type: class
Section: other
Signature: `new AgentConstructorOptions(): AgentConstructorOptionsfree(): void`
Source: web/kaspa/kaspa.d.ts:5084

AppendFileOptions
Type: class
Section: other
Signature: `new AppendFileOptions(encoding?, mode?, flag?): AppendFileOptionsget encoding(): stringset encoding(value): voidget flag(): stringset flag(value): voidget mode(): numberset mode(value): voidfree(): voidnew(): AppendFileOptions`
Source: web/kaspa/kaspa.d.ts:5093

AssertionErrorOptions
Type: class
Section: other
Description: If provided, the error message is set to this value.
Signature: `new AssertionErrorOptions(message, actual, expected, operator): AssertionErrorOptionsget message(): stringset message(value): voidfree(): void`
Source: web/kaspa/kaspa.d.ts:5104
Additional Details:
The actual property on the error instance.
The expected property on the error instance.
The operator property on the error instance.

ConsoleConstructorOptions
Type: class
Section: other
Signature: `new ConsoleConstructorOptions(stdout, stderr, ignore_errors, color_mod, inspect_options?): ConsoleConstructorOptionsget ignore_errors(): booleanset ignore_errors(value): voidget inspect_options(): objectset inspect_options(value): voidfree(): voidnew(stdout, stderr): ConsoleConstructorOptions`
Source: web/kaspa/kaspa.d.ts:5164

CreateHookCallbacks
Type: class
Section: other
Signature: `new CreateHookCallbacks(init, before, after, destroy, promise_resolve): CreateHookCallbacksfree(): void`
Source: web/kaspa/kaspa.d.ts:5176

CreateReadStreamOptions
Type: class
Section: other
Signature: `new CreateReadStreamOptions(auto_close?, emit_close?, encoding?, end?, fd?, flags?, high_water_mark?, mode?, start?): CreateReadStreamOptionsget auto_close(): booleanset auto_close(value): voidget emit_close(): booleanset emit_close(value): voidget encoding(): stringset encoding(value): voidget end(): numberset end(value): voidget fd(): numberset fd(value): voidget flags(): stringset flags(value): voidget high_water_mark(): numberset high_water_mark(value): voidget mode(): numberset mode(value): voidget start(): numberset start(value): voidfree(): void`
Source: web/kaspa/kaspa.d.ts:5185

CreateWriteStreamOptions
Type: class
Section: other
Signature: `new CreateWriteStreamOptions(auto_close?, emit_close?, encoding?, fd?, flags?, mode?, start?): CreateWriteStreamOptionsget auto_close(): booleanset auto_close(value): voidget emit_close(): booleanset emit_close(value): voidget encoding(): stringset encoding(value): voidget fd(): numberset fd(value): voidget flags(): stringset flags(value): voidget mode(): numberset mode(value): voidget start(): numberset start(value): voidfree(): void`
Source: web/kaspa/kaspa.d.ts:5207

FormatInputPathObject
Type: class
Section: other
Signature: `new FormatInputPathObject(base?, dir?, ext?, name?, root?): FormatInputPathObjectget base(): stringset base(value): voidget dir(): stringset dir(value): voidget ext(): stringset ext(value): voidget name(): stringset name(value): voidget root(): stringset root(value): voidfree(): voidnew(): FormatInputPathObject`
Source: web/kaspa/kaspa.d.ts:5293

GetNameOptions
Type: class
Section: other
Signature: `new GetNameOptions(): GetNameOptionsget family(): numberset family(value): voidfree(): voidnew(family, host, local_address, port): GetNameOptions`
Source: web/kaspa/kaspa.d.ts:5391

MkdtempSyncOptions
Type: class
Section: other
Signature: `new MkdtempSyncOptions(encoding?): MkdtempSyncOptionsget encoding(): stringset encoding(value): voidfree(): voidnew(): MkdtempSyncOptions`
Source: web/kaspa/kaspa.d.ts:5508

NetServerOptions
Type: class
Section: other
Signature: `new NetServerOptions(): NetServerOptionsget allow_half_open(): booleanset allow_half_open(value): voidget pause_on_connect(): booleanset pause_on_connect(value): voidfree(): void`
Source: web/kaspa/kaspa.d.ts:5539

PSKB
Type: class
Section: other
Signature: `new PSKB(): PSKBadd(pskt): voiddisplayFormat(network_id): stringfree(): voidmerge(other): voidserialize(): stringdeserialize(hex_data): PSKB`
Source: web/kaspa/kaspa.d.ts:5599

PSKT
Type: class
Section: other
Description: Change role to CREATOR #[wasm_bindgen(js_name = toCreator)] Change role to COMBINER Change role to CONSTRUCTOR Change role to EXTRACTOR Change role to FINALIZER Return copy of self without private attributes. Change role to SIGNER Return stringified version of self. Change role to UPDATER
Signature: `new PSKT(payload): PSKTcalculateId(): HashcalculateMass(data): bigintcreator(): PSKTfallbackLockTime(lock_time): PSKTfree(): voidinput(input): PSKTinputAndRedeemScript(input, data): PSKTinputsModifiable(): PSKTnoMoreInputs(): PSKTnoMoreOutputs(): PSKToutput(output): PSKToutputsModifiable(): PSKTserialize(): stringsetSequence(n, input_index): PSKTtoCombiner(): PSKTtoConstructor(): PSKTtoExtractor(): PSKTtoFinalizer(): PSKTtoJSON(): ObjecttoSigner(): PSKTtoString(): stringtoUpdater(): PSKT`
Source: web/kaspa/kaspa.d.ts:5609
Additional Details:
Change role to COMBINER
Change role to CONSTRUCTOR
Change role to EXTRACTOR
Change role to FINALIZER
Return copy of self without private attributes.
Change role to SIGNER
Return stringified version of self.
Change role to UPDATER

PipeOptions
Type: class
Section: other
Signature: `new PipeOptions(end?): PipeOptionsget end(): booleanset end(value): voidfree(): void`
Source: web/kaspa/kaspa.d.ts:5812

ProcessSendOptions
Type: class
Section: other
Signature: `new ProcessSendOptions(swallow_errors?): ProcessSendOptionsget swallow_errors(): booleanset swallow_errors(value): voidfree(): void`
Source: web/kaspa/kaspa.d.ts:5903

SetAadOptions
Type: class
Section: other
Signature: `new SetAadOptions(flush, plaintext_length, transform): SetAadOptionsset plaintext_length(value): voidfree(): void`
Source: web/kaspa/kaspa.d.ts:6753

SigHashType
Type: class
Section: other
Signature: `new SigHashType(): SigHashTypefree(): void`
Source: web/kaspa/kaspa.d.ts:6761

StreamTransformOptions
Type: class
Section: other
Signature: `new StreamTransformOptions(flush, transform): StreamTransformOptionsfree(): void`
Source: web/kaspa/kaspa.d.ts:6782

TransactionRecordNotification
Type: class
Section: other
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new TransactionRecordNotification(): TransactionRecordNotificationfree(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:6976
Additional Details:
Return stringified version of self.

UserInfoOptions
Type: class
Section: other
Signature: `new UserInfoOptions(encoding?): UserInfoOptionsget encoding(): stringset encoding(value): voidfree(): voidnew(): UserInfoOptions`
Source: web/kaspa/kaspa.d.ts:7031

WasiOptions
Type: class
Section: other
Signature: `new WasiOptions(args, env, preopens): WasiOptionsget args(): any[]set args(value): voidget env(): objectset env(value): voidfree(): voidnew(preopens): WasiOptions`
Source: web/kaspa/kaspa.d.ts:7604

WriteFileSyncOptions
Type: class
Section: other
Signature: `new WriteFileSyncOptions(encoding?, flag?, mode?): WriteFileSyncOptionsget encoding(): stringset encoding(value): voidget flag(): stringset flag(value): voidget mode(): numberset mode(value): voidfree(): void`
Source: web/kaspa/kaspa.d.ts:7614

IAccountCreateArgsBip32
Type: interface
Section: other
Signature: `interface IAccountCreateArgsBip32 { accountIndex?: number; accountName?: string; }accountIndex?: numberaccountName?: string`
Source: web/kaspa/kaspa.d.ts:4598

IFeeRateEstimateBucket
Type: interface
Section: other
Signature: `interface IFeeRateEstimateBucket { feeRate: number; seconds: number; }feeRate: numberseconds: number`
Source: web/kaspa/kaspa.d.ts:3163

IFeeRateEstimateRequest
Type: interface
Section: other
Signature: `interface IFeeRateEstimateRequest {}`
Source: web/kaspa/kaspa.d.ts:3159

IFeeRateEstimateResponse
Type: interface
Section: other
Signature: `interface IFeeRateEstimateResponse { low: IFeeRateEstimateBucket; normal: IFeeRateEstimateBucket; priority: IFeeRateEstimateBucket; }low: IFeeRateEstimateBucketnormal: IFeeRateEstimateBucketpriority: IFeeRateEstimateBucket`
Source: web/kaspa/kaspa.d.ts:3151

IFeeRatePollerDisableRequest
Type: interface
Section: other
Signature: `interface IFeeRatePollerDisableRequest {}`
Source: web/kaspa/kaspa.d.ts:3137

IFeeRatePollerDisableResponse
Type: interface
Section: other
Signature: `interface IFeeRatePollerDisableResponse {}`
Source: web/kaspa/kaspa.d.ts:3133

IFeeRatePollerEnableRequest
Type: interface
Section: other
Signature: `interface IFeeRatePollerEnableRequest { intervalSeconds: number; }intervalSeconds: number`
Source: web/kaspa/kaspa.d.ts:3145

IFeeRatePollerEnableResponse
Type: interface
Section: other
Signature: `interface IFeeRatePollerEnableResponse {}`
Source: web/kaspa/kaspa.d.ts:3141

IPrvKeyDataArgs
Type: interface
Section: other
Signature: `interface IPrvKeyDataArgs { paymentSecret?: string; prvKeyDataId: string; }paymentSecret?: stringprvKeyDataId: string`
Source: web/kaspa/kaspa.d.ts:4593

IStorageDescriptor
Type: interface
Section: other
Description: Wallet storage information.
Signature: `interface IStorageDescriptor { data: string; kind: string; }data: stringkind: string`
Source: web/kaspa/kaspa.d.ts:4189

InitOutput
Type: interface
Section: other
Signature: `(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a): number(a): number(a, b): void(a, b): void(a): number(a): bigint(a): number(a): number(a, b): void(a): number(a, b): void(a, b): void(a): number(a, b): void(a): bigint(a): bigint(a): number(a): number(a): number(a): bigint(a): bigint(a): number(a): number(a): number(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b, c): void(a, b, c): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b, c): void(a, b): void(a, b, c): void(a, b, c): void(a, b): void(a, b, c): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b, c): void(a, b, c): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a): number(a): void(a, b): number(a, b, c): void(a, b, c, d): number(a, b, c): void(a, b, c, d): void(a, b, c, d): number(a, b, c): void(a, b): void(a, b, c): void(a, b): void(a, b, c, d): void(a, b, c): void(a): void(a, b): void(a): number(): number(a): void(a, b, c): void(a, b): void(a, b, c): void(a, b): number(a, b): void(a, b): void(a, b, c): void(a, b, c): void(a, b): void(a, b): number(a, b): void(a): number(a): number(a): number(a): number(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a): number(a): number(a): number(a): number(): number(a, b, c): number(a, b): void(a, b): void(a, b): void(a, b, c): void(a, b, c, d): void(a): number(a): number(a): number(a, b, c, d): number(a): number(a, b): void(a, b): void(a, b): void(a, b): void(a): number(a): number(a): number(a, b, c): void(a, b): void(a, b): void(a, b, c, d): void(a, b): void(a, b, c, d): void(a, b, c, d): void(a): number(a): number(a): number(a, b): number(a, b, c, d, e): number(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a): number(a): number(a, b, c, d, e): void(a, b, c, d, e): void(a, b, c, d, e, f): void(a, b, c, d, e, f): void(a): number(a): number(a): number(a): number(a): number(a, b, c, d, e): number(a): number(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a): number(a): number(a): number(a, b): void(a): number(a): number(a, b): void(a): number(a, b, c, d, e, f, g, h, i, j, k, l): number(a, b): void(a, b): void(a, b): void(a, b, c): void(a, b): void(a, b): void(a, b, c): void(a, b): void(a, b, c): void(a, b): void(a): number(a): number(a): number(a): number(a): number(a): number(a, b, c, d, e, f, g, h): number(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b, c): void(a, b): void(a, b, c): void(a, b, c, d): void(a, b, c, d): void(a, b): void(a, b): void(a): number(a, b): void(a, b): void(a, b, c, d, e): void(): number(a): number(a): number(a, b, c): void(a): number(a, b, c, d): void(a, b): void(a, b, c, d, e): void(a): number(a): number(a): number(a): number(a): number(): number(a, b, c, d, e): number(a): number(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a): number(a): number(a): number(a): number(a): number(a, b): void(a): number(a): number(a): number(a): number(a, b): void(a, b, c, d, e): void(a): number(a): number(a): number(a, b, c, d): number(a): number(a, b): void(a, b): void(a, b): void(a, b): void(a, b): number(a, b): void(a, b): void(a): number(a): bigint(a): number(a, b): void(a): bigint(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a): number(a, b): void(a): bigint(a, b): void(a): number(a): bigint(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(): void(): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): number(a, b): void(a, b): void(a, b): void(a): number(a): void(a, b, c): void(a, b, c): void(): bigint(a): number(): number(a): number(a, b): void(a, b, c, d): void(a, b): void(a, b): void(a, b): void(a, b, c): void(a, b, c): void(a, b, c, d): void(a, b, c): number(a): number(a): number(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b, c): void(a, b): number(a, b): void(a): number(a): number(a): number(a): number(a, b, c, d, e): void(a): number(a, b, c, d): void(a): number(a, b): void(a): number(a): number(a): number(a, b): void(a, b): void(a, b): void(a, b, c, d): void(a, b, c, d, e): void(a, b): number(a, b): void(a, b): void(a): number(a): number(a, b): void(a, b, c): void(a, b, c, d, e): void(a, b): void(a, b, c, d): void(a, b): void(): void(a, b, c): void(a, b, c): void(a, b): void(a, b): void(a, b): void(a, b, c): void(a, b, c): void(a, b, c, d, e): void(a, b, c): void(a): number(a, b): void(a): number(a, b): void(a): number(a): number(a, b, c, d): void(a, b, c): void(a, b, c): void(a, b, c): void(a): number(a, b): void(a): void(a, b): void(a, b): void(a, b, c): void(a, b): void(a, b, c): void(a, b, c): void(a, b, c, d): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b, c): void(a, b): void(a): number(a, b): void(a, b): void(a, b, c, d): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a): number(a, b, c): void(a, b, c): void(a, b): void(a): number(a, b, c): void(a, b, c, d): void(a, b, c, d): void(a, b, c, d, e): void(a, b, c, d, e): void(a, b, c): void(a, b, c): void(a, b, c, d): void(a, b, c, d): void(a, b, c, d, e): void(a, b, c): void(a, b, c, d): void(a, b, c, d): void(a, b, c, d, e): void(a, b, c, d, e): void(a, b, c): void(a, b, c): void(a, b, c, d): void(a, b, c, d): void(a, b): void(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): void(a, b, c): number(a, b, c): number(a): number(a, b, c, d): void(a, b): number(a, b): number(a, b, c): void(a, b): number(a, b): void(a, b, c): void(a): number(a, b): void(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a): number(a, b): void(a, b, c, d, e): void(a, b): number(a, b): void(a, b, c, d): void(a, b): number(a): number(a, b, c): void(a, b, c): void(a, b): number(a): number(a): number(a, b): number(a, b): number(a, b): number(a): number(a): number(a): number(a): number(a): number(a): number(a, b): number(a, b): number(a): number(a): void(a, b): number(a): number(a): number(a): number(a): number(a): number(a): number(a, b): number(a, b): number(a): number(a, b): void(a): number(a): void(a, b): void(a, b): void(a, b, c): void(a, b, c): void(a, b, c): void(a, b, c): void(a, b, c): void(a, b, c): void(a, b): void(a): number(a): number(a, b, c): void(a, b): void(a, b, c): void(): number(a): number(a, b, c): void(a, b): void(a, b, c): void(a, b, c): void(a): void(a): number(a, b, c): number(a): number(a, b): void(a, b): void(a, b): void(a): number(a, b): void(a, b, c): void(a, b): void(a, b, c): void(a, b): void(a, b, c): void(a, b, c, d): void(a, b): void(a, b, c): void(a, b): void(a): number(a, b): number(a, b): void(a, b): void(a): number(a, b, c): void(a, b): void(a, b, c): void(a, b): void(a, b, c): void(a, b): void(a): bigint(a): number(a): bigint(a): number(a, b): void(a, b): void(a, b): void(a): number(a): bigint(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a): number(a, b): void(a): number(a): bigint(a): number(a, b): void(a): number(a, b, c): void(a, b): void(a, b): void(a, b, c): void(a, b): number(a, b): void(a): number(a, b): void(a, b): number(a): number(a, b): void(a, b): void(a): bigint(a): number(a): number(a): number(a, b): number(a, b, c): void(a): number(a, b): void(a): number(a, b): void(): number(a, b, c): void(a, b): void(): number(a, b, c): void(a, b, c, d): void(a): number(): number(a): number(a, b): void(a): number(a, b): void(a): number(a, b): void(a, b, c, d): void(a, b): void(a): number(a): number(a, b, c): number(a, b): number(a): bigint(a): number(a, b): void(a, b): void(a): void(a, b): void(a): number(a): bigint(a): bigint(a): number(a): number(a): number(a): number(a, b): void(a, b, c, d): void(a, b): void(a): number(a, b): void(a, b, c, d): void(a): number(a, b, c): void(a, b, c): void(a, b, c): void(a): number(a): number(a, b): void(a): void(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b, c, d): void(a, b): number(a, b): number(a, b): number(a, b): void(a): number(a): number(a, b, c): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a): number(a): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b, c, d): void(a, b): number(a): number(a, b, c): void(a): number(a): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): void(a): number(a): number(a, b, c, d): number(a): number(a, b, c): void(a, b): void(a, b): void(a): number(a): number(a): number(a, b, c): number(a, b): void(a, b): void(a, b): void(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): number(a, b): void(a, b, c): void(a, b, c): void(a, b): void(a, b, c): void(a, b): void(a): number(a): number(a, b, c, d): void(a, b, c): void(a, b, c): void(a, b, c, d): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a, b): void(a): number(a): number(a, b, c, d): void(a, b, c): void(a, b, c, d): void(a, b): void(a): number(a, b, c): void(a, b): void`
Source: web/kaspa/kaspa.d.ts:7727

InitInput
Type: type
Section: other
Signature: `InitInput: RequestInfo | URL | Response | BufferSource | WebAssembly.Module`
Source: web/kaspa/kaspa.d.ts:7725

SyncInitInput
Type: type
Section: other
Signature: `SyncInitInput: BufferSource | WebAssembly.Module`
Source: web/kaspa/kaspa.d.ts:8556

getNetworkParams
Type: function
Section: other
Signature: `getNetworkParams(networkId): INetworkParams`
Parameters:
- networkId (string): 
Returns: INetworkParams
Functions:
- `getNetworkParams(networkId): INetworkParams`
Source: web/kaspa/kaspa.d.ts:247

getTransactionMaturityProgress
Type: function
Section: other
Signature: `getTransactionMaturityProgress(blockDaaScore, currentDaaScore, networkId, isCoinbase): string`
Parameters:
- blockDaaScore (bigint): 
- currentDaaScore (bigint): 
- networkId (string): 
- isCoinbase (boolean): 
Returns: string
Functions:
- `getTransactionMaturityProgress(blockDaaScore, currentDaaScore, networkId, isCoinbase): string`
Source: web/kaspa/kaspa.d.ts:246

initSync
Type: function
Section: other
Description: Instantiates the given module, which can either be bytes or a precompiled WebAssembly.Module. Passing SyncInitInput directly is deprecated.
Signature: `initSync(module): InitOutput`
Parameters:
- module (SyncInitInput): Passing SyncInitInput directly is deprecated.
Returns: InitOutput
Functions:
- `initSync(module): InitOutput`
Source: web/kaspa/kaspa.d.ts:8565
Additional Details:
Passing SyncInitInput directly is deprecated.

## Transport

Encoding
Type: enum
Section: transport
Description: wRPC protocol encoding: Borsh or JSON
Signature: `Borsh: 0SerdeJson: 1`
Source: web/kaspa/kaspa.d.ts:385

## Wallet api

AccountsDiscoveryKind
Type: enum
Section: wallet api
Signature: `Bip44: 0`
Source: web/kaspa/kaspa.d.ts:330

CommitRevealAddressKind
Type: enum
Section: wallet api
Description: Specifies the type of an account address to be used in commit reveal redeem script and also to spend reveal operation to.
Signature: `Change: 1Receive: 0`
Source: web/kaspa/kaspa.d.ts:360

NewAddressKind
Type: enum
Section: wallet api
Description: Specifies the type of an account address to create. The address can bea receive address or a change address.
Signature: `Change: 1Receive: 0`
Source: web/kaspa/kaspa.d.ts:429

WalletEventType
Type: enum
Section: wallet api
Description: Events emitted by the Wallet.
Signature: `AccountActivation: "account-activation"AccountCreate: "account-create"AccountDeactivation: "account-deactivation"AccountSelection: "account-selection"AccountUpdate: "account-update"Balance: "balance"Connect: "connect"DaaScoreChange: "daa-score-change"Disconnect: "disconnect"Discovery: "discovery"Error: "error"FeeRate: "fee-rate"Maturity: "maturity"Pending: "pending"PrvKeyDataCreate: "prv-key-data-create"Reorg: "reorg"ServerStatus: "server-status"Stasis: "stasis"SyncState: "sync-state"UtxoIndexNotEnabled: "utxo-index-not-enabled"UtxoProcError: "utxo-proc-error"UtxoProcStart: "utxo-proc-start"UtxoProcStop: "utxo-proc-stop"WalletClose: "wallet-close"WalletCreate: "wallet-create"WalletError: "wallet-error"WalletHint: "wallet-hint"WalletOpen: "wallet-open"WalletReload: "wallet-reload"`
Source: web/kaspa/kaspa.d.ts:2725

Wallet
Type: class
Section: wallet api
Description: SeeIAccountsActivateRequest IAccountsActivateResponse Throwsstring in case of an error. SeeIAccountsCommitRevealRequest IAccountsCommitRevealResponse Throwsstring in case of an error. SeeIAccountsCommitRevealManualRequest IAccountsCommitRevealManualResponse Throwsstring in case of an error. SeeIAccountsCreateRequest IAccountsCreateResponse Throwsstring in case of an error. SeeIAccountsCreateNewAddressRequest IAccountsCreateNewAddressResponse Throwsstring in case of an error. SeeIAccountsDeactivateRequest IAccountsDeactivateResponse Throwsstring in case of an error. SeeIAccountsDiscoveryRequest IAccountsDiscoveryResponse Throwsstring in case of an error. SeeIAccountsEnsureDefaultRequest IAccountsEnsureDefaultResponse Throwsstring in case of an error. SeeIAccountsEnumerateRequest IAccountsEnumerateResponse Throwsstring in case of an error. SeeIAccountsEstimateRequest IAccountsEstimateResponse Throwsstring in case of an error. SeeIAccountsGetRequest IAccountsGetResponse Throwsstring in case of an error. SeeIAccountsGetUtxosRequest IAccountsGetUtxosResponse Throwsstring in case of an error. SeeIAccountsImportRequest IAccountsImportResponse Throwsstring in case of an error. SeeIAccountsPskbBroadcastRequest IAccountsPskbBroadcastResponse Throwsstring in case of an error. SeeIAccountsPskbSendRequest IAccountsPskbSendResponse Throwsstring in case of an error. SeeIAccountsPskbSignRequest IAccountsPskbSignResponse Throwsstring in case of an error. SeeIAccountsRenameRequest IAccountsRenameResponse Throwsstring in case of an error. SeeIAccountsSendRequest IAccountsSendResponse Throwsstring in case of an error. SeeIAccountsTransferRequest IAccountsTransferResponse Throwsstring in case of an error. SeeIAddressBookEnumerateRequest IAddressBookEnumerateResponse Throwsstring in case of an error. Ping backend SeeIBatchRequest IBatchResponse Throwsstring in case of an error. Check if a wallet with a given name exists. SeeIFeeRateEstimateRequest IFeeRateEstimateResponse Throwsstring in case of an error. SeeIFeeRatePollerDisableRequest IFeeRatePollerDisableResponse Throwsstring in case of an error. SeeIFeeRatePollerEnableRequest IFeeRatePollerEnableResponse Throwsstring in case of an error. SeeIFlushRequest IFlushResponse Throwsstring in case of an error. SeeIGetStatusRequest IGetStatusResponse Throwsstring in case of an error. SeeIPrvKeyDataCreateRequest IPrvKeyDataCreateResponse Throwsstring in case of an error. SeeIPrvKeyDataEnumerateRequest IPrvKeyDataEnumerateResponse Throwsstring in case of an error. SeeIPrvKeyDataGetRequest IPrvKeyDataGetResponse Throwsstring in case of an error. SeeIPrvKeyDataRemoveRequest IPrvKeyDataRemoveResponse Throwsstring in case of an error. SeeIRetainContextRequest IRetainContextResponse Throwsstring in case of an error. Return copy of self without private attributes. Return stringified version of self. SeeITransactionsDataGetRequest ITransactionsDataGetResponse Throwsstring in case of an error. SeeITransactionsReplaceMetadataRequest ITransactionsReplaceMetadataResponse Throwsstring in case of an error. SeeITransactionsReplaceNoteRequest ITransactionsReplaceNoteResponse Throwsstring in case of an error. SeeIWalletChangeSecretRequest IWalletChangeSecretResponse Throwsstring in case of an error. SeeIWalletCloseRequest IWalletCloseResponse Throwsstring in case of an error. SeeIWalletCreateRequest IWalletCreateResponse Throwsstring in case of an error. SeeIWalletEnumerateRequest IWalletEnumerateResponse Throwsstring in case of an error. SeeIWalletExportRequest IWalletExportResponse Throwsstring in case of an error. SeeIWalletImportRequest IWalletImportResponse Throwsstring in case of an error. SeeIWalletOpenRequest IWalletOpenResponse Throwsstring in case of an error. SeeIWalletReloadRequest IWalletReloadResponse Throwsstring in case of an error.
Signature: `new Wallet(config): WalletaccountsActivate(request): PromiseaccountsCommitReveal(request): PromiseaccountsCommitRevealManual(request): PromiseaccountsCreate(request): PromiseaccountsCreateNewAddress(request): PromiseaccountsDeactivate(request): PromiseaccountsDiscovery(request): PromiseaccountsEnsureDefault(request): PromiseaccountsEnumerate(request): PromiseaccountsEstimate(request): PromiseaccountsGet(request): PromiseaccountsGetUtxos(request): PromiseaccountsImport(request): PromiseaccountsPskbBroadcast(request): PromiseaccountsPskbSend(request): PromiseaccountsPskbSign(request): PromiseaccountsRename(request): PromiseaccountsSend(request): PromiseaccountsTransfer(request): PromiseaddEventListener(callback): voidaddEventListener(event, callback?): any(eventData): voidaddressBookEnumerate(request): Promisebatch(request): Promiseconnect(args?): Promisedisconnect(): Promiseexists(name?): PromisefeeRateEstimate(request): PromisefeeRatePollerDisable(request): PromisefeeRatePollerEnable(request): Promiseflush(request): Promisefree(): voidgetStatus(request): PromiseprvKeyDataCreate(request): PromiseprvKeyDataEnumerate(request): PromiseprvKeyDataGet(request): PromiseprvKeyDataRemove(request): PromiseremoveEventListener(event, callback?): voidretainContext(request): PromisesetNetworkId(network_id): voidstart(): Promisestop(): PromisetoJSON(): ObjecttoString(): stringtransactionsDataGet(request): PromisetransactionsReplaceMetadata(request): PromisetransactionsReplaceNote(request): PromisewalletChangeSecret(request): PromisewalletClose(request): PromisewalletCreate(request): PromisewalletEnumerate(request): PromisewalletExport(request): PromisewalletImport(request): PromisewalletOpen(request): PromisewalletReload(request): Promise`
Source: web/kaspa/kaspa.d.ts:4468
Additional Details:
Wallet class is the main coordinator that manages integrated wallet operations. The Wallet class encapsulates UtxoProcessor and provides internal account management using UtxoContext instances. It acts as a bridge between the integrated Wallet subsystem providing a high-level interface for wallet key and account management. The Rusty Kaspa is developed in Rust, and the Wallet class is a Rust implementation exposed to the JavaScript/TypeScript environment using the WebAssembly (WASM32) interface. As such, the Wallet implementation can be powered up using native Rust or built as a WebAssembly module and used in the browser or Node.js environment. When using Rust native or NodeJS environment, all wallet data is stored on the local filesystem. When using WASM32 build in the web browser, the wallet data is stored in the browser's localStorage and transaction records are stored in the IndexedDB. The Wallet API can create multiple wallet instances, however, only one wallet instance can be active at a time. The wallet implementation is designed to be efficient and support a large number of accounts. Accounts reside in storage and can be loaded and activated as needed. A loaded account contains all account information loaded from the permanent storage whereas an active account monitors the UTXO set and provides notifications for incoming and outgoing transactions as well as balance updates. The Wallet API communicates with the client using resource identifiers. These include account IDs, private key IDs, transaction IDs, etc. It is the responsibility of the client to track these resource identifiers at runtime. SeeIWalletConfig,
Wallet class is the main coordinator that manages integrated wallet operations. The Wallet class encapsulates UtxoProcessor and provides internal account management using UtxoContext instances. It acts as a bridge between the integrated Wallet subsystem providing a high-level interface for wallet key and account management. The Rusty Kaspa is developed in Rust, and the Wallet class is a Rust implementation exposed to the JavaScript/TypeScript environment using the WebAssembly (WASM32) interface. As such, the Wallet implementation can be powered up using native Rust or built as a WebAssembly module and used in the browser or Node.js environment. When using Rust native or NodeJS environment, all wallet data is stored on the local filesystem. When using WASM32 build in the web browser, the wallet data is stored in the browser's localStorage and transaction records are stored in the IndexedDB. The Wallet API can create multiple wallet instances, however, only one wallet instance can be active at a time. The wallet implementation is designed to be efficient and support a large number of accounts. Accounts reside in storage and can be loaded and activated as needed. A loaded account contains all account information loaded from the permanent storage whereas an active account monitors the UTXO set and provides notifications for incoming and outgoing transactions as well as balance updates. The Wallet API communicates with the client using resource identifiers. These include account IDs, private key IDs, transaction IDs, etc. It is the responsibility of the client to track these resource identifiers at runtime.
SeeIWalletConfig,
RemarksThis is a local property indicating if the wallet is currently open.
RemarksThis is a local property indicating if the node is currently synced.
SeeIAccountsCommitRevealRequest IAccountsCommitRevealResponse Throwsstring in case of an error.
SeeIAccountsCommitRevealManualRequest IAccountsCommitRevealManualResponse Throwsstring in case of an error.
SeeIAccountsCreateRequest IAccountsCreateResponse Throwsstring in case of an error.
SeeIAccountsCreateNewAddressRequest IAccountsCreateNewAddressResponse Throwsstring in case of an error.
SeeIAccountsDeactivateRequest IAccountsDeactivateResponse Throwsstring in case of an error.
SeeIAccountsDiscoveryRequest IAccountsDiscoveryResponse Throwsstring in case of an error.
SeeIAccountsEnsureDefaultRequest IAccountsEnsureDefaultResponse Throwsstring in case of an error.
SeeIAccountsEnumerateRequest IAccountsEnumerateResponse Throwsstring in case of an error.
SeeIAccountsEstimateRequest IAccountsEstimateResponse Throwsstring in case of an error.
SeeIAccountsGetRequest IAccountsGetResponse Throwsstring in case of an error.
SeeIAccountsGetUtxosRequest IAccountsGetUtxosResponse Throwsstring in case of an error.
SeeIAccountsImportRequest IAccountsImportResponse Throwsstring in case of an error.
SeeIAccountsPskbBroadcastRequest IAccountsPskbBroadcastResponse Throwsstring in case of an error.
SeeIAccountsPskbSendRequest IAccountsPskbSendResponse Throwsstring in case of an error.
SeeIAccountsPskbSignRequest IAccountsPskbSignResponse Throwsstring in case of an error.
SeeIAccountsRenameRequest IAccountsRenameResponse Throwsstring in case of an error.
SeeIAccountsSendRequest IAccountsSendResponse Throwsstring in case of an error.
SeeIAccountsTransferRequest IAccountsTransferResponse Throwsstring in case of an error.
SeeIAddressBookEnumerateRequest IAddressBookEnumerateResponse Throwsstring in case of an error.
Ping backend
SeeIBatchRequest IBatchResponse Throwsstring in case of an error.
Check if a wallet with a given name exists.
SeeIFeeRateEstimateRequest IFeeRateEstimateResponse Throwsstring in case of an error.
SeeIFeeRatePollerDisableRequest IFeeRatePollerDisableResponse Throwsstring in case of an error.
SeeIFeeRatePollerEnableRequest IFeeRatePollerEnableResponse Throwsstring in case of an error.
SeeIFlushRequest IFlushResponse Throwsstring in case of an error.
SeeIGetStatusRequest IGetStatusResponse Throwsstring in case of an error.
SeeIPrvKeyDataCreateRequest IPrvKeyDataCreateResponse Throwsstring in case of an error.
SeeIPrvKeyDataEnumerateRequest IPrvKeyDataEnumerateResponse Throwsstring in case of an error.
SeeIPrvKeyDataGetRequest IPrvKeyDataGetResponse Throwsstring in case of an error.
SeeIPrvKeyDataRemoveRequest IPrvKeyDataRemoveResponse Throwsstring in case of an error.
SeeIRetainContextRequest IRetainContextResponse Throwsstring in case of an error.
Return copy of self without private attributes.
Return stringified version of self.
SeeITransactionsDataGetRequest ITransactionsDataGetResponse Throwsstring in case of an error.
SeeITransactionsReplaceMetadataRequest ITransactionsReplaceMetadataResponse Throwsstring in case of an error.
SeeITransactionsReplaceNoteRequest ITransactionsReplaceNoteResponse Throwsstring in case of an error.
SeeIWalletChangeSecretRequest IWalletChangeSecretResponse Throwsstring in case of an error.
SeeIWalletCloseRequest IWalletCloseResponse Throwsstring in case of an error.
SeeIWalletCreateRequest IWalletCreateResponse Throwsstring in case of an error.
SeeIWalletEnumerateRequest IWalletEnumerateResponse Throwsstring in case of an error.
SeeIWalletExportRequest IWalletExportResponse Throwsstring in case of an error.
SeeIWalletImportRequest IWalletImportResponse Throwsstring in case of an error.
SeeIWalletOpenRequest IWalletOpenResponse Throwsstring in case of an error.
SeeIWalletReloadRequest IWalletReloadResponse Throwsstring in case of an error.

WalletDescriptor
Type: class
Section: wallet api
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new WalletDescriptor(): WalletDescriptorget title(): stringset title(value): voidfree(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:7589
Additional Details:
Return stringified version of self.

IAccountCreateArgs
Type: interface
Section: wallet api
Signature: `interface IAccountCreateArgs { args: IAccountCreateArgsBip32; prvKeyDataArgs?: IPrvKeyDataArgs; type: "bip32"; }args: IAccountCreateArgsBip32prvKeyDataArgs?: IPrvKeyDataArgstype: "bip32"`
Source: web/kaspa/kaspa.d.ts:4606

IAccountDescriptor
Type: interface
Section: wallet api
Signature: `interface IAccountDescriptor { accountId: string; accountName?: string; addresses?: Address[]; changeAddress?: Address; kind: AccountKind; prvKeyDataIds: string[]; receiveAddress?: Address; [key: string]: any; }[key: string]: anyaccountId: stringaccountName?: stringaddresses?: Address[]changeAddress?: Addresskind: AccountKindprvKeyDataIds: string[]receiveAddress?: Address`
Source: web/kaspa/kaspa.d.ts:4539

IAccountActivateRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsActivate method.
Signature: `interface IAccountsActivateRequest { accountIds?: string[]; }accountIds?: string[]`
Source: web/kaspa/kaspa.d.ts:3518

IAccountActivateResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsActivate method.
Signature: `interface IAccountsActivateResponse {}`
Source: web/kaspa/kaspa.d.ts:3508

IAccountCommitRevealManualRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsCommitRevealManual method. Atomic commit reveal operation using given payment outputs. The startDestination stands for the commit transaction and the endDestination for the reveal transaction. The scriptSig will be used to spend the UTXO of the first transaction and must therefore match the startDestination output P2SH. Set revealFeeSompi or reflect the reveal fee transaction on endDestination output amount. The default revealFeeSompi is 100_000 sompi.
Signature: `interface IAccountsCommitRevealManualRequest { accountId: string; endDestination: IPaymentOutput; feeRate?: number; payload?: string | Uint8Array; paymentSecret?: string; revealFeeSompi: bigint; scriptSig: string | Uint8Array; startDestination: IPaymentOutput; walletSecret: string; }accountId: stringendDestination: IPaymentOutputfeeRate?: numberpayload?: string | Uint8ArraypaymentSecret?: stringrevealFeeSompi: bigintscriptSig: string | Uint8ArraystartDestination: IPaymentOutputwalletSecret: string`
Source: web/kaspa/kaspa.d.ts:2924

IAccountCommitRevealManualResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsCommitRevealManual method.
Signature: `interface IAccountsCommitRevealManualResponse { transactionIds: string[]; }transactionIds: string[]`
Source: web/kaspa/kaspa.d.ts:2900

IAccountCommitRevealRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsCommitReveal method. Atomic commit reveal operation using parameterized account address to dynamically generate the commit P2SH address. The account address is selected through addressType and addressIndex and will be used to complete the script signature. A placeholder of format {{pubkey}} is to be provided inside ScriptSig in order to be superseded by the selected address' payload. The selected address will also be used to spend reveal transaction to. The default revealFeeSompi is 100_000 sompi.
Signature: `interface IAccountsCommitRevealRequest { accountId: string; addressIndex: number; addressType: CommitRevealAddressKind; commitAmountSompi: bigint; feeRate?: number; payload?: string | Uint8Array; paymentSecret?: string; revealFeeSompi: bigint; scriptSig: string | Uint8Array; walletSecret: string; }accountId: stringaddressIndex: numberaddressType: CommitRevealAddressKindcommitAmountSompi: bigintfeeRate?: numberpayload?: string | Uint8ArraypaymentSecret?: stringrevealFeeSompi: bigintscriptSig: string | Uint8ArraywalletSecret: string`
Source: web/kaspa/kaspa.d.ts:2968

IAccountCommitRevealResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsCommitReveal method.
Signature: `interface IAccountsCommitRevealResponse { transactionIds: string[]; }transactionIds: string[]`
Source: web/kaspa/kaspa.d.ts:2944

IAccountCreateNewAddressRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsCreateNewAddress method.
Signature: `interface IAccountsCreateNewAddressRequest { accountId: string; addressKind?: string | NewAddressKind; }accountId: stringaddressKind?: string | NewAddressKind`
Source: web/kaspa/kaspa.d.ts:3449

IAccountCreateNewAddressResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsCreateNewAddress method.
Signature: `interface IAccountsCreateNewAddressResponse { address: Address; }address: Address`
Source: web/kaspa/kaspa.d.ts:3437

IAccountCreateResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsCreate method.
Signature: `interface IAccountsCreateResponse { accountDescriptor: IAccountDescriptor; }accountDescriptor: IAccountDescriptor`
Source: web/kaspa/kaspa.d.ts:3582

IAccountDeactivateRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsDeactivate method.
Signature: `interface IAccountsDeactivateRequest { accountIds?: string[]; }accountIds?: string[]`
Source: web/kaspa/kaspa.d.ts:3496

IAccountDeactivateResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsDeactivate method.
Signature: `interface IAccountsDeactivateResponse {}`
Source: web/kaspa/kaspa.d.ts:3486

IAccountDiscoveryRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsDiscovery method.
Signature: `interface IAccountsDiscoveryRequest { accountScanExtent: number; addressScanExtent: number; bip39_mnemonic: string; bip39_passphrase?: string; discoveryKind: Bip44; }accountScanExtent: numberaddressScanExtent: numberbip39_mnemonic: stringbip39_passphrase?: stringdiscoveryKind: Bip44`
Source: web/kaspa/kaspa.d.ts:3639

IAccountDiscoveryResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsDiscovery method.
Signature: `interface IAccountsDiscoveryResponse { lastAccountIndexFound: number; }lastAccountIndexFound: number`
Source: web/kaspa/kaspa.d.ts:3627

IAccountEnsureDefaultRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsEnsureDefault method.
Signature: `interface IAccountsEnsureDefaultRequest { mnemonic?: string; paymentSecret?: string; type: string | AccountKind; walletSecret: string; }mnemonic?: stringpaymentSecret?: stringtype: string | AccountKindwalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3567

IAccountEnsureDefaultResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsEnsureDefault method.
Signature: `interface IAccountsEnsureDefaultResponse { accountDescriptor: IAccountDescriptor; }accountDescriptor: IAccountDescriptor`
Source: web/kaspa/kaspa.d.ts:3555

IAccountEnumerateRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsEnumerate method.
Signature: `interface IAccountsEnumerateRequest {}`
Source: web/kaspa/kaspa.d.ts:3691

IAccountEnumerateResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsEnumerate method.
Signature: `interface IAccountsEnumerateResponse { accountDescriptors: IAccountDescriptor[]; }accountDescriptors: IAccountDescriptor[]`
Source: web/kaspa/kaspa.d.ts:3679

IAccountEstimateRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsEstimate method.
Signature: `interface IAccountsEstimateRequest { accountId: string; destination: IPaymentOutput[]; feeRate?: number; payload?: string | Uint8Array; priorityFeeSompi: bigint | IFees; }accountId: stringdestination: IPaymentOutput[]feeRate?: numberpayload?: string | Uint8ArraypriorityFeeSompi: bigint | IFees`
Source: web/kaspa/kaspa.d.ts:3188

IAccountEstimateResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsEstimate method.
Signature: `interface IAccountsEstimateResponse { generatorSummary: GeneratorSummary; }generatorSummary: GeneratorSummary`
Source: web/kaspa/kaspa.d.ts:3176

IAccountGetRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsGet method.
Signature: `interface IAccountsGetRequest { accountId: string; }accountId: string`
Source: web/kaspa/kaspa.d.ts:3474

IAccountGetResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsGet method.
Signature: `interface IAccountsGetResponse { accountDescriptor: IAccountDescriptor; }accountDescriptor: IAccountDescriptor`
Source: web/kaspa/kaspa.d.ts:3462

IAccountGetUtxosRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsGetUtxos method.
Signature: `interface IAccountsGetUtxosRequest { accountId: string; addresses: string[] | Address[]; minAmountSompi?: bigint; }accountId: stringaddresses: string[] | Address[]minAmountSompi?: bigint`
Source: web/kaspa/kaspa.d.ts:3247

IAccountGetUtxosResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsGetUtxos method.
Signature: `interface IAccountsGetUtxosResponse { utxos: UtxoEntry[]; }utxos: UtxoEntry[]`
Source: web/kaspa/kaspa.d.ts:3235

IAccountImportRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsImport method.
Signature: `interface IAccountsImportRequest { walletSecret: string; }walletSecret: string`
Source: web/kaspa/kaspa.d.ts:3542

IAccountImportResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsImport method.
Signature: `interface IAccountsImportResponse {}`
Source: web/kaspa/kaspa.d.ts:3530

IAccountPskbBroadcastRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsPskbBroadcast method.
Signature: `interface IAccountsPskbBroadcastRequest { accountId: string; pskb: string; }accountId: stringpskb: string`
Source: web/kaspa/kaspa.d.ts:3318

IAccountPskbBroadcastResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsPskbBroadcast method.
Signature: `interface IAccountsPskbBroadcastResponse { transactionIds: string[]; }transactionIds: string[]`
Source: web/kaspa/kaspa.d.ts:3306

IAccountPskbSendRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsPskbSend method. Hex identifier of the account. Optional key encryption secret or BIP39 passphrase. PSKB to sign. Address to sign for. Wallet encryption secret.
Signature: `interface IAccountsPskbSendRequest { accountId: string; paymentSecret?: string; pskb: string; signForAddress?: string | Address; walletSecret: string; }accountId: stringpaymentSecret?: stringpskb: stringsignForAddress?: string | AddresswalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3273
Additional Details:
Hex identifier of the account.
Optional key encryption secret or BIP39 passphrase.
PSKB to sign.
Address to sign for.
Wallet encryption secret.

IAccountPskbSendResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsPskbSend method.
Signature: `interface IAccountsPskbSendResponse { transactionIds: string[]; }transactionIds: string[]`
Source: web/kaspa/kaspa.d.ts:3261

IAccountPskbSignRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsPskbSign method. Hex identifier of the account. Optional key encryption secret or BIP39 passphrase. PSKB to sign. Address to sign for. Wallet encryption secret.
Signature: `interface IAccountsPskbSignRequest { accountId: string; paymentSecret?: string; pskb: string; signForAddress?: string | Address; walletSecret: string; }accountId: stringpaymentSecret?: stringpskb: stringsignForAddress?: string | AddresswalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3346
Additional Details:
Hex identifier of the account.
Optional key encryption secret or BIP39 passphrase.
PSKB to sign.
Address to sign for.
Wallet encryption secret.

IAccountPskbSignResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsPskbSign method. signed PSKB.
Signature: `interface IAccountsPskbSignResponse { pskb: string; }pskb: string`
Source: web/kaspa/kaspa.d.ts:3331

IAccountRenameRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsRename method.
Signature: `interface IAccountsRenameRequest { accountId: string; name?: string; walletSecret: string; }accountId: stringname?: stringwalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3665

IAccountRenameResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsRename method.
Signature: `interface IAccountsRenameResponse {}`
Source: web/kaspa/kaspa.d.ts:3655

IAccountSendRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsSend method. Hex identifier of the account. If not supplied, the destination will be the change address resulting in a UTXO compound transaction. Fee rate in sompi per 1 gram of mass. Optional key encryption secret or BIP39 passphrase. Priority fee. Wallet encryption secret.
Signature: `interface IAccountsSendRequest { accountId: string; destination?: IPaymentOutput[]; feeRate?: number; payload?: string | Uint8Array; paymentSecret?: string; priorityFeeSompi?: bigint | IFees; walletSecret: string; }accountId: stringdestination?: IPaymentOutput[]feeRate?: numberpayload?: string | Uint8ArraypaymentSecret?: stringpriorityFeeSompi?: bigint | IFeeswalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3398
Additional Details:
Hex identifier of the account.
If not supplied, the destination will be the change address resulting in a UTXO compound transaction.
Fee rate in sompi per 1 gram of mass.
Optional key encryption secret or BIP39 passphrase.
Priority fee.
Wallet encryption secret.

IAccountSendResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsSend method. Summary produced by the transaction generator. Hex identifiers of successfully submitted transactions.
Signature: `interface IAccountsSendResponse { generatorSummary: GeneratorSummary; transactionIds: string[]; }generatorSummary: GeneratorSummarytransactionIds: string[]`
Source: web/kaspa/kaspa.d.ts:3379
Additional Details:
Summary produced by the transaction generator.
Hex identifiers of successfully submitted transactions.

IAccountTransferRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.accountsTransfer method.
Signature: `interface IAccountsTransferRequest { destinationAccountId: string; feeRate?: number; paymentSecret?: string; priorityFeeSompi?: bigint | IFees; sourceAccountId: string; transferAmountSompi: bigint; walletSecret: string; }destinationAccountId: stringfeeRate?: numberpaymentSecret?: stringpriorityFeeSompi?: bigint | IFeessourceAccountId: stringtransferAmountSompi: bigintwalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3217

IAccountTransferResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.accountsTransfer method.
Signature: `interface IAccountsTransferResponse { generatorSummary: GeneratorSummary; transactionIds: string[]; }generatorSummary: GeneratorSummarytransactionIds: string[]`
Source: web/kaspa/kaspa.d.ts:3204

IAddressBookEnumerateRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.addressBookEnumerate method.
Signature: `interface IAddressBookEnumerateRequest {}`
Source: web/kaspa/kaspa.d.ts:3001

IAddressBookEnumerateResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.addressBookEnumerate method.
Signature: `interface IAddressBookEnumerateResponse {}`
Source: web/kaspa/kaspa.d.ts:2989

IBatchRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.batch method. Suspend storage operations until invocation of flush().
Signature: `interface IBatchRequest {}`
Source: web/kaspa/kaspa.d.ts:4163

IBatchResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.batch method.
Signature: `interface IBatchResponse {}`
Source: web/kaspa/kaspa.d.ts:4153

IConnectRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.connect method.
Signature: `interface IConnectRequest { block?: boolean; networkId: string | NetworkId; requireSync?: boolean; retryOnError?: boolean; url?: string; }block?: booleannetworkId: string | NetworkIdrequireSync?: booleanretryOnError?: booleanurl?: string`
Source: web/kaspa/kaspa.d.ts:4110

IConnectResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.connect method.
Signature: `interface IConnectResponse {}`
Source: web/kaspa/kaspa.d.ts:4100

IDisconnectRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.disconnect method.
Signature: `interface IDisconnectRequest {}`
Source: web/kaspa/kaspa.d.ts:4090

IDisconnectResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.disconnect method.
Signature: `interface IDisconnectResponse {}`
Source: web/kaspa/kaspa.d.ts:4080

IFlushRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.flush method.
Signature: `interface IFlushRequest { walletSecret: string; }walletSecret: string`
Source: web/kaspa/kaspa.d.ts:4141

IFlushResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.flush method.
Signature: `interface IFlushResponse {}`
Source: web/kaspa/kaspa.d.ts:4131

IGetStatusRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.getStatus method. Optional context creation name. SeeIRetainContextRequest
Signature: `interface IGetStatusRequest { name?: string; }name?: string`
Source: web/kaspa/kaspa.d.ts:4064
Additional Details:
SeeIRetainContextRequest

IGetStatusResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.getStatus method.
Signature: `interface IGetStatusResponse { context?: string; isConnected: boolean; isOpen: boolean; isSynced: boolean; networkId?: NetworkId; url?: string; }context?: stringisConnected: booleanisOpen: booleanisSynced: booleannetworkId?: NetworkIdurl?: string`
Source: web/kaspa/kaspa.d.ts:4047

INetworkParams
Type: interface
Section: wallet api
Signature: `interface INetworkParams { additionalCompoundTransactionMass: number; coinbaseTransactionMaturityPeriodDaa: number; coinbaseTransactionStasisPeriodDaa: number; userTransactionMaturityPeriodDaa: number; }additionalCompoundTransactionMass: numbercoinbaseTransactionMaturityPeriodDaa: numbercoinbaseTransactionStasisPeriodDaa: numberuserTransactionMaturityPeriodDaa: number`
Source: web/kaspa/kaspa.d.ts:3093

IPrvKeyDataCreateRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.prvKeyDataCreate method. Kind of the private key data BIP39 mnemonic phrase (12 or 24 words) if kind is mnemonic Optional name of the private key Optional key secret (BIP39 passphrase). If supplied, all operations requiring access to the key will require the paymentSecret to be provided. Secret key if kind is secretKey Wallet encryption secret
Signature: `interface IPrvKeyDataCreateRequest { kind: "mnemonic" | "secretKey"; mnemonic?: string; name?: string; paymentSecret?: string; secretKey?: string; walletSecret: string; }kind: "mnemonic" | "secretKey"mnemonic?: stringname?: stringpaymentSecret?: stringsecretKey?: stringwalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3761
Additional Details:
Kind of the private key data
BIP39 mnemonic phrase (12 or 24 words) if kind is mnemonic
Optional name of the private key
Optional key secret (BIP39 passphrase). If supplied, all operations requiring access to the key will require the paymentSecret to be provided.
Secret key if kind is secretKey
Wallet encryption secret

IPrvKeyDataCreateResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.prvKeyDataCreate method.
Signature: `interface IPrvKeyDataCreateResponse { prvKeyDataId: string; }prvKeyDataId: string`
Source: web/kaspa/kaspa.d.ts:3749

IPrvKeyDataEnumerateRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.prvKeyDataEnumerate method.
Signature: `interface IPrvKeyDataEnumerateRequest {}`
Source: web/kaspa/kaspa.d.ts:3804

IPrvKeyDataEnumerateResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.prvKeyDataEnumerate method. Response returning a list of private key ids, their optional names and properties. SeeIPrvKeyDataInfo
Signature: `interface IPrvKeyDataEnumerateResponse { prvKeyDataList: IPrvKeyDataInfo[]; }prvKeyDataList: IPrvKeyDataInfo[]`
Source: web/kaspa/kaspa.d.ts:3792
Additional Details:
SeeIPrvKeyDataInfo

IPrvKeyDataGetRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.prvKeyDataGet method.
Signature: `interface IPrvKeyDataGetRequest { prvKeyDataId: string; walletSecret: string; }prvKeyDataId: stringwalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3713

IPrvKeyDataGetResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.prvKeyDataGet method.
Signature: `interface IPrvKeyDataGetResponse {}`
Source: web/kaspa/kaspa.d.ts:3701

IPrvKeyDataInfo
Type: interface
Section: wallet api
Description: Private key data information. Deterministic wallet id of the private key Indicates if the key requires additional payment or a recovery secret to perform wallet operations that require access to it. For BIP39 keys this indicates that the key was created with a BIP39 passphrase. Optional name of the private key
Signature: `interface IPrvKeyDataInfo { id: string; isEncrypted: boolean; name?: string; }id: stringisEncrypted: booleanname?: string`
Source: web/kaspa/kaspa.d.ts:4557
Additional Details:
Deterministic wallet id of the private key
Indicates if the key requires additional payment or a recovery secret to perform wallet operations that require access to it. For BIP39 keys this indicates that the key was created with a BIP39 passphrase.
Optional name of the private key

IPrvKeyDataRemoveRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.prvKeyDataRemove method.
Signature: `interface IPrvKeyDataRemoveRequest { prvKeyDataId: string; walletSecret: string; }prvKeyDataId: stringwalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3736

IPrvKeyDataRemoveResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.prvKeyDataRemove method.
Signature: `interface IPrvKeyDataRemoveResponse {}`
Source: web/kaspa/kaspa.d.ts:3726

IRetainContextRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.retainContext method. Optional context data to retain. Optional context creation name.
Signature: `interface IRetainContextRequest { data?: string; name: string; }data?: stringname: string`
Source: web/kaspa/kaspa.d.ts:4028
Additional Details:
Optional context data to retain.
Optional context creation name.

IRetainContextResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.retainContext method.
Signature: `interface IRetainContextResponse {}`
Source: web/kaspa/kaspa.d.ts:4017

ITransactionsDataGetRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.transactionsDataGet method.
Signature: `interface ITransactionsDataGetRequest { accountId: string; end: bigint; filter?: TransactionKind[]; networkId: string | NetworkId; start: bigint; }accountId: stringend: bigintfilter?: TransactionKind[]networkId: string | NetworkIdstart: bigint`
Source: web/kaspa/kaspa.d.ts:3123

ITransactionsDataGetResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.transactionsDataGet method.
Signature: `interface ITransactionsDataGetResponse { accountId: string; start: bigint; total: bigint; transactions: ITransactionRecord[]; }accountId: stringstart: biginttotal: biginttransactions: ITransactionRecord[]`
Source: web/kaspa/kaspa.d.ts:3108

ITransactionsReplaceMetadataRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.transactionsReplaceMetadata method. Metadata is a wallet-specific string that can be used to store arbitrary data. It should contain a serialized JSON string with key containing the custom data stored by the wallet. When interacting with metadata, the wallet should always deserialize the JSON string and then serialize it again after making changes, preserving any foreign keys that it might encounter. To preserve foreign metadata, the pattern of access should be: Get -> Modify -> Replace The id of account the transaction belongs to. Optional metadata string to replace the existing metadata. If not supplied, the metadata will be removed. The network id of the transaction. The id of the transaction.
Signature: `interface ITransactionsReplaceMetadataRequest { accountId: string; metadata?: string; networkId: string | NetworkId; transactionId: string; }accountId: stringmetadata?: stringnetworkId: string | NetworkIdtransactionId: string`
Source: web/kaspa/kaspa.d.ts:3028
Additional Details:
The id of account the transaction belongs to.
Optional metadata string to replace the existing metadata. If not supplied, the metadata will be removed.
The network id of the transaction.
The id of the transaction.

ITransactionsReplaceMetadataResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.transactionsReplaceMetadata method.
Signature: `interface ITransactionsReplaceMetadataResponse {}`
Source: web/kaspa/kaspa.d.ts:3011

ITransactionsReplaceNoteRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.transactionsReplaceNote method. The id of account the transaction belongs to. The network id of the transaction. Optional note string to replace the existing note. If not supplied, the note will be removed. The id of the transaction.
Signature: `interface ITransactionsReplaceNoteRequest { accountId: string; networkId: string | NetworkId; note?: string; transactionId: string; }accountId: stringnetworkId: string | NetworkIdnote?: stringtransactionId: string`
Source: web/kaspa/kaspa.d.ts:3066
Additional Details:
The id of account the transaction belongs to.
The network id of the transaction.
Optional note string to replace the existing note. If not supplied, the note will be removed.
The id of the transaction.

ITransactionsReplaceNoteResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.transactionsReplaceNote method.
Signature: `interface ITransactionsReplaceNoteResponse {}`
Source: web/kaspa/kaspa.d.ts:3056

IWalletChangeSecretRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.walletChangeSecret method.
Signature: `interface IWalletChangeSecretRequest { newWalletSecret: string; oldWalletSecret: string; }newWalletSecret: stringoldWalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3872

IWalletChangeSecretResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.walletChangeSecret method.
Signature: `interface IWalletChangeSecretResponse {}`
Source: web/kaspa/kaspa.d.ts:3862

IWalletCloseRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.walletClose method.
Signature: `interface IWalletCloseRequest {}`
Source: web/kaspa/kaspa.d.ts:3920

IWalletCloseResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.walletClose method.
Signature: `interface IWalletCloseResponse {}`
Source: web/kaspa/kaspa.d.ts:3910

IWalletConfig
Type: interface
Section: wallet api
Description: resident is a boolean indicating if the wallet should not be stored on the permanent medium.
Signature: `interface IWalletConfig { encoding?: string | Encoding; networkId?: string | NetworkId; resident?: boolean; resolver?: Resolver; url?: string; }encoding?: string | EncodingnetworkId?: string | NetworkIdresident?: booleanresolver?: Resolverurl?: string`
Source: web/kaspa/kaspa.d.ts:4489

IWalletCreateRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.walletCreate method. If filename is not supplied, the filename will be derived from the wallet title. If both wallet title and filename are not supplied, the wallet will be create with the default filename kaspa. Optional wallet filename Overwrite wallet data if the wallet with the same filename already exists. (Use with caution!) Optional wallet title Optional user hint Wallet encryption secret
Signature: `interface IWalletCreateRequest { filename?: string; overwriteWalletStorage?: boolean; title?: string; userHint?: string; walletSecret: string; }filename?: stringoverwriteWalletStorage?: booleantitle?: stringuserHint?: stringwalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3971
Additional Details:
Optional wallet filename
Overwrite wallet data if the wallet with the same filename already exists. (Use with caution!)
Optional wallet title
Optional user hint
Wallet encryption secret

IWalletCreateResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.walletCreate method.
Signature: `interface IWalletCreateResponse { storageDescriptor: IStorageDescriptor; walletDescriptor: IWalletDescriptor; }storageDescriptor: IStorageDescriptorwalletDescriptor: IWalletDescriptor`
Source: web/kaspa/kaspa.d.ts:3955

IWalletDescriptor
Type: interface
Section: wallet api
Description: Wallet storage information.
Signature: `interface IWalletDescriptor { filename: string; title?: string; }filename: stringtitle?: string`
Source: web/kaspa/kaspa.d.ts:4179

IWalletEnumerateRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.walletEnumerate method.
Signature: `interface IWalletEnumerateRequest {}`
Source: web/kaspa/kaspa.d.ts:4007

IWalletEnumerateResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.walletEnumerate method.
Signature: `interface IWalletEnumerateResponse { walletDescriptors: WalletDescriptor[]; }walletDescriptors: WalletDescriptor[]`
Source: web/kaspa/kaspa.d.ts:3995

IWalletExportRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.walletExport method.
Signature: `interface IWalletExportRequest { includeTransactions: boolean; walletSecret: string; }includeTransactions: booleanwalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3849

IWalletExportResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.walletExport method.
Signature: `interface IWalletExportResponse { walletData: string; }walletData: string`
Source: web/kaspa/kaspa.d.ts:3837

IWalletImportRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.walletImport method.
Signature: `interface IWalletImportRequest { walletData: string | Uint8Array; walletSecret: string; }walletData: string | Uint8ArraywalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3824

IWalletImportResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.walletImport method.
Signature: `interface IWalletImportResponse {}`
Source: web/kaspa/kaspa.d.ts:3814

IWalletOpenRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.walletOpen method.
Signature: `interface IWalletOpenRequest { accountDescriptors: boolean; filename?: string; walletSecret: string; }accountDescriptors: booleanfilename?: stringwalletSecret: string`
Source: web/kaspa/kaspa.d.ts:3941

IWalletOpenResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.walletOpen method.
Signature: `interface IWalletOpenResponse { accountDescriptors: IAccountDescriptor[]; }accountDescriptors: IAccountDescriptor[]`
Source: web/kaspa/kaspa.d.ts:3930

IWalletReloadRequest
Type: interface
Section: wallet api
Description: Argument interface for the Wallet.walletReload method. Reactivate accounts that are active before the reload.
Signature: `interface IWalletReloadRequest { reactivate: boolean; }reactivate: boolean`
Source: web/kaspa/kaspa.d.ts:3895
Additional Details:
Reactivate accounts that are active before the reload.

IWalletReloadResponse
Type: interface
Section: wallet api
Description: Return interface for the Wallet.walletReload method.
Signature: `interface IWalletReloadResponse {}`
Source: web/kaspa/kaspa.d.ts:3885

IAccountCreateRequest
Type: type
Section: wallet api
Description: Argument interface for the Wallet.accountsCreate method.
Signature: `IAccountsCreateRequest: { accountIndex?: number; accountName: string; paymentSecret?: string; prvKeyDataId: string; type: "bip32"; walletSecret: string; } | { accountName: string; ecdsa?: boolean; paymentSecret?: string; prvKeyDataId: string; type: "kaspa-keypair-standard"; walletSecret: string; }`
Source: web/kaspa/kaspa.d.ts:3594

IWalletEvent
Type: type
Section: wallet api
Description: Wallet notification event interface.
Signature: `IWalletEvent: { [K in T]: { data: WalletEventMap[K]; type: K; }}[T]`
Source: web/kaspa/kaspa.d.ts:2798

UtxoProcessorEvent
Type: type
Section: wallet api
Signature: `UtxoProcessorEvent: { [K in T]: { data: UtxoProcessorEventMap[K]; type: K; }}[T]`
Source: web/kaspa/kaspa.d.ts:2872

UtxoProcessorEventMap
Type: type
Section: wallet api
Description: UtxoProcessor notification event data map.
Signature: `UtxoProcessorEventMap: { balance: IBalanceEvent; connect: IConnectEvent; daa-score-change: IDaaScoreChangeEvent; disconnect: IDisconnectEvent; discovery: IDiscoveryEvent; error: IErrorEvent; maturity: IMaturityEvent; pending: IPendingEvent; reorg: IReorgEvent; server-status: IServerStatusEvent; stasis: IStasisEvent; sync-state: ISyncStateEvent; utxo-index-not-enabled: IUtxoIndexNotEnabledEvent; utxo-proc-error: IUtxoProcErrorEvent; utxo-proc-start: undefined; utxo-proc-stop: undefined; }`
Source: web/kaspa/kaspa.d.ts:2848

WalletEventMap
Type: type
Section: wallet api
Description: Wallet notification event data map. SeeWallet.addEventListener
Signature: `WalletEventMap: { account-activation: IAccountActivationEvent; account-create: IAccountCreateEvent; account-deactivation: IAccountDeactivationEvent; account-selection: IAccountSelectionEvent; account-update: IAccountUpdateEvent; balance: IBalanceEvent; connect: IConnectEvent; daa-score-change: IDaaScoreChangeEvent; disconnect: IDisconnectEvent; discovery: IDiscoveryEvent; error: IErrorEvent; fee-rate: IFeeRateEvent; maturity: IMaturityEvent; pending: IPendingEvent; prv-key-data-create: IPrvKeyDataCreateEvent; reorg: IReorgEvent; server-status: IServerStatusEvent; stasis: IStasisEvent; sync-state: ISyncStateEvent; utxo-index-not-enabled: IUtxoIndexNotEnabledEvent; utxo-proc-error: IUtxoProcErrorEvent; utxo-proc-start: undefined; utxo-proc-stop: undefined; wallet-close: undefined; wallet-create: IWalletCreateEvent; wallet-error: IWalletErrorEvent; wallet-hint: IWalletHintEvent; wallet-open: IWalletOpenEvent; wallet-reload: IWalletReloadEvent; }`
Source: web/kaspa/kaspa.d.ts:2762

WalletNotificationCallback
Type: type
Section: wallet api
Description: Wallet notification callback type. This type declares the callback function that is called when notification is emitted from the Wallet (and the underlying UtxoProcessor or UtxoContext subsystems). SeeWallet
Signature: `(event): void`
Source: web/kaspa/kaspa.d.ts:2816

setDefaultStorageFolder
Type: function
Section: wallet api
Description: Set a custom storage folder for the wallet SDK subsystem. Encrypted wallet files and transaction data will be stored in this folder. If not set the storage folder will default to ~/.kaspa (note that the folder is hidden). This must be called before using any other wallet SDK functions. NOTE: This function will create a folder if it doesn't exist. This function will have no effect if invoked in the browser environment. the path to the storage folder
Signature: `setDefaultStorageFolder(folder): void`
Parameters:
- folder (string): the path to the storage folder
Returns: void
Functions:
- `setDefaultStorageFolder(folder): void`
Source: web/kaspa/kaspa.d.ts:175
Additional Details:
the path to the storage folder

setDefaultWalletFile
Type: function
Section: wallet api
Description: Set the name of the default wallet file name or the localStorage key. If Wallet::open is called without a wallet file name, this name will be used. Please note that this name will be suffixed with .wallet suffix. This function should be called before using any other wallet SDK functions. the name to the wallet file or key.
Signature: `setDefaultWalletFile(folder): void`
Parameters:
- folder (string): the name to the wallet file or key.
Returns: void
Functions:
- `setDefaultWalletFile(folder): void`
Source: web/kaspa/kaspa.d.ts:190
Additional Details:
the name to the wallet file or key.

## Wallet events

IAccountActivationEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when an account has been activated.
Signature: `interface IAccountActivationEvent { ids: string[]; }ids: string[]`
Source: web/kaspa/kaspa.d.ts:2568

IAccountCreateEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when an account has been created.
Signature: `interface IAccountCreateEvent { accountDescriptor: IAccountDescriptor; }accountDescriptor: IAccountDescriptor`
Source: web/kaspa/kaspa.d.ts:2533

IAccountDeactivationEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when an account has been deactivated.
Signature: `interface IAccountDeactivationEvent { ids: string[]; }ids: string[]`
Source: web/kaspa/kaspa.d.ts:2557

IAccountSelectionEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when an account has been selected. This event is used internally in Rust SDK to track currently selected account in the Rust CLI wallet.
Signature: `interface IAccountSelectionEvent { id?: string; }id?: string`
Source: web/kaspa/kaspa.d.ts:2546

IAccountUpdateEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when an account data has been updated. This event signifies a chance in the internal account state that includes new address generation.
Signature: `interface IAccountUpdateEvent { accountDescriptor: IAccountDescriptor; }accountDescriptor: IAccountDescriptor`
Source: web/kaspa/kaspa.d.ts:2522

IBalanceEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoContext when detecting a balance change. This notification is produced during the UTXO scan, when UtxoContext detects incoming or outgoing transactions or when transactions change their state (e.g. from pending to confirmed).
Signature: `interface IBalanceEvent { balance?: IBalance; id: string; }balance?: IBalanceid: string`
Source: web/kaspa/kaspa.d.ts:2402

IConnectEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoProcessor when it negotiates a successful RPC connection.
Signature: `interface IConnectEvent { networkId: string; url?: string; }networkId: stringurl?: string`
Source: web/kaspa/kaspa.d.ts:2713

IDaaScoreChangeEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoProcessor on DAA score change.
Signature: `interface IDaaScoreChangeEvent { currentDaaScore: number; }currentDaaScore: number`
Source: web/kaspa/kaspa.d.ts:2479

IDisconnectEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoProcessor when it disconnects from RPC.
Signature: `interface IDisconnectEvent { networkId: string; url?: string; }networkId: stringurl?: string`
Source: web/kaspa/kaspa.d.ts:2701

IErrorEvent
Type: interface
Section: wallet events
Description: Emitted when detecting a general error condition.
Signature: `interface IErrorEvent { message: string; }message: string`
Source: web/kaspa/kaspa.d.ts:2388

IFeeRateEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when the fee rate changes.
Signature: `interface IFeeRateEvent { low: { feerate: bigint; seconds: bigint; }; normal: { feerate: bigint; seconds: bigint; }; priority: { feerate: bigint; seconds: bigint; }; }low: { feerate: bigint; seconds: bigint; }normal: { feerate: bigint; seconds: bigint; }priority: { feerate: bigint; seconds: bigint; }`
Source: web/kaspa/kaspa.d.ts:2625

IPrvKeyDataCreateEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when the wallet has created a private key.
Signature: `interface IPrvKeyDataCreateEvent { prvKeyDataInfo: IPrvKeyDataInfo; }prvKeyDataInfo: IPrvKeyDataInfo`
Source: web/kaspa/kaspa.d.ts:2579

IServerStatusEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoProcessor after successfully opening an RPC connection to the Kaspa node. This event contains general information about the Kaspa node.
Signature: `interface IServerStatusEvent { isSynced: boolean; networkId: string; serverVersion: string; url?: string; }isSynced: booleannetworkId: stringserverVersion: stringurl?: string`
Source: web/kaspa/kaspa.d.ts:2506

ISyncBlocksEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoProcessor when node is syncing blocks as a part of the IBD (Initial Block Download) process.
Signature: `interface ISyncBlocksEvent { blocks: number; progress: number; }blocks: numberprogress: number`
Source: web/kaspa/kaspa.d.ts:2353

ISyncHeadersEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoProcessor when node is syncing headers as a part of the IBD (Initial Block Download) process.
Signature: `interface ISyncHeadersEvent { headers: number; progress: number; }headers: numberprogress: number`
Source: web/kaspa/kaspa.d.ts:2365

ISyncProofEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoProcessor when node is syncing and processing cryptographic proofs.
Signature: `interface ISyncProofEvent { level: number; }level: number`
Source: web/kaspa/kaspa.d.ts:2377

ISyncState
Type: interface
Section: wallet events
Signature: `interface ISyncState { data?: ISyncTrustSyncEvent | ISyncUtxoSyncEvent | ISyncBlocksEvent | ISyncHeadersEvent | ISyncProofEvent; event: string; }data?: ISyncTrustSyncEvent | ISyncUtxoSyncEvent | ISyncBlocksEvent | ISyncHeadersEvent | ISyncProofEventevent: string`
Source: web/kaspa/kaspa.d.ts:2670

ISyncStateEvent
Type: interface
Section: wallet events
Signature: `interface ISyncStateEvent { syncState: ISyncState; }syncState: ISyncState`
Source: web/kaspa/kaspa.d.ts:2679

ISyncTrustSyncEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoProcessor when node is syncing cryptographic trust data as a part of the IBD (Initial Block Download) process.
Signature: `interface ISyncTrustSyncEvent { processed: number; total: number; }processed: numbertotal: number`
Source: web/kaspa/kaspa.d.ts:2329

ISyncUtxoSyncEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoProcessor when node is syncing the UTXO set as a part of the IBD (Initial Block Download) process.
Signature: `interface ISyncUtxoSyncEvent { chunks: number; total: number; }chunks: numbertotal: number`
Source: web/kaspa/kaspa.d.ts:2341

IUtxoIndexNotEnabledEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoProcessor when it detects that connected node does not have UTXO index enabled.
Signature: `interface IUtxoIndexNotEnabledEvent { url?: string; }url?: string`
Source: web/kaspa/kaspa.d.ts:2690

IUtxoProcErrorEvent
Type: interface
Section: wallet events
Description: Emitted by UtxoProcessor indicating a non-recoverable internal error. If such event is emitted, the application should stop the UtxoProcessor and restart all related subsystem. This event is emitted when the UtxoProcessor encounters a critical condition such as "out of memory".
Signature: `interface IUtxoProcErrorEvent { message: string; }message: string`
Source: web/kaspa/kaspa.d.ts:2493

IWalletCreateEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when the wallet data storage has been successfully created.
Signature: `interface IWalletCreateEvent { storageDescriptor: IStorageDescriptor; walletDescriptor: IWalletDescriptor; }storageDescriptor: IStorageDescriptorwalletDescriptor: IWalletDescriptor`
Source: web/kaspa/kaspa.d.ts:2613

IWalletErrorEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when an error occurs (for example, the wallet has failed to open).
Signature: `interface IWalletErrorEvent { message: string; }message: string`
Source: web/kaspa/kaspa.d.ts:2590

IWalletHintEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when it opens and contains an optional anti-phishing 'hint' set by the user.
Signature: `interface IWalletHintEvent { hint?: string; }hint?: string`
Source: web/kaspa/kaspa.d.ts:2659

IWalletOpenEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when the wallet is successfully opened.
Signature: `interface IWalletOpenEvent { accountDescriptors: IAccountDescriptor[]; walletDescriptor: IWalletDescriptor; }accountDescriptors: IAccountDescriptor[]walletDescriptor: IWalletDescriptor`
Source: web/kaspa/kaspa.d.ts:2647

IWalletReloadEvent
Type: interface
Section: wallet events
Description: Emitted by Wallet when the wallet is successfully reloaded.
Signature: `interface IWalletReloadEvent { accountDescriptors: IAccountDescriptor[]; walletDescriptor: IWalletDescriptor; }accountDescriptors: IAccountDescriptor[]walletDescriptor: IWalletDescriptor`
Source: web/kaspa/kaspa.d.ts:2601

IDiscoveryEvent
Type: type
Section: wallet events
Description: Emitted by UtxoContext when detecting a new transaction during the initialization phase. Discovery transactions indicate that UTXOs have been discovered during the initial UTXO scan. When receiving such notifications, the application should check its internal storage to see if the transaction already exists. If it doesn't, it should create a correspond in record and notify the user of a new transaction. This event is emitted when an address has existing UTXO entries that may have been received during previous sessions or while the wallet was offline.
Signature: `IDiscoveryEvent: TransactionRecord`
Source: web/kaspa/kaspa.d.ts:2425

IMaturityEvent
Type: type
Section: wallet events
Description: Emitted by UtxoContext when transaction is considered to be confirmed. This notification will be followed by the "balance" event.
Signature: `IMaturityEvent: TransactionRecord`
Source: web/kaspa/kaspa.d.ts:2435

IPendingEvent
Type: type
Section: wallet events
Description: Emitted by UtxoContext when detecting a pending transaction. This notification will be followed by the "balance" event.
Signature: `IPendingEvent: TransactionRecord`
Source: web/kaspa/kaspa.d.ts:2470

IReorgEvent
Type: type
Section: wallet events
Description: Emitted by UtxoContext when detecting a reorg transaction condition. A transaction is considered reorg if it has been removed from the UTXO set as a part of the network reorg process. Transactions notified with this event should be considered as invalid and should be removed from the application state. Associated UTXOs will be automatically removed from the UtxoContext state.
Signature: `IReorgEvent: TransactionRecord`
Source: web/kaspa/kaspa.d.ts:2460

IStasisEvent
Type: type
Section: wallet events
Description: Emitted by UtxoContext when detecting a new coinbase transaction. Transactions are kept in "stasis" for the half of the coinbase maturity DAA period. A wallet should ignore these transactions until they are re-broadcasted via the "pending" event.
Signature: `IStasisEvent: TransactionRecord`
Source: web/kaspa/kaspa.d.ts:2447

## Wallet sdk

BindingType
Type: enum
Section: wallet sdk
Description: Type of a binding record. SeeIBinding, ITransactionDataVariant, ITransactionRecord The data structure is associated with a wallet account. SeeIBinding, Account The data structure is associated with a user-supplied id. SeeIBinding
Signature: `Account: "account"Custom: "custom"`
Source: web/kaspa/kaspa.d.ts:2205
Additional Details:
The data structure is associated with a wallet account.
SeeIBinding, Account
The data structure is associated with a user-supplied id.

FeeSource
Type: enum
Section: wallet sdk
Description: SeeIFees, IGeneratorSettingsObject, Generator, estimateTransactions, createTransactions
Signature: `ReceiverPays: 1SenderPays: 0`
Source: web/kaspa/kaspa.d.ts:394

Language
Type: enum
Section: wallet sdk
Description: Languages supported by BIP39. Presently only English is specified by the BIP39 standard. SeeMnemonic English is presently the only supported language
Signature: `English: 0`
Source: web/kaspa/kaspa.d.ts:408
Additional Details:
SeeMnemonic
English is presently the only supported language

TransactionDataType
Type: enum
Section: wallet sdk
Description: Type of transaction data record. SeeITransactionData, ITransactionDataVariant, ITransactionRecord Transaction is a batch transaction (compounding UTXOs to an internal change address). SeeITransactionDataBatch Transaction is a change transaction and its UTXO entries are added to the UTXO set. SeeITransactionDataChange Observed transaction is not performed by the wallet subsystem but is executed against the address set managed by the wallet subsystem. SeeITransactionDataExternal Transaction has been received and its UTXO entries are added to the pending or mature UTXO set. SeeITransactionDataIncoming Transaction is outgoing and its UTXO entries are removed from the UTXO set. SeeITransactionDataOutgoing Transaction has been invalidated due to a BlockDAG reorganization. Such transaction is no longer valid and its UTXO entries are removed. SeeITransactionDataReorg Transaction is in stasis and its UTXO entries are not yet added to the UTXO set. This event is generated for Coinbase transactions only. SeeITransactionDataStasis Transaction is an incoming transfer from another UtxoContext managed by the UtxoProcessor. When operating under the integrated wallet, these are transfers between different wallet accounts. SeeITransactionDataTransferIncoming Transaction is an outgoing transfer to another UtxoContext managed by the UtxoProcessor. When operating under the integrated wallet, these are transfers between different wallet accounts. SeeITransactionDataTransferOutgoing
Signature: `Batch: "batch"Change: "change"External: "external"Incoming: "incoming"Outgoing: "outgoing"Reorg: "reorg"Stasis: "stasis"TransferIncoming: "transfer-incoming"TransferOutgoing: "transfer-outgoing"`
Source: web/kaspa/kaspa.d.ts:4214
Additional Details:
Transaction is a batch transaction (compounding UTXOs to an internal change address).
SeeITransactionDataBatch
Transaction is a change transaction and its UTXO entries are added to the UTXO set.
SeeITransactionDataChange
Observed transaction is not performed by the wallet subsystem but is executed against the address set managed by the wallet subsystem.
SeeITransactionDataExternal
Transaction has been received and its UTXO entries are added to the pending or mature UTXO set.
SeeITransactionDataIncoming
Transaction is outgoing and its UTXO entries are removed from the UTXO set.
SeeITransactionDataOutgoing
Transaction has been invalidated due to a BlockDAG reorganization. Such transaction is no longer valid and its UTXO entries are removed.
SeeITransactionDataReorg
Transaction is in stasis and its UTXO entries are not yet added to the UTXO set. This event is generated for Coinbase transactions only.
SeeITransactionDataStasis
Transaction is an incoming transfer from another UtxoContext managed by the UtxoProcessor. When operating under the integrated wallet, these are transfers between different wallet accounts.
SeeITransactionDataTransferIncoming
Transaction is an outgoing transfer to another UtxoContext managed by the UtxoProcessor. When operating under the integrated wallet, these are transfers between different wallet accounts.
SeeITransactionDataTransferOutgoing

TransactionKind
Type: enum
Section: wallet sdk
Signature: `Batch: "batch"Change: "change"External: "external"Incoming: "incoming"Outgoing: "outgoing"Reorg: "reorg"Stasis: "stasis"TransferIncoming: "transfer-incoming"TransferOutgoing: "transfer-outgoing"`
Source: web/kaspa/kaspa.d.ts:4578

UtxoProcessorEventType
Type: enum
Section: wallet sdk
Description: Events emitted by the UtxoProcessor.
Signature: `Balance: "balance"Connect: "connect"DaaScoreChange: "daa-score-change"Disconnect: "disconnect"Discovery: "discovery"Error: "error"Maturity: "maturity"Pending: "pending"Reorg: "reorg"Stasis: "stasis"SyncState: "sync-state"UtxoIndexNotEnabled: "utxo-index-not-enabled"UtxoProcError: "utxo-proc-error"UtxoProcStart: "utxo-proc-start"UtxoProcStop: "utxo-proc-stop"`
Source: web/kaspa/kaspa.d.ts:2825

AccountKind
Type: class
Section: wallet sdk
Description: Account kind is a string signature that represents an account type. Account kind is used to identify the account type during serialization, deserialization and various API calls.
Signature: `new AccountKind(kind): AccountKindfree(): voidtoString(): string`
Source: web/kaspa/kaspa.d.ts:5052

Balance
Type: class
Section: wallet sdk
Description: Represents a UtxoContext (account) balance. SeeIBalance, UtxoContext Confirmed amount of funds available for spending. Amount of funds that are being send and are not yet accepted by the network. Amount of funds that are being received and are not yet confirmed.
Signature: `new Balance(): Balancefree(): voidtoBalanceStrings(network_type): BalanceStrings`
Source: web/kaspa/kaspa.d.ts:5133
Additional Details:
Confirmed amount of funds available for spending.
Amount of funds that are being send and are not yet accepted by the network.
Amount of funds that are being received and are not yet confirmed.

BalanceStrings
Type: class
Section: wallet sdk
Description: Formatted string representation of the Balance. The value is formatted as 123,456.789.
Signature: `new BalanceStrings(): BalanceStringsfree(): void`
Source: web/kaspa/kaspa.d.ts:5158

CryptoBox
Type: class
Section: wallet sdk
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new CryptoBox(secretKey, peerPublicKey): CryptoBoxdecrypt(base64string): stringencrypt(plaintext): stringfree(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:5233
Additional Details:
CryptoBox allows for encrypting and decrypting messages using the crypto_box crate. https://docs.rs/crypto_box/0.9.1/crypto_box/
Return stringified version of self.

CryptoBoxPrivateKey
Type: class
Section: wallet sdk
Signature: `new CryptoBoxPrivateKey(secretKey): CryptoBoxPrivateKeyfree(): voidto_public_key(): CryptoBoxPublicKey`
Source: web/kaspa/kaspa.d.ts:5251

CryptoBoxPublicKey
Type: class
Section: wallet sdk
Signature: `new CryptoBoxPublicKey(publicKey): CryptoBoxPublicKeyfree(): voidtoString(): string`
Source: web/kaspa/kaspa.d.ts:5259

DerivationPath
Type: class
Section: wallet sdk
Description: Is this derivation path empty? (i.e. the root) Get the count of [ChildNumber] values in this derivation path. Get the parent [DerivationPath] for the current one. Returns Undefined if this is already the root path. Push a [ChildNumber] onto an existing derivation path.
Signature: `new DerivationPath(path): DerivationPathfree(): voidisEmpty(): booleanlength(): numberparent(): DerivationPathpush(child_number, hardened?): voidtoString(): string`
Source: web/kaspa/kaspa.d.ts:5270
Additional Details:
Key derivation path
Get the count of [ChildNumber] values in this derivation path.
Get the parent [DerivationPath] for the current one. Returns Undefined if this is already the root path.
Push a [ChildNumber] onto an existing derivation path.

Generator
Type: class
Section: wallet sdk
Description: Generate next transaction
Signature: `new Generator(args): Generatorestimate(): Promisefree(): voidnext(): Promisesummary(): GeneratorSummary`
Source: web/kaspa/kaspa.d.ts:5352
Additional Details:
Generator is a type capable of generating transactions based on a supplied set of UTXO entries or a UTXO entry producer (such as UtxoContext). The Generator accumulates UTXO entries until it can generate a transaction that meets the requested amount or until the total mass of created inputs exceeds the allowed transaction mass, at which point it will produce a compound transaction by forwarding all selected UTXO entries to the supplied change address and prepare to start generating a new transaction. Such sequence of daisy-chained transactions is known as a "batch". Each compound transaction results in a new UTXO, which is immediately reused in the subsequent transaction. The Generator constructor accepts a single IGeneratorSettingsObject object. let generator = new Generator({ utxoEntries : [...], changeAddress : "kaspa:...", outputs : [ { amount : kaspaToSompi(10.0), address: "kaspa:..."}, { amount : kaspaToSompi(20.0), address: "kaspa:..."}, ... ], priorityFee : 1000n,});let pendingTransaction;while(pendingTransaction = await generator.next()) { await pendingTransaction.sign(privateKeys); await pendingTransaction.submit(rpc);}let summary = generator.summary();console.log(summary); Copy SeeIGeneratorSettingsObject, PendingTransaction, UtxoContext, createTransactions, estimateTransactions,
Generator is a type capable of generating transactions based on a supplied set of UTXO entries or a UTXO entry producer (such as UtxoContext). The Generator accumulates UTXO entries until it can generate a transaction that meets the requested amount or until the total mass of created inputs exceeds the allowed transaction mass, at which point it will produce a compound transaction by forwarding all selected UTXO entries to the supplied change address and prepare to start generating a new transaction. Such sequence of daisy-chained transactions is known as a "batch". Each compound transaction results in a new UTXO, which is immediately reused in the subsequent transaction. The Generator constructor accepts a single IGeneratorSettingsObject object. let generator = new Generator({ utxoEntries : [...], changeAddress : "kaspa:...", outputs : [ { amount : kaspaToSompi(10.0), address: "kaspa:..."}, { amount : kaspaToSompi(20.0), address: "kaspa:..."}, ... ], priorityFee : 1000n,});let pendingTransaction;while(pendingTransaction = await generator.next()) { await pendingTransaction.sign(privateKeys); await pendingTransaction.submit(rpc);}let summary = generator.summary();console.log(summary); Copy
SeeIGeneratorSettingsObject, PendingTransaction, UtxoContext, createTransactions, estimateTransactions,

GeneratorSummary
Type: class
Section: wallet sdk
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new GeneratorSummary(): GeneratorSummaryfree(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:5372
Additional Details:
A class containing a summary produced by transaction Generator. This class contains the number of transactions, the aggregated fees, the aggregated UTXOs and the final transaction amount that includes both network and QoS (priority) fees. SeecreateTransactions, IGeneratorSettingsObject, Generator
A class containing a summary produced by transaction Generator. This class contains the number of transactions, the aggregated fees, the aggregated UTXOs and the final transaction amount that includes both network and QoS (priority) fees.
SeecreateTransactions, IGeneratorSettingsObject, Generator
Return stringified version of self.

Keypair
Type: class
Section: wallet sdk
Description: Get the [Address] of this Keypair's [PublicKey]. Receives a NetworkType to determine the prefix of the address. JavaScript: let address = keypair.toAddress(NetworkType.MAINNET);. Get ECDSA [Address] of this Keypair's [PublicKey]. Receives a NetworkType to determine the prefix of the address. JavaScript: let address = keypair.toAddress(NetworkType.MAINNET);. Return copy of self without private attributes. Return stringified version of self. Create a new [Keypair] from a [PrivateKey]. JavaScript: let privkey = new PrivateKey(hexString); let keypair = privkey.toKeypair();. Create a new random [Keypair]. JavaScript: let keypair = Keypair::random();.
Signature: `new Keypair(): Keypairfree(): voidtoAddress(network): AddresstoAddressECDSA(network): AddresstoJSON(): ObjecttoString(): stringfromPrivateKey(secret_key): Keypairrandom(): Keypair`
Source: web/kaspa/kaspa.d.ts:5460
Additional Details:
Data structure that contains a secret and public keys.
Get the [PrivateKey] of this [Keypair].
Get the [PublicKey] of this [Keypair].
Get the XOnlyPublicKey of this [Keypair].
Get ECDSA [Address] of this Keypair's [PublicKey]. Receives a NetworkType to determine the prefix of the address. JavaScript: let address = keypair.toAddress(NetworkType.MAINNET);.
Return copy of self without private attributes.
Return stringified version of self.
Create a new [Keypair] from a [PrivateKey]. JavaScript: let privkey = new PrivateKey(hexString); let keypair = privkey.toKeypair();.
Create a new random [Keypair]. JavaScript: let keypair = Keypair::random();.

Mnemonic
Type: class
Section: wallet sdk
Description: Return copy of self without private attributes. Return stringified version of self. Validate mnemonic phrase. Returns true if the phrase is valid, false otherwise.
Signature: `new Mnemonic(phrase, language?): Mnemonicfree(): voidtoJSON(): ObjecttoSeed(password?): stringtoString(): stringrandom(word_count?): Mnemonicvalidate(phrase, language?): boolean`
Source: web/kaspa/kaspa.d.ts:5519
Additional Details:
BIP39 mnemonic phrases: sequences of words representing cryptographic keys.
Return stringified version of self.
Validate mnemonic phrase. Returns true if the phrase is valid, false otherwise.

PaymentOutput
Type: class
Section: wallet sdk
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new PaymentOutput(address, amount): PaymentOutputfree(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:5670
Additional Details:
A Rust data structure representing a single payment output containing a destination address and amount.
Return stringified version of self.

PaymentOutputs
Type: class
Section: wallet sdk
Signature: `new PaymentOutputs(output_array): PaymentOutputsfree(): void`
Source: web/kaspa/kaspa.d.ts:5687

PendingTransaction
Type: class
Section: wallet sdk
Description: List of unique addresses used by transaction inputs. This method can be used to determine addresses used by transaction inputs in order to select private keys needed for transaction signing. Creates and returns a signature for the input at the specified index. Sets a signature to the input at the specified index. Provides a list of UTXO entries used by the transaction. Serializes the transaction to a JSON string. The schema of the JSON is defined by ISerializableTransaction. Once serialized, the transaction can be deserialized using Transaction.deserializeFromJSON. SeeTransaction, ISerializableTransaction Serializes the transaction to a pure JavaScript Object. The schema of the JavaScript object is defined by ISerializableTransaction. See ISerializableTransaction Transaction, ISerializableTransaction Serializes the transaction to a "Safe" JSON schema where it converts all bigint values to string to avoid potential client-side precision loss. Once serialized, the transaction can be deserialized using Transaction.deserializeFromSafeJSON. SeeTransaction, ISerializableTransaction Signs transaction with supplied [Array] or [PrivateKey] or an array of raw private key bytes (encoded as Uint8Array or as hex strings) Signs the input at the specified index with the supplied private key and an optional SighashType. Submit transaction to the supplied [RpcClient] IMPORTANT: This method will remove UTXOs from the associated UtxoContext if one was used to create the transaction and will return UTXOs back to UtxoContext in case of a failed submission. ImportantMake sure to consume the returned txid value. Always invoke this method as follows let txid = await pendingTransaction.submit(rpc);. If you do not consume the returned value and the rpc object is temporary, the GC will collect the rpc object passed to submit() potentially causing a panic. SeeRpcClient.submitTransaction Return copy of self without private attributes. Return stringified version of self.
Signature: `new PendingTransaction(): PendingTransactionaddresses(): any[]createInputSignature(input_index, private_key, sighash_type?): stringfillInput(input_index, signature_script): voidfree(): voidgetUtxoEntries(): any[]serializeToJSON(): stringserializeToObject(): Transaction | ITransactionserializeToSafeJSON(): stringsign(js_value, check_fully_signed?): voidsignInput(input_index, private_key, sighash_type?): voidsubmit(wasm_rpc_client): PromisetoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:5694
Additional Details:
Total aggregate input amount.
Total aggregate output amount.
Change amount (if any).
Total transaction fees (network fees + priority fees).
Transaction Id
Calculated transaction mass.
Minimum number of signatures required by the transaction. (as specified during the transaction creation).
Total amount transferred to the destination (aggregate output - change).
Returns encapsulated network [Transaction]
Transaction type ("batch" or "final").
Creates and returns a signature for the input at the specified index.
Sets a signature to the input at the specified index.
Provides a list of UTXO entries used by the transaction.
Serializes the transaction to a JSON string. The schema of the JSON is defined by ISerializableTransaction. Once serialized, the transaction can be deserialized using Transaction.deserializeFromJSON.
SeeTransaction, ISerializableTransaction
Serializes the transaction to a pure JavaScript Object. The schema of the JavaScript object is defined by ISerializableTransaction.
See ISerializableTransaction Transaction, ISerializableTransaction
Serializes the transaction to a "Safe" JSON schema where it converts all bigint values to string to avoid potential client-side precision loss. Once serialized, the transaction can be deserialized using Transaction.deserializeFromSafeJSON.
Signs transaction with supplied [Array] or [PrivateKey] or an array of raw private key bytes (encoded as Uint8Array or as hex strings)
Signs the input at the specified index with the supplied private key and an optional SighashType.
Submit transaction to the supplied [RpcClient] IMPORTANT: This method will remove UTXOs from the associated UtxoContext if one was used to create the transaction and will return UTXOs back to UtxoContext in case of a failed submission. ImportantMake sure to consume the returned txid value. Always invoke this method as follows let txid = await pendingTransaction.submit(rpc);. If you do not consume the returned value and the rpc object is temporary, the GC will collect the rpc object passed to submit() potentially causing a panic.
SeeRpcClient.submitTransaction
Return copy of self without private attributes.
Return stringified version of self.

PrivateKey
Type: class
Section: wallet sdk
Description: Create a new [PrivateKey] from a hex-encoded string. Get the [Address] of the PublicKey generated from this PrivateKey. Receives a NetworkType to determine the prefix of the address. JavaScript: let address = privateKey.toAddress(NetworkType.MAINNET);. Get ECDSA [Address] of the PublicKey generated from this PrivateKey. Receives a NetworkType to determine the prefix of the address. JavaScript: let address = privateKey.toAddress(NetworkType.MAINNET);. Generate a [Keypair] from this [PrivateKey]. Returns the [PrivateKey] key encoded as a hex string.
Signature: `new PrivateKey(key): PrivateKeyfree(): voidtoAddress(network): AddresstoAddressECDSA(network): AddresstoKeypair(): KeypairtoPublicKey(): PublicKeytoString(): string`
Source: web/kaspa/kaspa.d.ts:5855
Additional Details:
Data structure that envelops a Private Key.
Get the [Address] of the PublicKey generated from this PrivateKey. Receives a NetworkType to determine the prefix of the address. JavaScript: let address = privateKey.toAddress(NetworkType.MAINNET);.
Get ECDSA [Address] of the PublicKey generated from this PrivateKey. Receives a NetworkType to determine the prefix of the address. JavaScript: let address = privateKey.toAddress(NetworkType.MAINNET);.
Generate a [Keypair] from this [PrivateKey].
Returns the [PrivateKey] key encoded as a hex string.

PrivateKeyGenerator
Type: class
Section: wallet sdk
Description: Helper class to generate private keys from an extended private key (XPrv). This class accepts the master Kaspa XPrv string (e.g. xprv1...) and generates private keys for the receive and change paths given the pre-set parameters such as account index, multisig purpose and cosigner index. Please note that in Kaspa master private keys use kprv prefix. SeePublicKeyGenerator, XPub, XPrv, Mnemonic
Signature: `new PrivateKeyGenerator(xprv, is_multisig, account_index, cosigner_index?): PrivateKeyGeneratorchangeKey(index): PrivateKeyfree(): voidreceiveKey(index): PrivateKey`
Source: web/kaspa/kaspa.d.ts:5897
Additional Details:
SeePublicKeyGenerator, XPub, XPrv, Mnemonic

PrvKeyDataInfo
Type: class
Section: wallet sdk
Signature: `new PrvKeyDataInfo(): PrvKeyDataInfofree(): voidsetName(_name): void`
Source: web/kaspa/kaspa.d.ts:5912

PublicKey
Type: class
Section: wallet sdk
Description: Create a new [PublicKey] from a hex-encoded string. Compute a 4-byte key fingerprint for this public key as a hex string. Default implementation uses RIPEMD160(SHA256(public_key)). Get the [Address] of this PublicKey. Receives a [NetworkType] to determine the prefix of the address. JavaScript: let address = publicKey.toAddress(NetworkType.MAINNET);. Get ECDSA [Address] of this PublicKey. Receives a [NetworkType] to determine the prefix of the address. JavaScript: let address = publicKey.toAddress(NetworkType.MAINNET);.
Signature: `new PublicKey(key): PublicKeyfingerprint(): stringfree(): voidtoAddress(network): AddresstoAddressECDSA(network): AddresstoString(): stringtoXOnlyPublicKey(): XOnlyPublicKey`
Source: web/kaspa/kaspa.d.ts:5925
Additional Details:
Data structure that envelopes a PublicKey. Only supports Schnorr-based addresses.
Compute a 4-byte key fingerprint for this public key as a hex string. Default implementation uses RIPEMD160(SHA256(public_key)).
Get the [Address] of this PublicKey. Receives a [NetworkType] to determine the prefix of the address. JavaScript: let address = publicKey.toAddress(NetworkType.MAINNET);.
Get ECDSA [Address] of this PublicKey. Receives a [NetworkType] to determine the prefix of the address. JavaScript: let address = publicKey.toAddress(NetworkType.MAINNET);.

PublicKeyGenerator
Type: class
Section: wallet sdk
Description: Generate a single Change Address derivation at a given index. Generate a single Change Address derivation at a given index and return it as a string. Generate a range of Change Address derivations and return them as strings. Generate Change Address derivations for a given range. Generate a single Change Public Key derivation at a given index. Generate a single Change Public Key derivation at a given index and return it as a string. Generate Change Public Key derivations for a given range. Generate a range of Change Public Key derivations and return them as strings. Generate a single Receive Address derivation at a given index. Generate a single Receive Address derivation at a given index and return it as a string. Generate a range of Receive Address derivations and return them as strings. Generate Receive Address derivations for a given range. Generate a single Receive Public Key derivation at a given index. Generate a single Receive Public Key derivation at a given index and return it as a string. Generate Receive Public Key derivations for a given range. Generate a range of Receive Public Key derivations and return them as strings.
Signature: `new PublicKeyGenerator(): PublicKeyGeneratorchangeAddress(networkType, index): AddresschangeAddressAsString(networkType, index): stringchangeAddressAsStrings(networkType, start, end): string[]changeAddresses(networkType, start, end): Address[]changePubkey(index): PublicKeychangePubkeyAsString(index): stringchangePubkeys(start, end): (string | PublicKey)[]changePubkeysAsStrings(start, end): string[]free(): voidreceiveAddress(networkType, index): AddressreceiveAddressAsString(networkType, index): stringreceiveAddressAsStrings(networkType, start, end): string[]receiveAddresses(networkType, start, end): Address[]receivePubkey(index): PublicKeyreceivePubkeyAsString(index): stringreceivePubkeys(start, end): (string | PublicKey)[]receivePubkeysAsStrings(start, end): string[]toString(): stringfromMasterXPrv(xprv, is_multisig, account_index, cosigner_index?): PublicKeyGeneratorfromXPub(kpub, cosigner_index?): PublicKeyGenerator`
Source: web/kaspa/kaspa.d.ts:5961
Additional Details:
Helper class to generate public keys from an extended public key (XPub) that has been derived up to the co-signer index. Please note that in Kaspa master public keys use kpub prefix. SeePrivateKeyGenerator, XPub, XPrv, Mnemonic
Helper class to generate public keys from an extended public key (XPub) that has been derived up to the co-signer index. Please note that in Kaspa master public keys use kpub prefix.
SeePrivateKeyGenerator, XPub, XPrv, Mnemonic
Generate a range of Change Address derivations and return them as strings.
Generate Change Address derivations for a given range.
Generate a single Change Public Key derivation at a given index.
Generate a single Change Public Key derivation at a given index and return it as a string.
Generate Change Public Key derivations for a given range.
Generate a range of Change Public Key derivations and return them as strings.
Generate a single Receive Address derivation at a given index.
Generate a single Receive Address derivation at a given index and return it as a string.
Generate a range of Receive Address derivations and return them as strings.
Generate Receive Address derivations for a given range.
Generate a single Receive Public Key derivation at a given index.
Generate a single Receive Public Key derivation at a given index and return it as a string.
Generate Receive Public Key derivations for a given range.
Generate a range of Receive Public Key derivations and return them as strings.

Storage
Type: class
Section: wallet sdk
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new Storage(): Storagefree(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:6769
Additional Details:
Wallet file storage interface
Return stringified version of self.

TransactionRecord
Type: class
Section: wallet sdk
Description: Unix time in milliseconds Unix time in milliseconds Check if the transaction record has the given address within the associated UTXO set. Serialize the transaction record to a JavaScript object. Return copy of self without private attributes. Return stringified version of self.
Signature: `new TransactionRecord(): TransactionRecordget metadata(): stringset metadata(value): voidget note(): stringset note(value): voidget unixtimeMsec(): bigintset unixtimeMsec(value): voidfree(): voidhasAddress(address): booleanmaturityProgress(currentDaaScore): stringserialize(): anytoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:6936
Additional Details:
Check if the transaction record has the given address within the associated UTXO set.
Serialize the transaction record to a JavaScript object.
Return copy of self without private attributes.
Return stringified version of self.

TransactionSigningHash
Type: class
Section: wallet sdk
Signature: `new TransactionSigningHash(): TransactionSigningHashfinalize(): stringfree(): voidupdate(data): void`
Source: web/kaspa/kaspa.d.ts:6993

TransactionSigningHashECDSA
Type: class
Section: wallet sdk
Signature: `new TransactionSigningHashECDSA(): TransactionSigningHashECDSAfinalize(): stringfree(): voidupdate(data): void`
Source: web/kaspa/kaspa.d.ts:7002

UtxoContext
Type: class
Section: wallet sdk
Description: Clear the UtxoContext. Unregister all addresses and clear all UTXO entries. IMPORTANT: This function must be manually called when disconnecting or re-connecting to the node (followed by address re-registration). Returns a range of mature UTXO entries that are currently managed by the UtxoContext and are available for spending. NOTE: This function is provided for informational purposes only. You should not manage UTXO entries manually if they are owned by UtxoContext. The resulting range may be less than requested if UTXO entries have been spent asynchronously by UtxoContext or by other means (i.e. UtxoContext has received notification from the network that UtxoEntries have been spent externally). UtxoEntries are kept in in the ascending sorted order by their amount. Returns pending UTXO entries that are currently managed by the UtxoContext. Return copy of self without private attributes. Return stringified version of self. Performs a scan of the given addresses and registers them in the context for event notifications. Unregister a list of addresses from the context. This will stop tracking of these addresses.
Signature: `new UtxoContext(js_value): UtxoContextclear(): Promisefree(): voidgetMatureRange(from, to): UtxoEntryReference[]getPending(): UtxoEntryReference[]toJSON(): ObjecttoString(): stringtrackAddresses(addresses, optional_current_daa_score?): PromiseunregisterAddresses(addresses): Promise`
Source: web/kaspa/kaspa.d.ts:7094
Additional Details:
UtxoContext is a class that provides a way to track addresses activity on the Kaspa network. When an address is registered with UtxoContext it aggregates all UTXO entries for that address and emits events when any activity against these addresses occurs. UtxoContext constructor accepts IUtxoContextArgs interface that can contain an optional id parameter. If supplied, this id parameter will be included in all notifications emitted by the UtxoContext as well as included as a part of ITransactionRecord emitted when transactions occur. If not provided, a random id will be generated. This id typically represents an account id in the context of a wallet application. The integrated Wallet API uses UtxoContext to represent wallet accounts. Exchanges: if you are building an exchange wallet, it is recommended to use UtxoContext for each user account. This way you can track and isolate each user activity (use address set, balances, transaction records). UtxoContext maintains a real-time cumulative balance of all addresses registered against it and provides balance update notification events when the balance changes. The UtxoContext balance is comprised of 3 values: mature: amount of funds available for spending. pending: amount of funds that are being received. outgoing: amount of funds that are being sent but are not yet accepted by the network. Please see IBalance interface for more details. UtxoContext can be supplied as a UTXO source to the transaction Generator allowing the Generator to create transactions using the UTXO entries it manages. IMPORTANT: UtxoContext is meant to represent a single account. It is not designed to be used as a global UTXO manager for all addresses in a very large wallet (such as an exchange wallet). For such use cases, it is recommended to perform manual UTXO management by subscribing to UTXO notifications using RpcClient.subscribeUtxosChanged and RpcClient.getUtxosByAddresses. SeeIUtxoContextArgs, UtxoProcessor, Generator, createTransactions, IBalance, IBalanceEvent, IPendingEvent, IReorgEvent, IStasisEvent, IMaturityEvent, IDiscoveryEvent, IBalanceEvent, ITransactionRecord
UtxoContext is a class that provides a way to track addresses activity on the Kaspa network. When an address is registered with UtxoContext it aggregates all UTXO entries for that address and emits events when any activity against these addresses occurs. UtxoContext constructor accepts IUtxoContextArgs interface that can contain an optional id parameter. If supplied, this id parameter will be included in all notifications emitted by the UtxoContext as well as included as a part of ITransactionRecord emitted when transactions occur. If not provided, a random id will be generated. This id typically represents an account id in the context of a wallet application. The integrated Wallet API uses UtxoContext to represent wallet accounts. Exchanges: if you are building an exchange wallet, it is recommended to use UtxoContext for each user account. This way you can track and isolate each user activity (use address set, balances, transaction records). UtxoContext maintains a real-time cumulative balance of all addresses registered against it and provides balance update notification events when the balance changes. The UtxoContext balance is comprised of 3 values: mature: amount of funds available for spending. pending: amount of funds that are being received. outgoing: amount of funds that are being sent but are not yet accepted by the network. Please see IBalance interface for more details. UtxoContext can be supplied as a UTXO source to the transaction Generator allowing the Generator to create transactions using the UTXO entries it manages. IMPORTANT: UtxoContext is meant to represent a single account. It is not designed to be used as a global UTXO manager for all addresses in a very large wallet (such as an exchange wallet). For such use cases, it is recommended to perform manual UTXO management by subscribing to UTXO notifications using RpcClient.subscribeUtxosChanged and RpcClient.getUtxosByAddresses.
SeeIUtxoContextArgs, UtxoProcessor, Generator, createTransactions, IBalance, IBalanceEvent, IPendingEvent, IReorgEvent, IStasisEvent, IMaturityEvent, IDiscoveryEvent, IBalanceEvent, ITransactionRecord
Current Balance of the UtxoContext.
Current BalanceStrings of the UtxoContext.
Obtain the length of the mature UTXO entries that are currently managed by the UtxoContext.
Returns a range of mature UTXO entries that are currently managed by the UtxoContext and are available for spending. NOTE: This function is provided for informational purposes only. You should not manage UTXO entries manually if they are owned by UtxoContext. The resulting range may be less than requested if UTXO entries have been spent asynchronously by UtxoContext or by other means (i.e. UtxoContext has received notification from the network that UtxoEntries have been spent externally). UtxoEntries are kept in in the ascending sorted order by their amount.
Returns pending UTXO entries that are currently managed by the UtxoContext.
Return copy of self without private attributes.
Return stringified version of self.
Performs a scan of the given addresses and registers them in the context for event notifications.
Unregister a list of addresses from the context. This will stop tracking of these addresses.

UtxoEntries
Type: class
Section: wallet sdk
Description: Create a new UtxoEntries struct with a set of entries. Sort the contained entries by amount. Please note that this function is not intended for use with large UTXO sets as it duplicates the whole contained UTXO set while sorting. Return copy of self without private attributes. Return stringified version of self.
Signature: `new UtxoEntries(js_value): UtxoEntriesamount(): bigintfree(): voidsort(): voidtoJSON(): ObjecttoString(): string`
Source: web/kaspa/kaspa.d.ts:7163
Additional Details:
A simple collection of UTXO entries. This struct is used to retain a set of UTXO entries in the WASM memory for faster processing. This struct keeps a list of entries represented by UtxoEntryReference struct. This data structure is used internally by the framework, but is exposed for convenience. Please consider using UtxoContext instead.
Sort the contained entries by amount. Please note that this function is not intended for use with large UTXO sets as it duplicates the whole contained UTXO set while sorting.
Return copy of self without private attributes.
Return stringified version of self.

UtxoEntry
Type: class
Section: wallet sdk
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new UtxoEntry(): UtxoEntryget address(): Addressset address(value): voidfree(): voidtoJSON(): ObjecttoString(): stringtoString(): string`
Source: web/kaspa/kaspa.d.ts:7191
Additional Details:
[UtxoEntry] struct represents a client-side UTXO entry.
Return stringified version of self.

UtxoEntryReference
Type: class
Section: wallet sdk
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new UtxoEntryReference(): UtxoEntryReferencefree(): voidtoJSON(): ObjecttoString(): stringtoString(): string`
Source: web/kaspa/kaspa.d.ts:7216
Additional Details:
[Arc] reference to a [UtxoEntry] used by the wallet subsystems.
Return stringified version of self.

UtxoProcessor
Type: class
Section: wallet sdk
Description: UtxoProcessor constructor. SeeIUtxoProcessorArgs Starts the UtxoProcessor and begins processing UTXO and other notifications. Stops the UtxoProcessor and ends processing UTXO and other notifications. Return copy of self without private attributes. Return stringified version of self. Set the coinbase transaction maturity period DAA score for a given network. This controls the DAA period after which the user transactions are considered mature and the wallet subsystem emits the transaction maturity event. See TransactionRecord IUtxoProcessorEvent Set the user transaction maturity period DAA score for a given network. This controls the DAA period after which the user transactions are considered mature and the wallet subsystem emits the transaction maturity event. See TransactionRecord IUtxoProcessorEvent
Signature: `new UtxoProcessor(js_value): UtxoProcessoraddEventListener(callback): voidaddEventListener(event, callback?): anyfree(): voidremoveEventListener(event, callback?): voidsetNetworkId(network_id): voidstart(): Promisestop(): PromisetoJSON(): ObjecttoString(): stringsetCoinbaseTransactionMaturityDAA(network_id, value): voidsetUserTransactionMaturityDAA(network_id, value): void`
Source: web/kaspa/kaspa.d.ts:4502
Additional Details:
UtxoProcessor class is the main coordinator that manages UTXO processing between multiple UtxoContext instances. It acts as a bridge between the Kaspa node RPC connection, address subscriptions and UtxoContext instances. SeeIUtxoProcessorArgs, UtxoContext, RpcClient, NetworkId, IConnectEvent IDisconnectEvent
UtxoProcessor class is the main coordinator that manages UTXO processing between multiple UtxoContext instances. It acts as a bridge between the Kaspa node RPC connection, address subscriptions and UtxoContext instances.
SeeIUtxoProcessorArgs, UtxoContext, RpcClient, NetworkId, IConnectEvent IDisconnectEvent
Starts the UtxoProcessor and begins processing UTXO and other notifications.
Stops the UtxoProcessor and ends processing UTXO and other notifications.
Return copy of self without private attributes.
Return stringified version of self.
Set the coinbase transaction maturity period DAA score for a given network. This controls the DAA period after which the user transactions are considered mature and the wallet subsystem emits the transaction maturity event.
See TransactionRecord IUtxoProcessorEvent
Set the user transaction maturity period DAA score for a given network. This controls the DAA period after which the user transactions are considered mature and the wallet subsystem emits the transaction maturity event.

XOnlyPublicKey
Type: class
Section: wallet sdk
Description: Get the [Address] of this XOnlyPublicKey. Receives a [NetworkType] to determine the prefix of the address. JavaScript: let address = xOnlyPublicKey.toAddress(NetworkType.MAINNET);. Get ECDSA [Address] of this XOnlyPublicKey. Receives a [NetworkType] to determine the prefix of the address. JavaScript: let address = xOnlyPublicKey.toAddress(NetworkType.MAINNET);.
Signature: `new XOnlyPublicKey(key): XOnlyPublicKeyfree(): voidtoAddress(network): AddresstoAddressECDSA(network): AddresstoString(): stringfromAddress(address): XOnlyPublicKey`
Source: web/kaspa/kaspa.d.ts:7633
Additional Details:
Data structure that envelopes a XOnlyPublicKey. XOnlyPublicKey is used as a payload part of the Address. SeePublicKey
Data structure that envelopes a XOnlyPublicKey. XOnlyPublicKey is used as a payload part of the Address.
SeePublicKey
Get ECDSA [Address] of this XOnlyPublicKey. Receives a [NetworkType] to determine the prefix of the address. JavaScript: let address = xOnlyPublicKey.toAddress(NetworkType.MAINNET);.

XPrv
Type: class
Section: wallet sdk
Description: Return copy of self without private attributes. Return stringified version of self. Create XPrv from xprvxxxx.. string
Signature: `new XPrv(seed): XPrvderiveChild(child_number, hardened?): XPrvderivePath(path): XPrvfree(): voidintoString(prefix): stringtoJSON(): ObjecttoPrivateKey(): PrivateKeytoString(): stringtoString(): stringtoXPub(): XPubfromXPrv(xprv): XPrv`
Source: web/kaspa/kaspa.d.ts:7663
Additional Details:
Extended private key (XPrv). This class allows accepts a master seed and provides functions for derivation of dependent child private keys. Please note that Kaspa extended private keys use kprv prefix. SeePrivateKeyGenerator, PublicKeyGenerator, XPub, Mnemonic
Extended private key (XPrv). This class allows accepts a master seed and provides functions for derivation of dependent child private keys. Please note that Kaspa extended private keys use kprv prefix.
SeePrivateKeyGenerator, PublicKeyGenerator, XPub, Mnemonic
Return stringified version of self.
Create XPrv from xprvxxxx.. string

XPub
Type: class
Section: wallet sdk
Description: Return copy of self without private attributes. Return stringified version of self.
Signature: `new XPub(xpub): XPubderiveChild(child_number, hardened?): XPubderivePath(path): XPubfree(): voidintoString(prefix): stringtoJSON(): ObjecttoPublicKey(): PublicKeytoString(): string`
Source: web/kaspa/kaspa.d.ts:7703
Additional Details:
Extended public key (XPub). This class allows accepts another XPub and and provides functions for derivation of dependent child public keys. Please note that Kaspa extended public keys use kpub prefix. SeePrivateKeyGenerator, PublicKeyGenerator, XPrv, Mnemonic
Extended public key (XPub). This class allows accepts another XPub and and provides functions for derivation of dependent child public keys. Please note that Kaspa extended public keys use kpub prefix.
SeePrivateKeyGenerator, PublicKeyGenerator, XPrv, Mnemonic
Return stringified version of self.

IBalance
Type: interface
Section: wallet sdk
Description: UtxoContext (wallet account) balance. Total amount of Kaspa (in SOMPI) available for spending. Number of UTXOs available for spending. Total amount of Kaspa (in SOMPI) currently being sent as a part of the outgoing transaction but has not yet been accepted by the network. Total amount of Kaspa (in SOMPI) that has been received and is pending confirmation. Number of UTXOs that have been received and are pending confirmation. Number of UTXOs currently in stasis (coinbase transactions received as a result of mining). Unlike regular user transactions, coinbase transactions go through stasis->pending->mature stages. Client applications should ignore stasis stages and should process transactions only when they have reached the pending stage. However, stasis information can be used for informative purposes to indicate that coinbase transactions have arrived.
Signature: `interface IBalance { mature: bigint; matureUtxoCount: number; outgoing: bigint; pending: bigint; pendingUtxoCount: number; stasisUtxoCount: number; }mature: bigintmatureUtxoCount: numberoutgoing: bigintpending: bigintpendingUtxoCount: numberstasisUtxoCount: number`
Source: web/kaspa/kaspa.d.ts:2234
Additional Details:
Total amount of Kaspa (in SOMPI) available for spending.
Number of UTXOs available for spending.
Total amount of Kaspa (in SOMPI) currently being sent as a part of the outgoing transaction but has not yet been accepted by the network.
Total amount of Kaspa (in SOMPI) that has been received and is pending confirmation.
Number of UTXOs that have been received and are pending confirmation.
Number of UTXOs currently in stasis (coinbase transactions received as a result of mining). Unlike regular user transactions, coinbase transactions go through stasis->pending->mature stages. Client applications should ignore stasis stages and should process transactions only when they have reached the pending stage. However, stasis information can be used for informative purposes to indicate that coinbase transactions have arrived.

IBinding
Type: interface
Section: wallet sdk
Description: Internal transaction data contained within the transaction record. SeeITransactionRecord
Signature: `interface IBinding { id: string; type: BindingType; }id: stringtype: BindingType`
Source: web/kaspa/kaspa.d.ts:2223

ICreateTransactions
Type: interface
Section: wallet sdk
Description: Interface defining response from the createTransactions function. Summary of the transaction generation process. Array of pending unsigned transactions.
Signature: `interface ICreateTransactions { summary: GeneratorSummary; transactions: PendingTransaction[]; }summary: GeneratorSummarytransactions: PendingTransaction[]`
Source: web/kaspa/kaspa.d.ts:2285
Additional Details:
Summary of the transaction generation process.
Array of pending unsigned transactions.

IFees
Type: interface
Section: wallet sdk
Signature: `interface IFees { amount: bigint; source?: FeeSource; }amount: bigintsource?: FeeSource`
Source: web/kaspa/kaspa.d.ts:4618

IGeneratorSettingsObject
Type: interface
Section: wallet sdk
Description: Configuration for the transaction Generator. This interface allows you to specify UTXO sources, transaction outputs, change address, priority fee, and other transaction parameters. If the total number of UTXOs needed to satisfy the transaction outputs exceeds maximum allowed number of UTXOs per transaction (limited by the maximum transaction mass), the Generator will produce multiple chained transactions to the change address and then used these transactions as a source for the "final" transaction. SeekaspaToSompi, Generator, PendingTransaction, UtxoContext, UtxoEntry, createTransactions, estimateTransactions Address to be used for change, if any. UTXO entries to be used for the transaction. This can be an array of UtxoEntry instances, objects matching IUtxoEntry interface, or a UtxoContext instance. Fee rate in SOMPI per 1 gram of mass. Fee rate is applied to all transactions generated by the Generator. This includes batch and final transactions. If not set, the fee rate is not applied. Optional minimum number of signatures required for the transaction. Optional NetworkId or network id as string (i.e. mainnet or testnet-11). Required when IGeneratorSettingsObject.entries is array Final transaction outputs (do not supply change transaction). Typical usage: { address: "kaspa:...", amount: 1000n } Optional data payload to be included in the transaction. Optional UTXO entries that will be consumed before those available in entries. You can use this property to apply custom input selection logic. Please note that these inputs are consumed first, then entries are consumed to generate a desirable transaction output amount. If transaction mass overflows, these inputs will be consumed into a batch/sweep transaction where the destination if the changeAddress. Priority fee in SOMPI. If supplying bigint value, it will be interpreted as a sender-pays fee. Alternatively you can supply an object with amount and source properties where source contains the FeeSource enum. *IMPORTANT: When sending an outbound transaction (transaction that contains outputs), the priorityFee must be set, even if it is zero. However, if the transaction is missing outputs (and thus you are creating a compound transaction against your change address), priorityFee should not be set (i.e. it should be undefined). SeeIFees, FeeSource Optional number of signature operations in the transaction.
Signature: `interface IGeneratorSettingsObject { changeAddress: string | Address; entries: IUtxoEntry[] | UtxoEntryReference[] | UtxoContext; feeRate?: number; minimumSignatures?: number; networkId?: string | NetworkId; outputs: IPaymentOutput[] | PaymentOutput; payload?: string | Uint8Array; priorityEntries?: IUtxoEntry[] | UtxoEntryReference[]; priorityFee?: bigint | IFees; sigOpCount?: number; }changeAddress: string | Addressentries: IUtxoEntry[] | UtxoEntryReference[] | UtxoContextfeeRate?: numberminimumSignatures?: numbernetworkId?: string | NetworkIdoutputs: IPaymentOutput[] | PaymentOutputpayload?: string | Uint8ArraypriorityEntries?: IUtxoEntry[] | UtxoEntryReference[]priorityFee?: bigint | IFeessigOpCount?: number`
Source: web/kaspa/kaspa.d.ts:2128
Additional Details:
SeekaspaToSompi, Generator, PendingTransaction, UtxoContext, UtxoEntry, createTransactions, estimateTransactions
Address to be used for change, if any.
UTXO entries to be used for the transaction. This can be an array of UtxoEntry instances, objects matching IUtxoEntry interface, or a UtxoContext instance.
Fee rate in SOMPI per 1 gram of mass. Fee rate is applied to all transactions generated by the Generator. This includes batch and final transactions. If not set, the fee rate is not applied.
Optional minimum number of signatures required for the transaction.
Optional NetworkId or network id as string (i.e. mainnet or testnet-11). Required when IGeneratorSettingsObject.entries is array
Final transaction outputs (do not supply change transaction). Typical usage: { address: "kaspa:...", amount: 1000n }
Optional data payload to be included in the transaction.
Optional UTXO entries that will be consumed before those available in entries. You can use this property to apply custom input selection logic. Please note that these inputs are consumed first, then entries are consumed to generate a desirable transaction output amount. If transaction mass overflows, these inputs will be consumed into a batch/sweep transaction where the destination if the changeAddress.
Priority fee in SOMPI. If supplying bigint value, it will be interpreted as a sender-pays fee. Alternatively you can supply an object with amount and source properties where source contains the FeeSource enum. *IMPORTANT: When sending an outbound transaction (transaction that contains outputs), the priorityFee must be set, even if it is zero. However, if the transaction is missing outputs (and thus you are creating a compound transaction against your change address), priorityFee should not be set (i.e. it should be undefined).
SeeIFees, FeeSource
Optional number of signature operations in the transaction.

IPaymentOutput
Type: interface
Section: wallet sdk
Description: Defines a single payment output. SeeIGeneratorSettingsObject, Generator Destination address. The address prefix must match the network you are transacting on (e.g. kaspa: for mainnet, kaspatest: for testnet, etc). Output amount in SOMPI.
Signature: `interface IPaymentOutput { address: string | Address; amount: bigint; }address: string | Addressamount: bigint`
Source: web/kaspa/kaspa.d.ts:2069
Additional Details:
Destination address. The address prefix must match the network you are transacting on (e.g. kaspa: for mainnet, kaspatest: for testnet, etc).
Output amount in SOMPI.

ISerializableTransaction
Type: interface
Section: wallet sdk
Description: Interface defines the structure of a serializable transaction. Serializable transactions can be produced using Transaction.serializeToJSON, Transaction.serializeToSafeJSON and Transaction.serializeToObject functions for processing (signing) in external systems. Once the transaction is signed, it can be deserialized into Transaction using Transaction.deserializeFromJSON and Transaction.deserializeFromSafeJSON functions. SeeTransaction, ISerializableTransactionInput, ISerializableTransactionOutput, ISerializableUtxoEntry
Signature: `interface ISerializableTransaction { gas: bigint; id?: string; inputs: ISerializableTransactionInput[]; lockTime: bigint; outputs: ISerializableTransactionOutput[]; payload: string; subnetworkId: string; version: number; }gas: bigintid?: stringinputs: ISerializableTransactionInput[]lockTime: bigintoutputs: ISerializableTransactionOutput[]payload: stringsubnetworkId: stringversion: number`
Source: web/kaspa/kaspa.d.ts:920
Additional Details:
SeeTransaction, ISerializableTransactionInput, ISerializableTransactionOutput, ISerializableUtxoEntry

ISerializableTransactionInput
Type: interface
Section: wallet sdk
Description: Interface defines the structure of a serializable transaction input. SeeISerializableTransaction
Signature: `interface ISerializableTransactionInput { index: number; sequence: bigint; sigOpCount: number; signatureScript?: string; transactionId: string; utxo: ISerializableUtxoEntry; }index: numbersequence: bigintsigOpCount: numbersignatureScript?: stringtransactionId: stringutxo: ISerializableUtxoEntry`
Source: web/kaspa/kaspa.d.ts:880

ISerializableTransactionOutput
Type: interface
Section: wallet sdk
Description: Interface defines the structure of a serializable transaction output. SeeISerializableTransaction
Signature: `interface ISerializableTransactionOutput { scriptPublicKey: IScriptPublicKey; value: bigint; }scriptPublicKey: IScriptPublicKeyvalue: bigint`
Source: web/kaspa/kaspa.d.ts:895

ISerializableUtxoEntry
Type: interface
Section: wallet sdk
Description: Interface defines the structure of a serializable UTXO entry. SeeISerializableTransactionInput, ISerializableTransaction
Signature: `interface ISerializableUtxoEntry { address?: Address; amount: bigint; blockDaaScore: bigint; isCoinbase: boolean; scriptPublicKey: ScriptPublicKey; }address?: Addressamount: bigintblockDaaScore: bigintisCoinbase: booleanscriptPublicKey: ScriptPublicKey`
Source: web/kaspa/kaspa.d.ts:866
Additional Details:
SeeISerializableTransactionInput, ISerializableTransaction

ITransactionData
Type: interface
Section: wallet sdk
Description: Internal transaction data contained within the transaction record. SeeITransactionRecord
Signature: `interface ITransactionData { data: ITransactionDataVariant; type: TransactionDataType; }data: ITransactionDataVarianttype: TransactionDataType`
Source: web/kaspa/kaspa.d.ts:4406

ITransactionDataBatch
Type: interface
Section: wallet sdk
Description: Batch transaction data (created by the Generator as a result of UTXO compounding process).
Signature: `interface ITransactionDataBatch { acceptedDaaScore?: bigint; changeValue: bigint; fees: bigint; inputValue: bigint; outputValue: bigint; paymentValue: bigint; transaction: ITransaction; utxoEntries: IUtxoRecord[]; }acceptedDaaScore?: bigintchangeValue: bigintfees: bigintinputValue: bigintoutputValue: bigintpaymentValue: biginttransaction: ITransactionutxoEntries: IUtxoRecord[]`
Source: web/kaspa/kaspa.d.ts:4312

ITransactionDataChange
Type: interface
Section: wallet sdk
Description: Change transaction data.
Signature: `interface ITransactionDataChange { acceptedDaaScore?: bigint; changeValue: bigint; inputValue: bigint; outputValue: bigint; paymentValue: bigint; transaction: ITransaction; utxoEntries: IUtxoRecord[]; }acceptedDaaScore?: bigintchangeValue: bigintinputValue: bigintoutputValue: bigintpaymentValue: biginttransaction: ITransactionutxoEntries: IUtxoRecord[]`
Source: web/kaspa/kaspa.d.ts:4376

ITransactionDataExternal
Type: interface
Section: wallet sdk
Description: Contains UTXO entries and value for an external transaction. An external transaction is a transaction that was not issued by this instance of the wallet but belongs to this address set.
Signature: `interface ITransactionDataExternal { utxoEntries: IUtxoRecord[]; value: bigint; }utxoEntries: IUtxoRecord[]value: bigint`
Source: web/kaspa/kaspa.d.ts:4302

ITransactionDataIncoming
Type: interface
Section: wallet sdk
Description: Contains UTXO entries and value for an incoming transaction.
Signature: `interface ITransactionDataIncoming { utxoEntries: IUtxoRecord[]; value: bigint; }utxoEntries: IUtxoRecord[]value: bigint`
Source: web/kaspa/kaspa.d.ts:4282

ITransactionDataOutgoing
Type: interface
Section: wallet sdk
Description: Outgoing transaction data.
Signature: `interface ITransactionDataOutgoing { acceptedDaaScore?: bigint; changeValue: bigint; fees: bigint; inputValue: bigint; outputValue: bigint; paymentValue: bigint; transaction: ITransaction; utxoEntries: IUtxoRecord[]; }acceptedDaaScore?: bigintchangeValue: bigintfees: bigintinputValue: bigintoutputValue: bigintpaymentValue: biginttransaction: ITransactionutxoEntries: IUtxoRecord[]`
Source: web/kaspa/kaspa.d.ts:4327

ITransactionDataReorg
Type: interface
Section: wallet sdk
Description: Contains UTXO entries and value for a transaction that has been invalidated due to a BlockDAG reorganization.
Signature: `interface ITransactionDataReorg { utxoEntries: IUtxoRecord[]; value: bigint; }utxoEntries: IUtxoRecord[]value: bigint`
Source: web/kaspa/kaspa.d.ts:4273

ITransactionDataStasis
Type: interface
Section: wallet sdk
Description: Contains UTXO entries and value for a stasis transaction.
Signature: `interface ITransactionDataStasis { utxoEntries: IUtxoRecord[]; value: bigint; }utxoEntries: IUtxoRecord[]value: bigint`
Source: web/kaspa/kaspa.d.ts:4291

ITransactionDataTransferIncoming
Type: interface
Section: wallet sdk
Description: Incoming transfer transaction data. Transfer occurs when a transaction is issued between two UtxoContext (wallet account) instances.
Signature: `interface ITransactionDataTransferIncoming { acceptedDaaScore?: bigint; changeValue: bigint; fees: bigint; inputValue: bigint; outputValue: bigint; paymentValue: bigint; transaction: ITransaction; utxoEntries: IUtxoRecord[]; }acceptedDaaScore?: bigintchangeValue: bigintfees: bigintinputValue: bigintoutputValue: bigintpaymentValue: biginttransaction: ITransactionutxoEntries: IUtxoRecord[]`
Source: web/kaspa/kaspa.d.ts:4344

ITransactionDataTransferOutgoing
Type: interface
Section: wallet sdk
Description: Outgoing transfer transaction data. Transfer occurs when a transaction is issued between two UtxoContext (wallet account) instances.
Signature: `interface ITransactionDataTransferOutgoing { acceptedDaaScore?: bigint; changeValue: bigint; fees: bigint; inputValue: bigint; outputValue: bigint; paymentValue: bigint; transaction: ITransaction; utxoEntries: IUtxoRecord[]; }acceptedDaaScore?: bigintchangeValue: bigintfees: bigintinputValue: bigintoutputValue: bigintpaymentValue: biginttransaction: ITransactionutxoEntries: IUtxoRecord[]`
Source: web/kaspa/kaspa.d.ts:4361

ITransactionRecord
Type: interface
Section: wallet sdk
Description: Transaction record generated by the Kaspa Wallet SDK. This data structure is delivered within UtxoProcessor and Wallet notification events. SeeITransactionData, TransactionDataType, ITransactionDataVariant Transaction binding (id of UtxoContext or Wallet Account). Block DAA score. Transaction data. Transaction id. Optional transaction metadata. If present, this must contain a JSON-serialized string. A client application updating the metadata must deserialize the string into JSON, add a key with it's own identifier and store its own metadata into the value of this key. Network id on which this transaction has occurred. Optional transaction note as a human-readable string. Transaction data type. Transaction UNIX time in milliseconds. Transaction value in SOMPI.
Signature: `interface ITransactionRecord { binding: string; blockDaaScore: bigint; data: ITransactionData; id: string; metadata?: string; network: NetworkId; note?: string; type: string; unixtimeMsec?: bigint; value: bigint; }binding: stringblockDaaScore: bigintdata: ITransactionDataid: stringmetadata?: stringnetwork: NetworkIdnote?: stringtype: stringunixtimeMsec?: bigintvalue: bigint`
Source: web/kaspa/kaspa.d.ts:4417
Additional Details:
SeeITransactionData, TransactionDataType, ITransactionDataVariant
Transaction binding (id of UtxoContext or Wallet Account).
Block DAA score.
Transaction data.
Transaction id.
Optional transaction metadata. If present, this must contain a JSON-serialized string. A client application updating the metadata must deserialize the string into JSON, add a key with it's own identifier and store its own metadata into the value of this key.
Network id on which this transaction has occurred.
Optional transaction note as a human-readable string.
Transaction data type.
Transaction UNIX time in milliseconds.
Transaction value in SOMPI.

IUtxoContextArgs
Type: interface
Section: wallet sdk
Description: UtxoContext constructor arguments. SeeUtxoProcessor, UtxoContext, RpcClient Optional id for the UtxoContext. The id must be a valid 32-byte hex string. You can use sha256FromBinary or sha256FromText to generate a valid id. If not provided, a random id will be generated. The IDs are deterministic, based on the order UtxoContexts are created. Associated UtxoProcessor.
Signature: `interface IUtxoContextArgs { id?: string; processor: UtxoProcessor; }id?: stringprocessor: UtxoProcessor`
Source: web/kaspa/kaspa.d.ts:2089
Additional Details:
Optional id for the UtxoContext. The id must be a valid 32-byte hex string. You can use sha256FromBinary or sha256FromText to generate a valid id. If not provided, a random id will be generated. The IDs are deterministic, based on the order UtxoContexts are created.
Associated UtxoProcessor.

IUtxoProcessorArgs
Type: interface
Section: wallet sdk
Description: UtxoProcessor constructor arguments. SeeUtxoProcessor, UtxoContext, RpcClient, NetworkId The RPC client to use for network communication.
Signature: `interface IUtxoProcessorArgs { networkId: string | NetworkId; rpc: RpcClient; }networkId: string | NetworkIdrpc: RpcClient`
Source: web/kaspa/kaspa.d.ts:4524
Additional Details:
The RPC client to use for network communication.

IUtxoRecord
Type: interface
Section: wallet sdk
Signature: `interface IUtxoRecord { address?: Address; amount: bigint; index: number; isCoinbase: boolean; scriptPublicKey: string; }address?: Addressamount: bigintindex: numberisCoinbase: booleanscriptPublicKey: string`
Source: web/kaspa/kaspa.d.ts:4201

ITransactionDataVariant
Type: type
Section: wallet sdk
Description: Transaction record data variants.
Signature: `ITransactionDataVariant: ITransactionDataReorg | ITransactionDataIncoming | ITransactionDataStasis | ITransactionDataExternal | ITransactionDataOutgoing | ITransactionDataBatch | ITransactionDataTransferIncoming | ITransactionDataTransferOutgoing | ITransactionDataChange`
Source: web/kaspa/kaspa.d.ts:4390

UtxoProcessorNotificationCallback
Type: type
Section: wallet sdk
Description: UtxoProcessor notification callback type. This type declares the callback function that is called when notification is emitted from the UtxoProcessor or UtxoContext subsystems. SeeUtxoProcessor, UtxoContext,
Signature: `(event): void`
Source: web/kaspa/kaspa.d.ts:2890
Additional Details:
SeeUtxoProcessor, UtxoContext,

addressFromScriptPublicKey
Type: function
Section: wallet sdk
Description: Returns the address encoded in a script public key. The script public key (ScriptPublicKey). The network type.
Signature: `addressFromScriptPublicKey(script_public_key, network): Address | undefined`
Parameters:
- script_public_key (string): The script public key (ScriptPublicKey).
- network (string): The network type.
Returns: Address
Functions:
- `addressFromScriptPublicKey(script_public_key, network): Address | undefined`
Source: web/kaspa/kaspa.d.ts:27
Additional Details:
The script public key (ScriptPublicKey).
The network type.

calculateStorageMass
Type: function
Section: wallet sdk
Description: calculateStorageMass() is a helper function to compute the storage mass of inputs and outputs. This function can be use to calculate the storage mass of transaction inputs and outputs. Note that the storage mass is only a component of the total transaction mass. You are not meant to use this function by itself and should use calculateTransactionMass() instead. This function purely exists for diagnostic purposes and to help with complex algorithms that may require a manual UTXO selection for identifying UTXOs and outputs needed for low storage mass. See maximumStandardTransactionMass calculateTransactionMass
Signature: `calculateStorageMass(network_id, input_values, output_values): bigint | undefined`
Parameters:
- network_id (string): 
- input_values (number): 
- output_values (number): 
Returns: bigint
Functions:
- `calculateStorageMass(network_id, input_values, output_values): bigint | undefined`
Source: web/kaspa/kaspa.d.ts:92
Additional Details:
See maximumStandardTransactionMass calculateTransactionMass

calculateTransactionFee
Type: function
Section: wallet sdk
Description: calculateTransactionFee() returns minimum fees needed for the transaction to be accepted by the network. If the transaction is invalid or the mass can not be calculated, the function throws an error. If the mass exceeds the maximum standard transaction mass, the function returns undefined. See maximumStandardTransactionMass calculateTransactionMass updateTransactionMass
Signature: `calculateTransactionFee(network_id, tx, minimum_signatures?): bigint | undefined`
Parameters:
- network_id (string): 
- tx (Transaction): 
- minimum_signatures (number): 
Returns: bigint
Functions:
- `calculateTransactionFee(network_id, tx, minimum_signatures?): bigint | undefined`
Source: web/kaspa/kaspa.d.ts:104
Additional Details:
See maximumStandardTransactionMass calculateTransactionMass updateTransactionMass

calculateTransactionMass
Type: function
Section: wallet sdk
Description: calculateTransactionMass() returns the mass of the passed transaction. If the transaction is invalid, or the mass can not be calculated the function throws an error. The mass value must not exceed the maximum standard transaction mass that can be obtained using maximumStandardTransactionMass(). SeemaximumStandardTransactionMass
Signature: `calculateTransactionMass(network_id, tx, minimum_signatures?): bigint`
Parameters:
- network_id (string): 
- tx (Transaction): 
- minimum_signatures (number): 
Returns: bigint
Functions:
- `calculateTransactionMass(network_id, tx, minimum_signatures?): bigint`
Source: web/kaspa/kaspa.d.ts:132
Additional Details:
SeemaximumStandardTransactionMass

createAddress
Type: function
Section: wallet sdk
Signature: `createAddress(key, network, ecdsa?, account_kind?): Address`
Parameters:
- key (string): 
- network (string): 
- ecdsa (boolean): 
- account_kind (AccountKind): 
Returns: Address
Functions:
- `createAddress(key, network, ecdsa?, account_kind?): Address`
Source: web/kaspa/kaspa.d.ts:241

createInputSignature
Type: function
Section: wallet sdk
Description: createInputSignature() is a helper function to sign a transaction input with a specific SigHash type using a private key.
Signature: `createInputSignature(tx, input_index, private_key, sighash_type?): HexString`
Parameters:
- tx (Transaction): 
- input_index (number): 
- private_key (PrivateKey): 
- sighash_type (SighashType): 
Returns: HexString
Functions:
- `createInputSignature(tx, input_index, private_key, sighash_type?): HexString`
Source: web/kaspa/kaspa.d.ts:151

createMultisigAddress
Type: function
Section: wallet sdk
Signature: `createMultisigAddress(minimum_signatures, keys, network_type, ecdsa?, account_kind?): Address`
Parameters:
- minimum_signatures (number): 
- keys (string): 
- network_type (NetworkType): 
- ecdsa (boolean): 
- account_kind (AccountKind): 
Returns: Address
Functions:
- `createMultisigAddress(minimum_signatures, keys, network_type, ecdsa?, account_kind?): Address`
Source: web/kaspa/kaspa.d.ts:245

createTransaction
Type: function
Section: wallet sdk
Description: Create a basic transaction without any mass limit checks.
Signature: `createTransaction(utxo_entry_source, outputs, priority_fee, payload?, sig_op_count?): Transaction`
Parameters:
- utxo_entry_source (IUtxoEntry): 
- outputs (IPaymentOutput): 
- priority_fee (bigint): 
- payload (string): 
- sig_op_count (number): 
Returns: Transaction
Functions:
- `createTransaction(utxo_entry_source, outputs, priority_fee, payload?, sig_op_count?): Transaction`
Source: web/kaspa/kaspa.d.ts:69

createTransactions
Type: function
Section: wallet sdk
Description: Helper function that creates a set of transactions using the transaction Generator. SeeIGeneratorSettingsObject, Generator, estimateTransactions
Signature: `createTransactions(settings): Promise`
Parameters:
- settings (IGeneratorSettingsObject): 
Returns: Promise<ICreateTransactions>
Functions:
- `createTransactions(settings): Promise`
Source: web/kaspa/kaspa.d.ts:64
Additional Details:
SeeIGeneratorSettingsObject, Generator, estimateTransactions

estimateTransactions
Type: function
Section: wallet sdk
Description: Helper function that creates an estimate using the transaction Generator by producing only the GeneratorSummary containing the estimate. SeeIGeneratorSettingsObject, Generator, createTransactions
Signature: `estimateTransactions(settings): Promise`
Parameters:
- settings (IGeneratorSettingsObject): 
Returns: Promise<GeneratorSummary>
Functions:
- `estimateTransactions(settings): Promise`
Source: web/kaspa/kaspa.d.ts:58
Additional Details:
SeeIGeneratorSettingsObject, Generator, createTransactions

isScriptPayToPubkey
Type: function
Section: wallet sdk
Description: Returns true if the script passed is a pay-to-pubkey. The script (HexString or Uint8Array).
Signature: `isScriptPayToPubkey(script): boolean`
Parameters:
- script (string): The script (HexString or Uint8Array).
Returns: boolean
Functions:
- `isScriptPayToPubkey(script): boolean`
Source: web/kaspa/kaspa.d.ts:20
Additional Details:
The script (HexString or Uint8Array).

isScriptPayToPubkeyECDSA
Type: function
Section: wallet sdk
Description: Returns returns true if the script passed is an ECDSA pay-to-pubkey. The script (HexString or Uint8Array).
Signature: `isScriptPayToPubkeyECDSA(script): boolean`
Parameters:
- script (string): The script (HexString or Uint8Array).
Returns: boolean
Functions:
- `isScriptPayToPubkeyECDSA(script): boolean`
Source: web/kaspa/kaspa.d.ts:14
Additional Details:
The script (HexString or Uint8Array).

isScriptPayToScriptHash
Type: function
Section: wallet sdk
Description: Returns true if the script passed is a pay-to-script-hash (P2SH) format, false otherwise. The script (HexString or Uint8Array).
Signature: `isScriptPayToScriptHash(script): boolean`
Parameters:
- script (string): The script (HexString or Uint8Array).
Returns: boolean
Functions:
- `isScriptPayToScriptHash(script): boolean`
Source: web/kaspa/kaspa.d.ts:8
Additional Details:
The script (HexString or Uint8Array).

kaspaToSompi
Type: function
Section: wallet sdk
Description: Convert a Kaspa string to Sompi represented by bigint. This function provides correct precision handling and can be used to parse user input.
Signature: `kaspaToSompi(kaspa): bigint | undefined`
Parameters:
- kaspa (string): 
Returns: bigint
Functions:
- `kaspaToSompi(kaspa): bigint | undefined`
Source: web/kaspa/kaspa.d.ts:270

maximumStandardTransactionMass
Type: function
Section: wallet sdk
Description: maximumStandardTransactionMass() returns the maximum transaction size allowed by the network. See calculateTransactionMass updateTransactionMass calculateTransactionFee
Signature: `maximumStandardTransactionMass(): bigint`
Returns: bigint
Functions:
- `maximumStandardTransactionMass(): bigint`
Source: web/kaspa/kaspa.d.ts:142
Additional Details:
See calculateTransactionMass updateTransactionMass calculateTransactionFee

payToAddressScript
Type: function
Section: wallet sdk
Description: Creates a new script to pay a transaction output to the specified address.
Signature: `payToAddressScript(address): ScriptPublicKey`
Parameters:
- address (string): 
Returns: ScriptPublicKey
Functions:
- `payToAddressScript(address): ScriptPublicKey`
Source: web/kaspa/kaspa.d.ts:45

payToScriptHashScript
Type: function
Section: wallet sdk
Description: Takes a script and returns an equivalent pay-to-script-hash script. The redeem script (HexString or Uint8Array).
Signature: `payToScriptHashScript(redeem_script): ScriptPublicKey`
Parameters:
- redeem_script (string): The redeem script (HexString or Uint8Array).
Returns: ScriptPublicKey
Functions:
- `payToScriptHashScript(redeem_script): ScriptPublicKey`
Source: web/kaspa/kaspa.d.ts:40
Additional Details:
The redeem script (HexString or Uint8Array).

payToScriptHashSignatureScript
Type: function
Section: wallet sdk
Description: Generates a signature script that fits a pay-to-script-hash script. The redeem script (HexString or Uint8Array). The signature (HexString or Uint8Array).
Signature: `payToScriptHashSignatureScript(redeem_script, signature): HexString`
Parameters:
- redeem_script (string): The redeem script (HexString or Uint8Array).
- signature (string): The signature (HexString or Uint8Array).
Returns: HexString
Functions:
- `payToScriptHashSignatureScript(redeem_script, signature): HexString`
Source: web/kaspa/kaspa.d.ts:34
Additional Details:
The redeem script (HexString or Uint8Array).
The signature (HexString or Uint8Array).

signScriptHash
Type: function
Section: wallet sdk
Signature: `signScriptHash(script_hash, privkey): string`
Parameters:
- script_hash (any): 
- privkey (PrivateKey): 
Returns: string
Functions:
- `signScriptHash(script_hash, privkey): string`
Source: web/kaspa/kaspa.d.ts:146

signTransaction
Type: function
Section: wallet sdk
Description: signTransaction() is a helper function to sign a transaction using a private key array or a signer array.
Signature: `signTransaction(tx, signer, verify_sig): Transaction`
Parameters:
- tx (Transaction): 
- signer (string): 
- verify_sig (boolean): 
Returns: Transaction
Functions:
- `signTransaction(tx, signer, verify_sig): Transaction`
Source: web/kaspa/kaspa.d.ts:156

sompiToKaspaString
Type: function
Section: wallet sdk
Description: Convert Sompi to a string representation of the amount in Kaspa.
Signature: `sompiToKaspaString(sompi): string`
Parameters:
- sompi (string): 
Returns: string
Functions:
- `sompiToKaspaString(sompi): string`
Source: web/kaspa/kaspa.d.ts:263

sompiToKaspaStringWithSuffix
Type: function
Section: wallet sdk
Description: Format a Sompi amount to a string representation of the amount in Kaspa with a suffix based on the network type (e.g. KAS for mainnet, TKAS for testnet, SKAS for simnet, DKAS for devnet).
Signature: `sompiToKaspaStringWithSuffix(sompi, network): string`
Parameters:
- sompi (string): 
- network (string): 
Returns: string
Functions:
- `sompiToKaspaStringWithSuffix(sompi, network): string`
Source: web/kaspa/kaspa.d.ts:256

updateTransactionMass
Type: function
Section: wallet sdk
Description: updateTransactionMass() updates the mass property of the passed transaction. If the transaction is invalid, the function throws an error. The function returns true if the mass is within the maximum standard transaction mass and the transaction mass is updated. Otherwise, the function returns false. This is similar to calculateTransactionMass() but modifies the supplied Transaction object. See maximumStandardTransactionMass calculateTransactionMass calculateTransactionFee
Signature: `updateTransactionMass(network_id, tx, minimum_signatures?): boolean`
Parameters:
- network_id (string): 
- tx (Transaction): 
- minimum_signatures (number): 
Returns: boolean
Functions:
- `updateTransactionMass(network_id, tx, minimum_signatures?): boolean`
Source: web/kaspa/kaspa.d.ts:120
Additional Details:
See maximumStandardTransactionMass calculateTransactionMass calculateTransactionFee

## Websocket

ConnectStrategy
Type: enum
Section: websocket
Description: ConnectionStrategy specifies how the WebSocket async fn connect() function should behave during the first-time connectivity phase. Causes connect() to return immediately if the first-time connection has failed. Continuously attempt to connect to the server. This behavior will block connect() function until the connection is established.
Signature: `Fallback: 1Retry: 0`
Source: web/kaspa/kaspa.d.ts:369
Additional Details:
Causes connect() to return immediately if the first-time connection has failed.
Continuously attempt to connect to the server. This behavior will block connect() function until the connection is established.

IConnectOptions
Type: interface
Section: websocket
Description: ConnectOptions is used to configure the WebSocket connectivity behavior. Indicates if the async fn connect() method should return immediately or wait for connection to occur or fail before returning. (default is true) A custom retry interval in milliseconds. ConnectStrategy used to configure the retry or fallback behavior. In retry mode, the WebSocket will continuously attempt to connect to the server. (default is {link ConnectStrategy.Retry}). A custom connection timeout in milliseconds. A custom URL that will change the current URL of the WebSocket. If supplied, the URL will override the use of resolver.
Signature: `interface IConnectOptions { blockAsyncConnect?: boolean; retryInterval?: number; strategy?: string | ConnectStrategy; timeoutDuration?: number; url?: string; }blockAsyncConnect?: booleanretryInterval?: numberstrategy?: string | ConnectStrategytimeoutDuration?: numberurl?: string`
Source: web/kaspa/kaspa.d.ts:4970
Additional Details:
Indicates if the async fn connect() method should return immediately or wait for connection to occur or fail before returning. (default is true)
A custom retry interval in milliseconds.
ConnectStrategy used to configure the retry or fallback behavior. In retry mode, the WebSocket will continuously attempt to connect to the server. (default is {link ConnectStrategy.Retry}).
A custom connection timeout in milliseconds.
A custom URL that will change the current URL of the WebSocket. If supplied, the URL will override the use of resolver.

IWebSocketConfig
Type: interface
Section: websocket
Description: WebSocketConfig is used to configure the WebSocket. Maximum size of the WebSocket frame. Maximum size of the WebSocket message.
Signature: `interface IWebSocketConfig { maxFrameSize: number; maxMessageSize: number; }maxFrameSize: numbermaxMessageSize: number`
Source: web/kaspa/kaspa.d.ts:5006
Additional Details:
Maximum size of the WebSocket frame.
Maximum size of the WebSocket message.

## Navigation

Kaspa WASM32 SDK
Type: unknown
Section: navigation

