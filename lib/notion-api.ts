import { NotionAPI } from 'notion-client'

const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build'
const isDev = process.env.NODE_ENV === 'development'

// ✅ 빌드 시에는 공식 Notion API 사용
// ✅ 런타임 또는 dev 시에는 커스텀 proxy 사용
const apiBaseUrl =
  isBuildPhase
    ? 'https://www.notion.so/api/v3'
    : process.env.NOTION_API_BASE_URL || (isDev ? 'https://www.notion.so/api/v3' : undefined)

export const notion = new NotionAPI({
  apiBaseUrl
})
