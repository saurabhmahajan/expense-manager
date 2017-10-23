import 'bulma/css/bulma.css';
import '../css/style.css';
import {HttpClient} from 'aurelia-fetch-client';


export function configure(aurelia){
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    const httpClient = new HttpClient();
    httpClient.configure(config => {
        config
            .withBaseUrl("http://localhost:16809/api/")
            .rejectErrorResponses()
            .withInterceptor({
                request(request){
                    console.log(`Requesting ${request.method} from ${request.url}`);
                    return request;
                },
                response(response){
                    console.log(`Received ${response.status} from ${response.url}`);
                    return response.json();
                }
            });
    });

    aurelia.container.registerInstance(HttpClient, httpClient);

    aurelia.start().then(a => a.setRoot());
}