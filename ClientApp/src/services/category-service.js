import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export default class CategoryService {
    constructor(httpClient){
        this.httpClient = httpClient;
        this.baseUrl = "http://localhost:16809/api"
    }

    getCategories(){
       return this.httpClient.fetch(`${this.baseUrl}/categories`)
            .then(response => response.json())
            .then(categories => categories);
    }

    add(category){
        return this.httpClient.fetch(`${this.baseUrl}/categories`, {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(error => {
            return error.message;
        });
    }
}