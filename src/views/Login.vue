<template>
  <div class="login"
    v-loading="loading"
    element-loading-text="登录中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="tabDiv">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="账号登录" name="account">
          <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="80px">
            <el-form-item label="登录名" prop="loginName">
              <el-input v-model="loginForm.loginName"></el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="pass">
              <el-input v-model="loginForm.pass" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login()">登录</el-button>
              <el-button>注册</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="二维码登录" name="QRCode">二维码</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import mock from '../../mock/mock'
import { setToken } from '@/utils/auth'
export default {
  name: 'Login',
  data() {
    return {
      loading: false, // 页面加载
      activeName: 'account', // 当前活跃的tab栏
      // 表单内容
      loginForm: {loginName: 'admin',pass: '111111'},
      // 表单验证规则
      loginFormRules: {
        loginName: [{required: true, message: '请填入登录名',trigger: 'blur'}],
        pass: [{required: true, message: '请填入登录密码',trigger: 'blur'}],
      }
    }
  },
  methods: {
    // 点击tab栏切换
    handleClick() {

    },
    // 登录
    login() {
      this.$refs.loginFormRef.validate(valid => {
        if(!valid) return
        this.loading = true
        this.$http.post('/hxy/project/getToken').then(res => {
          if(res.status == 200) {
            this.loading = false
            setToken(res.data.tk)
            this.$router.push('/home')
          }
        })
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../assets/img/bg.jpg') no-repeat;
  background-size: cover;
  .tabDiv {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 400px;
    height: 280px;
    background-color: #fff;
    opacity: 0.85;
    border-radius: 10px;
    padding: 20px 50px 0;
    .el-form {
      margin-top: 20px;
    }
    ::v-deep .el-tabs__nav {
      transform: translateX(70%) !important;
    }
  }
}
</style>