import React, { useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { Page } from '../_App'
import { RedactorComponentObject } from '../../../src'
import { DevRedactor } from '../../Redactor'

/**
 * Пустая редактируемая страница
 */
export const EmptyPage: Page = () => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'Section',
      component: 'Section',
      components: [],
      props: {},
    }
  }, [])

  return useMemo(() => {
    return (
      <>
        <NextSeo title="Empty page" />

        <DevRedactor initialObject={initialObject} redactorKey="test-empty" />
      </>
    )
  }, [initialObject])
}
