import {inject} from 'aurelia-framework';
import CategoryService from '../services/category-service';

@inject(CategoryService)
export class List{
    constructor(categoryService){
        this.categoryService = categoryService;
        this.moduleName = "Categories";
        this.category = {
            name: '',
            description: ''
        }
    }

    activate(){
        return this.categoryService.getAll().then(categories => {
            this.categories = categories;
        });
    }

    addCategory(){
        return this.categoryService.add(this.category)
        .then(category => {
            this.categories.push(category);
        })
        .catch(error => console.log(error));
    }
}