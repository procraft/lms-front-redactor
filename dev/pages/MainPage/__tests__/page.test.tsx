import React from 'react'
import MainPage from '..'
import { appRender } from '../../../tests/utils'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
    }
  },
}))

describe('MainPage', () => {
  it('Render MainPage', () => {
    const tree = appRender(<MainPage />)

    // eslint-disable-next-line no-console
    // console.log('MainPage tree', tree.container.outerHTML);

    expect(tree.baseElement).toMatchSnapshot()
    expect(tree.container).toMatchSnapshot()
  })
})
