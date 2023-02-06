<template>
  <div class="project-list-box">
    <div class="project-list-items-box">
      <ProjectItem v-for="item in projectList" :key="item.id" :cardData="item" clas="item-item"></ProjectItem>
    </div>
    <div class="project-list-pagination-box">
      <el-pagination background layout="prev, pager, next" :total="pageParams.total" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProjectItem } from './index'
import { ref, defineProps, PropType } from 'vue'
import { ChartList } from './const'

const pageParams = ref({
  current: 1,
  total: 4,
  pageSize: 10
})

const props = defineProps({
  projectList: Object as PropType<ChartList>
})

</script>

<style lang="scss" scoped>
.project-list-box {
  width: 100%;
  padding: 30px 20px;
  .project-list-items-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    ::v-deep .project-item-box{
      margin-bottom: 30px;
    }
  }
  .project-list-pagination-box{
    margin-top: 20px;
    @include flex-center-center;
    justify-content: flex-end;
  }
}

</style>