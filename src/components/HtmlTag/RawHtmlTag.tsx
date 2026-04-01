import React, { useMemo } from 'react'
import { RawHtmlIsland } from './RawHtmlIsland'

type RawHtmlTagProps = {
  object: any
  className?: string
}

export function RawHtmlTag({ object, className }: RawHtmlTagProps) {
  const html = useMemo(() => {
    return serializeNode(object)
  }, [object])

  return <RawHtmlIsland className={className} html={html} executeScripts />
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
    return text
  }

  const tagLower = String(tag).toLowerCase()

  const attrs = Object.entries(node.props ?? {})
    .filter(([key, value]) => {
      return (
        key !== 'tag' &&
        key !== 'text' &&
        key !== 'children' &&
        value != null &&
        typeof value !== 'function'
      )
    })
    .map(([key, value]) => {
      if (value === true) return key
      if (value === false) return ''
      return `${key}="${escapeAttribute(String(value))}"`
    })
    .filter(Boolean)
    .join(' ')

  const openTag = attrs ? `<${tag} ${attrs}>` : `<${tag}>`

  if (VOID_TAGS.has(tagLower)) {
    return attrs ? `<${tag} ${attrs} />` : `<${tag} />`
  }

  const childrenHtml = Array.isArray(node.components)
    ? node.components.map(serializeNode).join('')
    : ''

  const innerHtml = childrenHtml || text

  return `${openTag}${innerHtml}</${tag}>`
}
