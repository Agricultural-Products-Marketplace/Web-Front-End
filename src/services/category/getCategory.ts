import axios from "axios";
import { url } from "../../api/apiUrl";
import { Category } from "../../model/category";



async function getCategory(categoryId:number):Promise<Category | null>{
    try{
        const response = await axios.get(url+'v1/store/category/');
        return {
            id:response.data.id,
            title:response.data.title,
            image:response.data.image,
            active:response.data.active,
            slug:response.data.slug,
        };
    }catch(error){
        return null;
    }
}

async function getAllCategories():Promise<Category[]>{
    try{
        const response = await axios.get(url+'v1/store/category/');
        return response.data.map((categoryData: any)=>({
            id:categoryData.id,
            title:categoryData.title,
            image:categoryData.image,
            active:categoryData.active,
            slug:categoryData.slug,
        }));
        
    }
    catch(error){
        return[];
    }
}

export {getAllCategories, getCategory};