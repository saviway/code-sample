import { render } from '@testing-library/react'
import { withSimpleText } from '../../stories/SimpleComponent/SimpleComponent.stories'

describe('SimpleComponent', () => {
  it('should contain text', () => {
    const comp = render(withSimpleText({ text: 'Simple text' }))
    expect(comp.getByText('Simple text')).toBeTruthy()
  })
})
