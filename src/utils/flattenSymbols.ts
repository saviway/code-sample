/**
 * converts object like {1: [{}]} to []
 * @param obj
 */
import { ISymbolEntity } from '../domain/ISymbolEntity'

export function flattenSymbols(obj: { [key: number]: Array<ISymbolEntity> }): Array<ISymbolEntity> {
  return Object.values<Array<ISymbolEntity>>(obj).reduce((acc, res) => [...acc, ...res], [])
}
