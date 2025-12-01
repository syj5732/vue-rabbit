# Axios中params参数详解

## params 的含义
在Axios请求配置中，`params` 是用于传递**URL查询参数（Query Parameters）**的配置项。

## 具体作用解析
1. **参数类型** 
   它会将键值对以 `key=value` 的形式附加在请求URL的末尾，形成查询字符串。

2. **实际效果** 
   当调用 `getCategoryAPI(100)` 时：
   
   ```javascript
   getCategoryAPI(100)
   ```
   实际发送的请求URL会变成：
   ```
   /category?id=100
   ```
   服务器端可以通过解析URL中的 `id` 参数来获取这个值。
   
3. **与 `data` 的区别**  

   | 参数 | 用途 | 请求方式 | 参数位置 |
   |------|------|----------|----------|
   | `params` | 传递查询参数 | GET（默认） | URL末尾 |
   | `data` | 传递请求体数据 | POST/PUT等 | 请求体（body） |

## 代码示例对比
### GET请求（使用params）
```javascript
return httpInstance({
    url: '/category',
    method: 'GET', // 默认GET可省略
    params: { id: 100 } // URL变成 /category?id=100
})
```

### POST请求（使用data）
```javascript
return httpInstance({
    url: '/category',
    method: 'POST',
    data: { id: 100 } // 参数在请求体中，URL还是 /category
})
```

## 总结
- `params` 用于在**GET请求**中通过URL传递查询参数
- 会被拼接成 `?key1=value1&key2=value2` 的形式附加在URL后
- 与 `data` 不同，`data` 用于POST请求在请求体中传参