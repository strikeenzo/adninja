import ResourceService from './ResourceService';

export default class UserService extends ResourceService {
  constructor(...args) {
    super(...args, 'users');
  }

  listGroups(userId, ...args) {
    return this._get(`/users/${userId}/groups`, ...args);
  }

  listPersonalGroups(userId, ...args) {
    return this._get(`/users/${userId}/personalGroups`, ...args);
  }

  listOwnedGroups(userId, ...args) {
    return this._get(`/users/${userId}/ownedGroups`, ...args);
  }

  listContactRequests(userId, ...args) {
    return this._get(`/users/${userId}/contact-requests`, ...args);
  }
}
