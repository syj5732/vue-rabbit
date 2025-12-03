import { onBeforeRouteUpdate } from 'vue-router';
import { getCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
export function useCategory(){
    //获取数据
    const categoryData = ref({})
    const route = useRoute()
    //直接使用route.params.id会有异步问题，可能导致更新延迟
    const getCategory = async (id=route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())
    //路由变化时重新获取数据
    onBeforeRouteUpdate((to)=>{
        getCategory(to.params.id)
    })
    return{
        categoryData
    }
}
