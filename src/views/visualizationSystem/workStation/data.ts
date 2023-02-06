import { ref } from 'vue'
import { ChartList, ReleaseType } from './components/const'

// 模拟数据
export const useDataListInit = () => {
  const list = ref<ChartList>([
    {
      id: 1,
      title: '我的项目1',
      label: '演示案例1',
      release: ReleaseType.RELEASED,
      updateTime: '2023-01-23 10:30:11',
      snapshot: 'http://pro.statics.techuangyi.com/2020/12/03/yQMat3t4iiZTWEEE2a2F6th8.jpg?x-oss-process=image/resize,m_lfit,w_1366,h_0'
    },
    {
      id: 2,
      title: '我的项目2',
      label: '演示案例2',
      release: ReleaseType.UN_RELEASE
    },
    {
      id: 3,
      title: '我的项目3',
      label: '演示案例3',
      release: ReleaseType.UN_RELEASE
    },
    {
      id: 4,
      title: '我的项目4',
      label: '演示案例4',
      release: ReleaseType.RELEASED
    },
    {
      id: 5,
      title: '我的项目4',
      label: '演示案例4',
      release: ReleaseType.RELEASED
    }
  ])

  return list
}