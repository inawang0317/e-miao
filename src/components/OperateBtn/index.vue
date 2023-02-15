<template>
  <div>
    <div v-if="props.isSignle">
      <el-tooltip 
        :content="getOperationTypeZhname(props.operate)" 
        placement="bottom" 
        effect="light"
        ref="tooltipRef"
      >
          <el-button class="op-btn-size">
            <el-icon @click.stop="handleCommand(props.operate)">
              <component :is="getOperationTypeMapIcon(props.operate)"></component>
            </el-icon>
          </el-button>
      </el-tooltip>
    </div>
    <div v-else>
      <el-dropdown @command="handleCommand">
        <el-button class="op-btn-size">
          <el-icon><MoreFilled /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item 
              :icon="getOperationTypeMapIcon(item)" 
              v-for="item in props.operates" 
              :key="item"
              :command="item"
            >
              {{getOperationTypeZhname(item)}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { OperationType, getOperationTypeMapIcon, getOperationTypeZhname, emitEventName } from './const'
  import { ref } from 'vue'

  interface Props {
    operate?: OperationType,
    isSignle: boolean,
    operates?: OperationType[]
  }

  // 带自定义类型定义和默认值的props
  const props = withDefaults(defineProps<Props>(), {
    operate: OperationType.EDIT,
    isSignle: true,
    operates: () => [OperationType.EDIT]
  })

  const tooltipRef = ref(null)

  const emit = defineEmits(emitEventName)

  const handleCommand = (command: OperationType) => {
    if (props.isSignle) {
      // modal中使用tooltip时，页面发生跳转，tooltip弹窗层始终关不上
      // 这里手动关闭
      (tooltipRef.value as any).hide()
    }
    emit(emitEventName[command])
  }
</script>
<style lang="scss" scoped>
.op-btn-size{
  padding: 5px 10px;
  margin-left: 10px;
}
</style>