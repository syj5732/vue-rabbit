# Vue3 Props 用法速查表

## 1. 声明方式
| 类型       | 写法示例                          | 场景               |
|------------|-----------------------------------|--------------------|
| 数组语法   | `defineProps(['title', 'msg'])`   | 简单场景（无验证） |
| 对象语法   | `defineProps({ title: { type: String } })` | 需类型验证等复杂场景 |

## 2. 父传子
- 传变量：必须加 `:` → `<Child :title="parentTitle" />`
- 传字面量：不用 `:` → `<Child title="固定内容" />`

## 3. 子组件使用
- 数组语法：脚本用 `props.title`（或解构），模板需 `props.title`（或解构后直接用）
- 对象语法：模板直接用 `{{ title }}`，脚本用 `props.title`

## 4. 核心规则
`props` 只读，子组件不能直接修改。

# Vue3 slot用法速查表

### 1. 匿名插槽（基础）
- **子组件**：用 `<slot></slot>` 占位
- **父组件**：直接在子组件标签内写内容

```vue
<!-- 子组件 -->
<template><div><slot></slot></div></template>

<!-- 父组件 -->
<Child><p>插槽内容</p></Child>
```


### 2. 具名插槽（多位置）
- **子组件**：给 `<slot>` 加 `name` 属性
- **父组件**：用 `v-slot:#name`（缩写 `#name`）匹配

```vue
<!-- 子组件 -->
<template>
  <header><slot name="header"></slot></header>
  <main><slot></slot></main> <!-- 默认name=default -->
</template>

<!-- 父组件 -->
<Child>
  <template #header><h1>标题</h1></template>
  <p>默认插槽内容</p>
</Child>
```


### 3. 作用域插槽（子传父数据）
- **子组件**：给 `<slot>` 绑定属性传数据
- **父组件**：用 `v-slot="数据对象"` 接收（可解构）

```vue
<!-- 子组件 -->
<template><slot :user="{ name: '张三' }"></slot></template>

<!-- 父组件 -->
<Child>
  <template v-slot="{ user }">
    <p>{{ user.name }}</p>
  </template>
</Child>
```


