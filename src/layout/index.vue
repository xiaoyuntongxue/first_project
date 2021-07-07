<template>
  <div class="home">
    <!-- 页面布局 -->
    <el-container class="home-container">
      <!-- 侧边栏部分 -->
      <el-aside :width="isCollapse? '64px' : '200px'">
        <div class="aside-header">
          <i class="el-icon-star-on" style="font-size: 20px; margin-right: 5px;"></i>
          <span>胡大老板的系统</span>
        </div>
        <!-- 页面目录部分 -->
        <el-menu
          :default-active="activePath"
          unique-opened
          router
          background-color="#545c75"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          :collapse-transition="false">
          <!-- 一级目录 -->
          <el-menu-item index="/home" @click="setActivePath('/home')">
            <i class="el-icon el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 二级目录 -->
          <el-submenu index="/peopleInfo">
            <template slot="title">
              <i class="el-icon el-icon-s-custom"></i>
              <span>人员管理</span>
            </template>
            <el-menu-item index="/peopleInfo" @click="setActivePath('/peopleInfo')">人员信息</el-menu-item>
            <el-menu-item index="/workInfo" @click="setActivePath('/workInfo')">考勤信息</el-menu-item>
          </el-submenu>
          <el-submenu index="/backRequest">
            <template slot="title">
              <i class=" el-icon el-icon-setting"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item index="/backRequest" @click="setActivePath('/backRequest')">后台请求</el-menu-item>
            <!-- 三级目录嵌套 -->
            <!-- <el-submenu index="3-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>请求管理</span>
              </template>
              <el-menu-item index="3-1-1">后台请求</el-menu-item>
            </el-submenu> -->
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span style="color: #fff; cursor: pointer;" @click="controlCollapse">||</span>
          <el-button type="danger" size="mini" @click="logout">退出登录</el-button>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { getToken, removeToken } from '@/utils/auth'
export default {
  name: '',
  data() {
    return {
      isCollapse: false, // 控制是否折叠侧边栏
      activePath: '/home', // 高亮目录
    }
  },
  created() {
    this.activePath = sessionStorage.getItem('activePath') || this.activePath
  },
  methods: {
    // 控制侧边栏是否折叠事件
    controlCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 退出登录
    logout() {
      this.$confirm('退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeToken()
        this.$router.replace('/login')
      }).catch(err => {
        console.log(err);
      })
    },
    // 设置高亮显示
    setActivePath(index) {
      this.activePath = index
      sessionStorage.setItem('activePath', index)
    },
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .home-container {
    height: 100%;
    .el-aside {
      overflow: hidden;
      border: none;
      box-sizing: border-box;
      .aside-header {
        width: 100%;
        height: 60px;
        background-color: #545c64;
        color: #fff;
        font-size: 20px;
        line-height: 60px;
        padding-left: 20px;
        box-sizing: border-box;
      }
      .el-menu {
        height: 100%;
        width: 100%;
        .el-icon {
          font-size: 20px;
          margin-right: 15px;
        }
      }
    }
  }
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-main {
    background-color: #efefef;
  }
}
</style>
