import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked items = [
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

  @action
  onInputValue(event) {
    this.newTaskValue = event.target.value;
  }

  @action
  addNewTask(event) {
    event.preventDefault();
    this.items = [
      ...this.items,
      {
        isDone: false,
        label: this.newTaskValue,
      },
    ];
  }
}
