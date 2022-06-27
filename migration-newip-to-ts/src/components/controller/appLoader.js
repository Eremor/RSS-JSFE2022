import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '89b111fd925245659432b60fe96e76e4', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
