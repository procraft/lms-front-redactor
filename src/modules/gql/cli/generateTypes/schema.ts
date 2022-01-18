import * as codegen from '@graphql-codegen/cli'
import path from 'path'
import { OUTPUT_PATH } from './constants'
import config from '../../../../config'

/** Функция генерирующая schema.json */
export const generateSchema = async () => {
  await codegen.generate(
    {
      schema: {
        [config.endpoint]: {},
      },
      generates: {
        [path.resolve(OUTPUT_PATH, 'schema.json')]: {
          plugins: [{ introspection: {} }],
        },
      },
    },
    true
  )
}
