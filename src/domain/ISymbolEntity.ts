/**
 * Interface provides a single symbol entity
 */
export interface ISymbolEntity {
  id: number
  // name: string;
  symbol: string // * since 2 March 2020 symbol's field is names as 'symbol'
  reportSymbol?: string
  systemSymbol?: string

  sourceId?: number
  sourceName?: string
}
