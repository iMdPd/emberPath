import Controller from '@ember/controller';
// import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  items = [
    {
      isDone: true,
      label: 'Kupić jajka',
    },
    {
      isDone: true,
      label: 'Sprzedać jajka',
    },
    {
      isDone: false,
      label: 'Zainwestować pieniądze',
    },
    {
      isDone: false,
      label: 'Pławić się w luksusie',
    },
  ];
}
