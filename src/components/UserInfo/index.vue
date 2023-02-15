<template>
  <div class="userinfo-box">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="props.size" src="~@/assets/commonBase/login/testAvater.png">
          <el-icon><UserFilled /></el-icon>
        </el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>张三</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
          
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang='ts' setup>
  import { UserFilled } from '@element-plus/icons-vue'

  const props = defineProps({
    size: {
      type: Number,
      default: 30
    }
  })
</script>

<style lang="scss" scoped>
.userinfo-box{
  padding-left: 20px;
  cursor: pointer;
}
</style>