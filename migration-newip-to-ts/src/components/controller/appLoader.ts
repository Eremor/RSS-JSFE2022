import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '89b111fd925245659432b60fe96e76e4',
    });
  }
}

export default AppLoader;
