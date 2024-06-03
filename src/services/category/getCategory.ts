import axios from "axios";
import { url } from "../../api/apiUrl";

export interface Category{
    id:number,
    title:string,
    image:string,
    active:boolean,
    slug:string
}

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
        console.log('Error Featching category',error);
        return null;
    }
}

async function getAllCategories():Promise<Category[]>{
    console.log('Running')
    console.log(url+'v1/store/category/');
    try{
        const response = await axios.get(url+'v1/store/category/');
        console.log(response.data);
        return response.data.map((categoryData: any)=>({
            id:categoryData.id,
            title:categoryData.title,
            image:categoryData.image,
            active:categoryData.active,
            slug:categoryData.slug,
        }));
        
    }
    catch(error){
        console.error('Error Featching Categories:',error);
        return[];
    }
}

export {getAllCategories, getCategory};