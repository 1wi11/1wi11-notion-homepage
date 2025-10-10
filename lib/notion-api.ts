import { NotionAPI } from 'notion-client'

export const notion = new NotionAPI({
  apiBaseUrl:
    process.env.NEXT_PHASE === 'phase-production-build'
      ? 'https://www.notion.so/api/v3'
      : 'https://1wi11.notion.site/api/v3'
})