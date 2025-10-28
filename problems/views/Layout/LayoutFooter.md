## 一、布局偏移问题：中间模块未居中

### 问题现象

“客户服务、关注我们、下载 APP、服务热线” 模块整体偏右，未在页面水平居中。

### 原因分析

布局容器 `.contact .container` 缺少**水平居中的样式配置**，且容器宽度未充满父元素，导致子元素默认左对齐，这个地方怀疑是给的资料就没写对，加入width: 100%;justify-content: center;两行代码之后就正常居中了。

```scss
.contact .container {
  width: 100%; // 容器充满父元素
  padding: 60px 0 40px; // 上下内边距，左右无内边距
  display: flex;
  justify-content: center; // 子元素水平居中
}

.contact dl {
  padding: 0 40px; // 调整dl左右内边距，保证模块宽度合理
  border-right: 1px solid #f2f2f2;
}

.contact dl:last-child {
  border-right: none; // 最后一个dl去掉右侧分隔线
}
```

## 二、dl/dt/dd 与 ul/li 用法混淆问题

### 问题场景

在 Footer 组件中，“客户服务” 等模块使用 `dl/dt/dd` 标签，需明确其与 `ul/li` 的区别。

### 核心区别

| 标签组合   | 语义核心                                   | 适用场景                       |
| ---------- | ------------------------------------------ | ------------------------------ |
| `dl/dt/dd` | 强调 “分类 - 内容” 或 “术语 - 解释” 的关联 | 联系方式、词汇表、参数说明等   |
| `ul/li`    | 强调 “多个并列项” 的无序集合               | 导航菜单、商品列表、并列选项等 |

### 代码示例

```html
<!-- dl/dt/dd 用法（分类-内容关系） -->
<dl>
  <dt>客户服务</dt>
  <dd>在线客服</dd>
  <dd>问题反馈</dd>
</dl>

<!-- ul/li 用法（并列项） -->
<ul>
  <li>首页</li>
  <li>居家</li>
  <li>美食</li>
</ul>
```

## 三、overflow: hidden 作用范围问题

### 问题疑问

为什么 `overflow: hidden;` 放在 `.app_footer` 中而非直接父类？

### 原因解析

`.app_footer` 是底部区域的**顶层容器**，作用于它可：

1. **一次性解决整个底部的浮动塌陷问题**（如 `.contact dd` 的 `float: left` 导致的父容器高度塌陷）；
2. **避免局部内容溢出破坏全局布局**，保证底部区域整体封闭性。

### 代码示例

```scss
.app_footer {
  overflow: hidden; // 作用于顶层容器，解决整体浮动和溢出问题
  background-color: #f5f5f5;
  padding-top: 20px;
}
```

## 四、&:first-child 和 &:last-child 清 padding 作用

### 问题疑问

为什么给 `dl` 的 `&:first-child` 和 `&:last-child` 清左右 `padding`？

### 作用解析

消除布局的 “多余间距”，让整体排版更紧凑、对齐更精准：

- `&:first-child { padding-left: 0; }`：避免第一个 `dl` 左侧留白导致整体左偏移；
- `&:last-child { padding-right: 0; border-right: none; }`：避免最后一个 `dl` 右侧留白和多余分隔线，保证布局对称。

### 代码示例

```scss
.contact dl {
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
    border-right: none;
  }
}
```

## 五、small 标签用法问题

### 问题疑问

`<small>周一至周日 8:00-18:00</small>` 中 `small` 标签的作用？

### 用法解析

`<small>` 是 HTML 语义化标签，用于表示**附属信息、次要内容**，默认呈现为小号文字，视觉上区分主次内容。

### 代码示例

```html
<dd class="hotline">400-0000-000 <small>周一至周日 8:00-18:00</small></dd>
```