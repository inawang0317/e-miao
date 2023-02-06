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
  updateTime?: string // 更新时间
}

export type ChartList = ChartType[]
