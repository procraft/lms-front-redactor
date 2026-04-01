import React, { useMemo } from 'react'
import { RawHtmlIsland } from './RawHtmlIsland'

type RawHtmlTagProps = {
  object: any
}

export function RawHtmlTag({ object }: RawHtmlTagProps) {
  const html = useMemo(() => {
    return serializeNode(object)
  }, [object])

  return <RawHtmlIsland html={html} executeScripts />
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function escapeAttribute(value: string): string {
  return escapeHtml(value)
}

function camelToKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
}

function styleObjectToString(style: Record<string, unknown>): string {
  return Object.entries(style)
    .filter(([, value]) => value != null && value !== '')
    .map(([key, value]) => `${camelToKebabCase(key)}:${String(value)}`)
    .join(';')
}

function normalizePropName(name: string): string {
  switch (name) {
    case 'className':
      return 'class'
    case 'htmlFor':
      return 'for'
    default:
      return name
  }
}

function normalizePropValue(
  name: string,
  value: unknown
): string | boolean | null {
  if (value == null) return null

  if (name === 'style' && typeof value === 'object' && !Array.isArray(value)) {
    return styleObjectToString(value as Record<string, unknown>)
  }

  if (name === 'defaultValue') {
    return String(value)
  }

  if (name === 'defaultChecked') {
    return Boolean(value)
  }

  if (typeof value === 'function') return null
  if (typeof value === 'object') return null

  return value as string | boolean
}

function shouldSkipProp(name: string): boolean {
  if (name === 'tag' || name === 'text' || name === 'children') return true
  if (name === 'dangerouslySetInnerHTML') return true
  if (name === 'suppressHydrationWarning') return true
  if (name === 'contentEditable') return true
  if (name === 'suppressContentEditableWarning') return true
  if (name === 'ref' || name === 'key') return true
  return false
}

function propsToAttributes(props: Record<string, unknown>): string {
  return Object.entries(props)
    .filter(([name]) => !shouldSkipProp(name))
    .map(([rawName, rawValue]) => {
      const name = normalizePropName(rawName)
      const value = normalizePropValue(rawName, rawValue)

      if (value == null || value === false) return ''
      if (value === true) return name

      return `${name}="${escapeAttribute(String(value))}"`
    })
    .filter(Boolean)
    .join(' ')
}

const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
])

function serializeNode(node: any): string {
  const tag = node?.props?.tag
  const text = node?.props?.text ?? ''

  if (!tag) {
    return escapeHtml(String(text))
  }

  const tagLower = String(tag).toLowerCase()

  if (tagLower === 'textarea') {
    const textareaProps = { ...(node.props ?? {}) }
    delete textareaProps.value
    delete textareaProps.defaultValue

    const attrs = propsToAttributes(textareaProps)
    const openTag = attrs ? `<${tag} ${attrs}>` : `<${tag}>`
    const value = node?.props?.value ?? node?.props?.defaultValue ?? text ?? ''

    return `${openTag}${escapeHtml(String(value))}</${tag}>`
  }

  const attrs = propsToAttributes(node.props ?? {})
  const openTag = attrs ? `<${tag} ${attrs}>` : `<${tag}>`

  if (VOID_TAGS.has(tagLower)) {
    return openTag
  }

  const childrenHtml = Array.isArray(node.components)
    ? node.components.map(serializeNode).join('')
    : ''

  const innerHtml = `${escapeHtml(String(text))}${childrenHtml}`

  return `${openTag}${innerHtml}</${tag}>`
}
