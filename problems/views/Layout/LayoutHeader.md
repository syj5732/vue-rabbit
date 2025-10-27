## 一、RouterLink 相关问题

### 问题 1：为什么 SCSS 中不能写 RouterLink 选择器，只能写 a 标签？

解释：SCSS只能识别 **HTML 原生标签（如 a、div）**，无法识别 Vue 组件（如 RouterLink）。而 Vue Router 的 `<RouterLink>` 组件在浏览器渲染时，会自动编译为原生 `<a>` 标签兼容浏览器，因此需通过 `a` 选择器控制其样式。

```scss
.logo {
  width: 200px;
  // RouteLink标签会渲染为a标签，注意这个地方不能写RouteLink标签，因为scss只认识css原生标签
  a { // 选中 RouterLink 编译后的 a 标签
    display: block;
    background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    text-indent: -9999px;
    height: 132px;
    width: 100%;
  }
}
```

对应代码中的 RouterLink：

```html
<h1 class="logo">
  <RouterLink to="/">小兔鲜</RouterLink> <!-- 编译后为 <a href="/">小兔鲜</a> -->
</h1>
```

## 二、text-indent 相关问题

### 问题：为什么用 `text-indent: -9999px`？它的作用是什么？

解释：`text-indent` 是 CSS 属性，用于设置 **块级元素第一行文本的缩进量**。`-9999px` 表示 “向左缩进 9999px”，核心作用是 **隐藏标签内的文字（如 “小兔鲜”），但保留文字语义**（方便搜索引擎抓取，提升 SEO），同时用背景图展示 Logo，兼顾视觉效果和语义化。

```scss
a {
  display: block; // 设为block，text-indent才能生效（inline元素不支持text-indent）
  background: url('@/assets/images/logo.png') no-repeat center 18px / contain; // 展示Logo背景图
  // 注释：text-indent为缩进，设为 -9999px让小兔鲜这三个字不在网页中显示，在标签里写小兔鲜是因为方便网页关键字抓取
  text-indent: -9999px; // 文字向左缩进9999px，超出可视区域，实现“隐藏文字”
  height: 132px;
  width: 100%;
}
```

关键逻辑：避免用 `display: none` 或 `visibility: hidden`（会让搜索引擎忽略文字），用 `text-indent: -9999px` 既隐藏文字，又保留文字的语义价值。

## 三、display: flex 相关问题

### 问题：为什么 .app-header-nav 要重新设置 `display: flex`？不是父容器 .container 已经设过了吗？

解释：`display: flex` 的作用范围是 **“当前元素的直接子元素”**，仅对一级子元素生效，对孙元素无直接影响。父容器 `.container` 的 `flex` 控制的是 `.logo`、`.app-header-nav`、`.search` 这三个直接子元素的排列；而 `.app-header-nav` 内部的 `li` 是 “孙元素”，需给 `.app-header-nav` 单独设置 `display: flex`，才能让 `li` 横向排列（导航菜单需求）。

```scss
.container {
  display: flex; // 控制 .logo、.app-header-nav、.search 横向排列（一级子元素）
  align-items: center;
  .app-header-nav {
    width: 820px;
    z-index: 998;
    padding-left: 40px;
    position: relative;
    // display: flex只直接作用于子元素，所以要重新设置
    display: flex; // 控制内部 li 横向排列（二级子元素，即孙元素）
    li {
      margin-right: 40px; 
      width: 38px;
      text-align: center;
    }
  }
}
```

## 四、position: relative 相关问题

### 问题：.app-header-nav 中 `position: relative` 有什么用？还搭配了 z-index: 998？

解释：`position: relative` 有两个核心作用，配合 `z-index: 998` 可进一步优化层级：

1. **为子元素提供定位上下文**：若后续添加 “下拉菜单”（子元素设 `position: absolute`），`relative` 会让下拉菜单以 `.app-header-nav` 为参考定位，避免位置错乱（否则会以页面 body 为参考）；
2. **使 z-index 生效**：`z-index` 仅对 “定位元素”（relative/absolute/fixed）有效，`relative` 让 `z-index: 998` 生效，提升导航层级，避免被轮播图、弹窗等元素遮挡。

```scss
.app-header-nav {
  width: 820px;
  z-index: 998;
  padding-left: 40px;
  // 注释：配合 z-index: 998 提升导航层级，避免被其他元素遮挡
  position: relative; // 提供定位上下文 + 激活 z-index
  display: flex;
  li { /* ... */ }
}
```

## 五、.active 类与 &:hover 区别问题

### 问题：`.active` 类和 `&:hover` 样式几乎一样，它们的区别是什么？

解释：两者核心区别在于 **触发条件和作用场景**，前者是 “持久状态标识”，后者是 “临时交互反馈”：

- `&:hover`：鼠标悬浮时临时生效，移开后消失，作用是给用户 “可点击” 的交互反馈；
- `.active`：导航项对应页面被选中时生效（需结合路由动态添加），持久存在，作用是给用户 “当前位置” 的状态提示。

```scss
li {
  a {
    font-size: 16px;
    line-height: 32px;
    height: 32px;
    display: inline-block;
    
    &:hover { // 临时交互：鼠标悬浮时高亮
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
     // 标记 “当前活跃状态” 的导航项,简单举例说就是点击首页后首页会一直变色，直到点击下一个标签如居家。active要配合路由动态使用
     &.active { // 持久状态：当前页面导航高亮
       color: $xtxColor;
       border-bottom: 1px solid $xtxColor;
     }
  }
}
```

动态添加 `.active` 的逻辑：

```javascript
import { useRoute } from 'vue-router'
const route = useRoute() // 获取当前路由
```

```html
<li :class="{ active: route.path === '/' }"> <!-- 路由为 / 时添加 .active -->
  <RouterLink to="/">首页</RouterLink>
</li>
```