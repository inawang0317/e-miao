<template>
  <div class="login-box">
    <div class="top-options">
      <ThemeSelect></ThemeSelect>
    </div>
    <div class="main-content">
      <div class="main-content-bg">
        <img src="~@/assets/commonBase/login/login-bg.png" />
      </div>
      <div class="main-content-animation">
        <div class="main-content-animation-carousel">
          <el-carousel indicator-position="outside" arrow="never" :interval="Number(carouselInterval)">
            <el-carousel-item v-for="item in carouselImgList" :key="item">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="main-content-animation-charts">
          <div class="charts-transition-box">
            <transition-group name="fade">
              <template v-for="item in chartsList" :key="item">
                <img :src="item"/>
              </template>
            </transition-group>
          </div>
        </div>
      </div>
      <div class="login-form-box" :class="designStore.darkTheme ? 'dark-border' : 'light-border'">
        <h3>登录</h3>
        <div class="login-form-logo">
          <img src="@/assets/commonBase/login/dark_icon.svg" v-if="!designStore.darkTheme">
          <img src="@/assets/commonBase/login/light_icon.svg" v-else>
        </div>
        <el-form :model="form" label-width="0px">
          <el-form-item style="margin-bottom: 25px;">
            <el-input v-model="form.name" :prefix-icon="User" size="large" />
          </el-form-item>
          <el-form-item style="margin-bottom: 30px;">
            <el-input v-model="form.password" :prefix-icon="Lock" show-password type="password" size="large" />
          </el-form-item>
          <el-form-item style="margin-bottom: 30px;">
            <el-checkbox v-model="form.autoLogin" label="自动登录" size="large" />
          </el-form-item>
          <el-form-item>
            <div @click="onSubmit" class="login-submit">登录</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref, onMounted } from 'vue'
  import { carouselInterval } from '@/settings/designSetting'
  import { ThemeSelect } from '@/components/ThemeSelect'
  import shuffle from 'lodash/shuffle'
  import { useDesignStore } from '@/store/designStore/designStore'
  import { User, Lock } from '@element-plus/icons-vue'
  import { ElMessage } from 'element-plus'


  // 轮播图
  const carouselImgList = [
    require('@/assets/commonBase/login/one.png'),
    require('@/assets/commonBase/login/two.png'),
    require('@/assets/commonBase/login/three.png')
  ]

  // 图表展示
  const chartsList = ref([
    require('@/assets/commonBase/unit/charts/bar_x.png'),
    require('@/assets/commonBase/unit/charts/line_gradient.png'),
    require('@/assets/commonBase/unit/charts/pie.png'),
    require('@/assets/commonBase/unit/charts/radar.png'),
    require('@/assets/commonBase/unit/charts/scatter-multi.png'),
    require('@/assets/commonBase/unit/charts/tree_map.png'),
    require('@/assets/commonBase/unit/charts/water_WaterPolo.png'),
    require('@/assets/commonBase/unit/charts/funnel.png'),
    require('@/assets/commonBase/unit/charts/bar_y.png'),
  ])

  // 定时器
  const shuffleTimiing = ref()
  // 打乱
  const shuffleHandle = () => {
    shuffleTimiing.value = setInterval(() => {
      chartsList.value = shuffle(chartsList.value)
    }, carouselInterval)
  }

  // 表单
  const form = reactive({
    name: '',
    password: '',
    autoLogin: true
  })

  const designStore = useDesignStore()

  const onSubmit = () => {
    console.log(form)
     ElMessage({
      message: '登录成功！',
      type: 'success',
    })

  }
  
  onMounted(() => {
    shuffleHandle()
  })

</script>

<style lang="scss" scoped>
$width: 450px;
$go-login-height: 100vh;

.login-box{
  width: 100%;
  height: $go-login-height;
  overflow: hidden;
  @include get-background-image('background-image');
  .top-options{
    width: 100%;
    padding: 0px 40px;
    height: $--header-height;
    @include flex-center-center;
    justify-content: flex-end;
    @include get-border-with-theme('border-bottom');
  }
  .main-content {
    position: relative;
    &-bg {
      position: absolute;
      top: -80px;
      left: 10%;
      img {
        height: 840px;
        width: 840px;
      }

    }
    &-animation {
      @include flex-center-center;
      transform: translateY(15%);
      width: 100%;
      &-carousel {
        width: 40%;
        img {
          height: 45vh;
          margin: 0 auto;
          position: relative;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        } 
      }
      &-charts {
        width: 50%;
        height: 100%;
        .charts-transition-box{
          width: 100%;
          display: grid;
          place-items: center center;
          place-content: center center;
          grid-template-columns: repeat(3, 1fr);
          grid-row-gap: 15px;
          img {
            width: 230px;
            border-radius: 16px;
            opacity: 0.8;
          }
        }
      }
    }
    .login-form-box {
      width: 450px;
      height: 590px;
      position: absolute;
      right: 13%;
      top: 10%;
      border-radius: 10px;
      padding: 20px;
      @extend .get-background-filter;
      @include fetch-bg-color('filter-color');
      box-shadow: 0 0 20px 5px rgba(40, 40, 40, 0.3);
      @include fetch-text-color('color');
      .login-form-logo{
        @include flex-center-center;
        margin-bottom: 30px;
      }
      .login-submit{
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        @include flex-center-center;
        background-color:  #5fadfc;
        cursor: pointer;
      }
    }
    .dark-border{
      border: 1px solid #6c6b6b;
    }
    .light-border{
      border: 1px solid #e1dddd;
    }
  }
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
  以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}

::v-deep .el-input__wrapper{
  border-radius: 6px;
}

@media only screen and (max-width: 1200px){
  .main-content-bg,
  .main-content-animation {
    display: none !important;
  }
}
</style>