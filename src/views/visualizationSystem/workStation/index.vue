<template>
  <div class="vi-system-box">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>项目</span>
          </template>
          <el-sub-menu index="1-4">
            <template #title>我的</template>
            <el-menu-item index="1-4-1">全部项目</el-menu-item>
            <el-menu-item index="1-4-1">我的模板</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-5">
            <template #title>部门</template>
            <el-menu-item index="1-5-1">全部项目</el-menu-item>
            <el-menu-item index="1-5-1">部门模板</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="4">
          <el-icon><location /></el-icon>
          <span>模板市场</span>
        </el-menu-item>
        
      </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="vi-header-operation">
            <el-form :inline="true" :model="form" class="operation-form">
              <el-form-item prop="name">
                <el-input placeholder="请输入项目名称" v-model="form.name" :suffix-icon="Search"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="handleSearch" type="primary" plain>查询</el-button>
                <el-button @click="newProject" type="primary" plain>新建</el-button>
              </el-form-item>
            </el-form>
            <div class="system-header">
              <ThemeSelect></ThemeSelect>
              <UserInfo></UserInfo>
            </div>
          </div>
        </el-header>
        <el-main>
          <ErrorPage showText="没有任何内容哦～" v-if="!projectList || !projectList.length"></ErrorPage>
          <ProjectList v-else :projectList="projectList"></ProjectList>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import { ThemeSelect } from '@/components/ThemeSelect'
  import { UserInfo } from '@/components/UserInfo'
  import { Search } from '@element-plus/icons-vue'
  import { reactive } from 'vue'
  import { ErrorPage } from '@/views/commonBase/index'
  import { ProjectList } from './components/index'
  import { useDataListInit } from './data'

  const form = reactive({
    name: '', 
  })

  const projectList = useDataListInit()

  // 查询
  const handleSearch = () => {}

  // 新建项目
  const newProject = () => {}

  

</script>

<style lang="scss" scoped>
  .vi-system-box{
    height: 100%;
    .vi-header-operation{
      width: 100%;
      padding: 0px 40px;
      height: $--header-height;
      @include flex-center-center;
      justify-content: space-between;
      @include get-border-with-theme('border-bottom');
      .operation-form{
        width: 60%;
        ::v-deep .el-button{
          width: 70px;
        }
        ::v-deep .el-input{
          width: 300px;
        }
      }
      .system-header{
        @include flex-center-center;
      }
    }
  }
  ::v-deep .el-menu {
    border-right: none;
  }
  ::v-deep .el-aside{
    border-right: solid 1px #4C4D4F;
  }
</style>