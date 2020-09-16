/**
 * Fake sources set
 * * Note: Changing this array and its elements will break test
 */
import { ISourceEntity } from '../domain/ISourceEntity'
import { ISymbolEntity } from '../domain/ISymbolEntity'

export const FAKE_SOURCES: Array<ISourceEntity> = [
  {
    id: 1,
    name: 'Source 1',
    started: new Date().getTime(),
    ended: null,
  },
  {
    id: 2,
    name: 'Source 2',
    started: 1546300800000,
    ended: 1569887999999,
  },
  {
    id: 3,
    name: 'Source 3',
    started: 1546300800000,
    ended: 1569887999999,
  }
]

export function generateFakeSources(amount: number = 100): Array<ISourceEntity> {
  let result: Array<ISourceEntity> = []

  for (let i = 1; i <= amount; i++) {
    result.push({
      id: i,
      name: `Source-${i}`,
      started: new Date('01/01/2020').getTime(),
      ended: Math.random() < 0.5 ? null : new Date('01/29/2020').getTime()
    })
  }

  return result
}

/**
 * Fake symbols set
 * Note: Changing this array and its elements will break test
 */
export const FAKE_SYMBOLS: Array<ISymbolEntity> = [
  {
    id: 1000,
    // name: 'CADJPY',
    symbol: 'CADJPY',
    reportSymbol: 'CADJPY_',
    systemSymbol: 'CADJPY'
  },
  {
    id: 1001,
    // name: 'EURUSD',
    symbol: 'EURUSD',
    reportSymbol: 'EURUSB#',
    systemSymbol: 'EURUSB'
  },
  {
    id: 1002,
    // name: 'BTCUSD',
    symbol: 'BTCUSD',
    reportSymbol: 'BTCUSD',
    systemSymbol: 'BTCUSD'
  }
]

export function generateFakeSymbols(amount: number = 100, minId: number = 1000): Array<ISymbolEntity> {
  let result: Array<ISymbolEntity> = []
  for (let i = 1; i <= amount; i++) {
    result.push({
      id: minId + i,
      // name: `symbol-${minId + i}`,
      symbol: `symbol-${minId + i}`,
      reportSymbol: `symbol-${minId + i}`,
      systemSymbol: `symbol-###_${minId + i}`
    })
  }

  return result
}

export function generateSymbolsMap(sources: Array<ISourceEntity>, symbolsCount: number = 50): {[key: number]: Array<ISymbolEntity>} {
  // const result = {}
  const result = sources.reduce((acc, val) => {

    return {
      ...acc,
      [val.id]: generateFakeSymbols(symbolsCount, (val.id * 100))
    }
  }, {})

  return result
}
