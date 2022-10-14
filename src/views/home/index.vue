<template>
  <el-container class="container" :class="{ folded: folded }">
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside class="menu" width="">
        <div class="menu-inner">
          <el-menu :collapse="folded" default-active="2">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="menu-collapse-button">
          <el-icon @click="folded = !folded" v-show="folded"><Expand /></el-icon>
          <el-icon @click="folded = !folded" v-show="!folded"><Fold /></el-icon> </div
      ></el-aside>
      <el-main class="main"
        >Main 123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br /><br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br /><br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br /><br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br /><br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />123<br />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import {
    Fold,
    Location,
    Document,
    Setting,
    Menu as IconMenu,
    Expand
  } from '@element-plus/icons-vue'
  const folded = ref(false)
</script>
<style scoped lang="scss">
  .container {
    .header {
      background-color: blue;
    }

    .menu {
      position: relative;
      box-sizing: border-box;
      height: calc(100vh - $layout-height);
      border-right: 0;

      .menu-inner {
        padding: 4px 8px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow: auto;
        overflow-x: hidden;

        .el-menu {
          border-right: 0;
        }
      }

      .menu-collapse-button {
        right: 8px;
        bottom: 0;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 40px;
        font-size: 20px;
        background-color: var(--el-menu-bg-color);
        cursor: pointer;
      }
    }

    .main {
      background-color: chartreuse;
      height: calc(100vh - $layout-height);
      margin-left: 64;
    }
  }

  .folded .menu {
    width: 64px !important;
  }

  .folded .el-menu span {
    display: none;
  }
</style>
