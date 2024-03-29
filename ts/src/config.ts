// tslint:disable:custom-no-magic-numbers
import { BigNumber } from '0x.js';
import * as _ from 'lodash';

// Network port to listen on
export const HTTP_PORT = !_.isUndefined(process.env.HTTP_PORT) ? process.env.HTTP_PORT : 3000;
// A time window after which the order is considered permanently expired
export const ORDER_SHADOWING_MARGIN_MS = 100 * 1000; // tslint:disable-line custom-no-magic-numbers
// Frequency of checks for permanently expired orders
export const PERMANENT_CLEANUP_INTERVAL_MS = 10 * 1000; // tslint:disable-line custom-no-magic-numbers
// Max number of entities per page
export const MAX_PER_PAGE = 1000;
// Default network id to use when not specified
export const NETWORK_ID = !_.isUndefined(process.env.NETWORK_ID) ? _.parseInt(process.env.NETWORK_ID) : 50;
// The fee recipient for orders
export const FEE_RECIPIENT = !_.isUndefined(process.env.FEE_RECIPIENT)
    ? process.env.FEE_RECIPIENT
    : '0x667deb5a98f77052cf561658575cf1530ee42c7a';
// A flat fee in ZRX that should be charged to the order maker
export const MAKER_FEE_ZRX_UNIT_AMOUNT = !_.isUndefined(process.env.MAKER_FEE_ZRX_UNIT_AMOUNT)
    ? new BigNumber(process.env.MAKER_FEE_ZRX_UNIT_AMOUNT)
    : new BigNumber(0);
// A flat fee in ZRX that should be charged to the order taker
export const TAKER_FEE_ZRX_UNIT_AMOUNT = !_.isUndefined(process.env.TAKER_FEE_ZRX_UNIT_AMOUNT)
    ? new BigNumber(process.env.TAKER_FEE_ZRX_UNIT_AMOUNT)
    : new BigNumber(0);
// Whitelisted token addresses. Set to a '*' instead of an array to allow all tokens.
export const WHITELISTED_TOKENS = "*";
/*
export const WHITELISTED_TOKENS: string[] | '*' = [
    '0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa', // ZRX
    '0xd0a1e359811322d97991e03f863a0c30c2cf029c', // WETH
];
*/

// Ethereum RPC url
export const RPC_URL = !_.isUndefined(process.env.RPC_URL) ? process.env.RPC_URL : 'localhost:8545';
// Default ERC20 token precision
export const DEFAULT_ERC20_TOKEN_PRECISION = 18;


console.log('Maker fee to relayer', MAKER_FEE_ZRX_UNIT_AMOUNT);
console.log('Network ID', NETWORK_ID);
console.log('Fee recepient', FEE_RECIPIENT);
