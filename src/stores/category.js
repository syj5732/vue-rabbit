import { defineStore } from "pinia";
import { ref } from "vue";
import { getCategoryAPI } from "@/apis/Layout";

export const useCategoryStore=defineStore('category',()=>{
    const categoryList=ref([])
    const getCategory=async()=>{
        const res=await getCategoryAPI()
        categoryList.value=res.result
    }
    return {categoryList,getCategory}
})

