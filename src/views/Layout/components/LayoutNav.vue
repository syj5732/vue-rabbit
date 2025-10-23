<script setup>

</script>
<template>
    <div class="app-topnav">
        <div class="container">
            <template v-if="true">
                <ul>
                    <!-- i标签用作斜体，也可以通过class引入图标 -->
                    <li><a href="javascript:;"><i class="iconfont icon-user"></i>周杰伦</a></li>
                    <li>
                        <!--el-popconfirm是element-plus组件，效果是在插槽位置显示一个弹窗，需要设置属性title、confirm-button-text/cancel-button-text，通过@confirm绑定事件完成交互-->
                        <!--#reference是el-popconfirm插槽，title是弹窗内容，confirm-button-text/cancel-button-text是按钮内容-->
                        <el-popconfirm title="确认退出吗" confirm-button-text="确认" cancel-button-text="取消">
                            <template #reference>
                                <li><a href="javascript:;">退出登录</a></li>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><a href="javascript:;">我的订单</a></li>
                    <li><a href="javascript:;">会员中心</a></li>
                </ul>
            </template>
           <template v-else-if="false">
                <ul>
                    <li><a href="javascript:;">请先登录</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                    <li><a href="javascript:;">帮助中心</a></li>
                </ul>
           </template>
        </div>
    </div>
</template>
<style scoped lang="scss">
.app-topnav{
    background-color: #333;
    ul{
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;
        li{
            a{
                color: #cdcdcd;
                //a 标签加 padding，padding 属于 a 标签内部范围，点击有效，同时控制间距，若用 margin，margin 是外部间距，不属于 a 标签，点击无效，且无法扩大交互区域
                padding: 0 15px;
                //重置默认行高，避免默认行高影响对齐
                line-height: 1;
                //inline-block设置padding才生效
                display: inline-block;
                i{
                    font-size: 14px;
                    margin-right: 2px;
                }
                //&代表父选择器
                &:hover{
                    color: $xtxColor;
                }
            }
            //~li代表除第一个li标签以外的所有兄弟li标签
            ~li{
                a{
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>