import { ScriptProps } from '../interfaces'

export type InlineScriptProps = {
  source: string

  active: boolean

  object: ScriptProps['object']

  updateObject: ScriptProps['updateObject']
}
