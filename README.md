# Vue3 脚手架工具

## 创建项目

```shell
pnpm create vite
cd vue3-vite-ts-admin
pnpm install
pnpm run dev
```

## eslint && prettier

### 安装模块

```shell

```

## GitCommit 规范

lint-staged husky

### 安装模块

```shell
pnpm i lint-staged husky -D
```

### package.json 中配置 script

```json
"scripts": {
    "prepare": "husky install"
    }
```

```shell
pnpm i husky lint-staged -D
```

#### 安装 husky

```shell
pnpm run prepare
```

### 添加各种 git hooks 钩子

pre-commit 钩子，添加的是 lint-staged 去对 git 暂存区的代码做一些格式化的操作

```shell
npx husky add .husky/pre-commit "npx lint-staged"
```

add 追加

set 直接覆盖

```shell
pnpm i @commitlint/config-conventional @commitlint/cli -D
```

```shell
npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"
```
