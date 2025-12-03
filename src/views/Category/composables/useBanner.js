import { getBannerAPI } from '@/apis/home';
import { ref,onMounted } from 'vue';
export function useBanner(){
    //获取banner数据
    const bannerList = ref([])
    const getBanner = async () => {
    const optipn = { distrubutionSite: '2' }
    const res = await getBannerAPI(optipn)
    bannerList.value = res.result
    }
    onMounted(() => getBanner())
    return {
        bannerList
    }
}