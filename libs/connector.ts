import {InjectedConnector} from '@web3-react/injected-connector'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'

const POLLING_INTERVAL = 12000
const RPC_URLS: {[chainId: number]: string} = {
  1: process.env.NEXT_PUBLIC_RPC_URL_1 as string,
  56: 'https://bsc-dataseed.binance.org/',
}

export const injected = new InjectedConnector({
  supportedChainIds: [56],
})

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  chainId: 56,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
})

export const networks = {
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: 'Smart Chain',
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: [
      'https://bsc-dataseed.binance.org/',
      'https://bsc-dataseed1.binance.org',
      'https://bsc-dataseed2.binance.org',
      'https://bsc-dataseed3.binance.org',
      'https://bsc-dataseed4.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed2.ninicoin.io',
      'https://bsc-dataseed3.ninicoin.io',
      'https://bsc-dataseed4.ninicoin.io',
      'wss://bsc-ws-node.nariox.org',
    ],
    blockExplorerUrls: ['https://bscscan.com'],
  },
}
