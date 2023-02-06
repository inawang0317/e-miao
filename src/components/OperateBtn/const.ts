import { Download, EditPen, Delete, View, Promotion, CopyDocument } from '@element-plus/icons-vue'

export enum OperationType {
  EDIT = 1, // 编辑
  PREVIEW = 2, // 预览
  RENAME = 3, // 重命名
  RELEASE = 4, // 发布
  CANCLE_RELEASE = 5, // 取消发布
  DOWLOAD = 6, // 下载
  DELETE = 7, // 删除
  CLONE = 8 // 克隆
}

export const emitEventName = ['default', 'edit', 'preview', 'rename', 'release', 'cancleRelease', 'download', 'delete', 'clone']


export const getOperationTypeMapIcon = (opType: OperationType) => {
  const iconMap = {
    [OperationType.EDIT]: EditPen,
    [OperationType.PREVIEW]: View,
    [OperationType.RENAME]: EditPen,
    [OperationType.RELEASE]: Promotion,
    [OperationType.CANCLE_RELEASE]: Promotion,
    [OperationType.DOWLOAD]: Download,
    [OperationType.DELETE]: Delete,
    [OperationType.CLONE]: CopyDocument
  }
  return iconMap[opType]
}

export const getOperationTypeZhname = (opType: OperationType): string => {
  const nameMap = {
    [OperationType.EDIT]: '编辑',
    [OperationType.PREVIEW]: '预览',
    [OperationType.RENAME]: '重命名',
    [OperationType.RELEASE]: '发布',
    [OperationType.CANCLE_RELEASE]: '取消发布',
    [OperationType.DOWLOAD]: '下载',
    [OperationType.DELETE]: '删除',
    [OperationType.CLONE]: '克隆'
  }
  return nameMap[opType]
}