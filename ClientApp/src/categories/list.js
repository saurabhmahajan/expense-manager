import {inject} from 'aurelia-framework';
import CategoryService from '../services/category-service';

@inject(CategoryService)
export class List{
    constructor(categoryService){
        this.categoryService = categoryService;
        this.moduleName = "Categories";
    }

    activate(){
        return this.categoryService.getCategories().then(categories => {
            this.categories = categories;
        });
    }

    addCategory(){
        return this.categoryService.add(this.category)
        .then(category => {
            this.categories.push(category);
        }).catch(error => {
            console.log(error);
        });
    }
}