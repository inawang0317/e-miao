<template>
  <div class="project-list-box">
    <div class="project-list-items-box">
      <ProjectItem 
        v-for="item in projectList" 
        :key="item.id" 
        :cardData="item" 
        class="item-item"
        @resize="openModal"
        @edit="handleEdit"
      ></ProjectItem>
    </div>
    <div class="project-list-pagination-box">
      <el-pagination background layout="prev, pager, next" :total="pageParams.total" />
    </div>
    <div  v-if="showModal && modalData">
      <ProjectItemModal 
        :modalData="modalData" 
        :showModal="showModal"
        @close="closeModal"
        @edit="handleEdit"
      ></ProjectItemModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProjectItem, ProjectItemModal } from './index'
import { ref, defineProps, PropType } from 'vue'
import { ChartList, ChartType } from './const'
import { useRouter } from 'vue-router'

const pageParams = ref({
  current: 1,
  total: 4,
  pageSize: 10
})

const showModal = ref<boolean>(false)
const modalData = ref<ChartType | null>(null)

const $router = useRouter()

const props = defineProps({
  projectList: Object as PropType<ChartList>
})

const openModal = (cardData: ChartType) => {
  modalData.value = cardData
  showModal.value = true
}

const closeModal = () => {
  modalData.value = null
  showModal.value = false
}

const handleEdit = (data: ChartType): void => {
  closeModal()
  $router.push({
    path: `/visualizationSystem/chartHome/${data?.id}`
  })
}

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