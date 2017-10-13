import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export default class CategoryService {
    constructor(httpClient){
        this.httpClient = httpClient;
    }

    getCategories(){
       return this.httpClient.fetch('./src/services/category-list.json')
            .then(response => response.json())
            .then(categories => categories);
    }
}