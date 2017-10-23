import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export default class CategoryService {
    constructor(httpClient){
        this.httpClient = httpClient;  
              
    }

    getAll(){
       return this.httpClient.fetch("categories")
            .then(response => response.categories)
            .catch(error => console.log(error));
    }

    add(category){
        return this.httpClient.fetch("categories", {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}