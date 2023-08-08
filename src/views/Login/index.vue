<template>
  <div class="login-container">
    <el-form class="login-form" ref="ruleFormRef" :model="form" :rules="rules">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svgIcon name="svg-role"></svgIcon>
        </span>
        <el-input placeholder="username" name="username" v-model="form.username" type="text" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <svgIcon name="svg-password"></svgIcon>
          </el-icon>
        </span>
        <el-input
          placeholder="password"
          name="password"
          :type="pwdIsShow == true ? 'text' : 'password'"
          v-model="form.password"
        />
        <span class="show-pwd">
          <el-icon>
            <svgIcon
              :name="`svg-eye${pwdIsShow == true ? '-open' : ''}`"
              @click="pwdIsShow = !pwdIsShow"
            ></svgIcon>
          </el-icon>
        </span>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="submit(ruleFormRef)"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
// 表单数据
const form = ref({
  username: 'admin',
  password: '11'
})
// 表单的检验规则
const rules = reactive({
  username: [
    { required: true, message: '请输入用户信息', trigger: 'blur' },
    { min: 3, max: 8, message: ' 3 to 8', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 8, message: '3 to 8', trigger: 'blur' }
  ]
})

// 收集的表单数据
const ruleFormRef = ref()
// 密码是否显示
const pwdIsShow = ref(true)

const submit = async () => {
 ruleFormRef.value.validate((valid)=>{
  if (valid) {
    // 验证通过
    console.log('验证通过');
  }
 })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 46px;
      width: 400px;
      margin-bottom: 6px;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 15px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}

/* input输入框样式 */
.search-input .el-input__wrapper {
  background-color: rgba(156, 52, 52, 0.247); // 背景颜色
  border: 0;
  color: #e3eded;
}
.el-input {
  // 深度选择器
  :deep(.el-input__wrapper) {
    width: 400px;
    box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
    background-color: #283443;
    // 去除input白色边框
    --el-input-text-color: none; // 修改input输入框字体颜色
    --el-input-icon-color: #283443; // 修改icon颜色
  }
}
</style>
