<template>
  <div>
    <div v-if="props.isSignle">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-button class="op-btn-size">
            <el-icon @click="handleCommand(props.operate)"><Edit /></el-icon>
          </el-button>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :command="props.operate">
              {{getOperationTypeZhname(props.operate)}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
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
  import { Prop } from '@vue/runtime-core'
  import { OperationType, getOperationTypeMapIcon, getOperationTypeZhname, emitEventName } from './const'

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

  const emit = defineEmits(emitEventName)

  const handleCommand = (command: OperationType) => {
    emit(emitEventName[command])
  }
</script>
<style lang="scss" scoped>
.op-btn-size{
  padding: 5px 10px;
  margin-left: 10px;
}
</style>