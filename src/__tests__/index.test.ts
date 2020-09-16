import { sum } from '../index'

describe('index file', () => {
  it(('should get right sum'), () => {
    const result: number = sum(2, 3)
    expect(result).toBe(5)
  })
})