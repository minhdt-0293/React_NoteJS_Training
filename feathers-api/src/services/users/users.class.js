const { Service } = require('feathers-mongoose');
const crypto = require('crypto');

const gravatarUrl = 'https://s.gravatar.com/avatar';
const query = 's=60';


exports.Users = class Users extends Service {
  async create(data, params) {
    const {email, password, githubId} = data;
    const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
    const avatar = `${gravatarUrl}/${hash}?${query}`;

    const userData = {
      email,
      password,
      githubId,
      avatar
    };

    await super.create(userData, params);

    return {'message': 'create new user success'};
  }

};
