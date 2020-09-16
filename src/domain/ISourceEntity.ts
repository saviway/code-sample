/**
 * Interface describes a single entity of Source
 */
export interface ISourceEntity {
  id: number
  name: string
  // timestamp of data collecting started
  started?: number
  // timestamp of data collecting ended or null if collection is active
  ended?: number | null
}
