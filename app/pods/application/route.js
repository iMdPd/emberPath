import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicatioRoute extends Route {
  @service store;

  beforeModel() {}

  async model() {
    return await this.store.findAll('task');
  }

  afterModel() {}
}
