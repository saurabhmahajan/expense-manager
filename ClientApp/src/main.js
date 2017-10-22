import 'bulma/css/bulma.css';

export function configure(aurelia){

    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start().then(a => a.setRoot());
}