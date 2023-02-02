<template>
  <div>
    <div v-if="props.isSignle"></div>
    <el-select v-model="value" placeholder="Select" v-else>
      <el-option
        v-for="item in props.operates"
        :key="item"
      >
        <span style="float: left">{{ item }}</span>
        <span
          style="
            float: right;
            color: var(--el-text-color-secondary);
            font-size: 13px;
          "
          >{{ item }}</span
        >
      </el-option>
    </el-select>
  </div>
</template>
<script lang="ts" setup>
  import { OperationType } from './const'

  const props = defineProps<{
    operate?: { // 操作名称
      type: OperationType,
      default: OperationType.EDIT
    },
    isSignle: { // 是否是单个操作
      type: Boolean,
      default: true
    },
    operates?: {
      type: OperationType[],
      default: [OperationType.EDIT]
    }
  }>()

  const emit = defineEmits(['preview', ''])
</script>
<style lang="scss" scoped>

</style>