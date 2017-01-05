import ResourceService from './ResourceService';

export default class AdService extends ResourceService {
  constructor(...args) {
    super(...args, 'ads');
  }

  list(userId, ...args) {
    return this._post('/ads/list', ...args);
  }
}
