export enum ReleaseType {
  RELEASED = 1,
  UN_RELEASE = 0
}
export type ChartType = {
  id: number | string
  title: string // 标题
  label: string // 标签
  release: ReleaseType // 是否已发布
  snapshot?: string // 预览快照
}

export type ChartList = ChartType[]
