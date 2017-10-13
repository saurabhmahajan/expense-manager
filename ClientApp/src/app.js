import 'bulma/css/bulma.css';

export class App{
    constructor(){
        this.title = "Expense Manager";
        this.message = "All your expenses at one place";
    }

    configureRouter(config, router){
        this.router = router;

        config.map([
            { route: ['', 'home'], title: 'Home', name: 'home', moduleId: PLATFORM.moduleName('./expenses/list'), nav: true},
            { route: 'categories', title: 'Categories', name:'categories', moduleId: PLATFORM.moduleName('./categories/list'), nav: true}
        ]);
    }
}