import latinize from 'latinize'
import unorm from 'unorm'

export function normalizeFileName(fileName: string): string {
  const normalizedFileName = unorm.nfc(fileName.replace(/\s+/g, '_'))
  return latinize(normalizedFileName)
}
