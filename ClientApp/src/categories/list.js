import {inject} from 'aurelia-framework';
import {ValidationControllerFactory, ValidationRules } from 'aurelia-validation';
import CategoryService from '../services/category-service';

@inject(CategoryService, ValidationControllerFactory)
export class List{
    constructor(categoryService, validationControllerFactory){
        this.categoryService = categoryService;
        this.controller = validationControllerFactory.createForCurrentScope();
        this.category = {
            name: '',
            description: ''
        }

        ValidationRules
            .ensure('name').required()
            .on(this.category);
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