import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: 'Chris',
    username: 'sevilayha',
    avatar: 'https://pbs.twimg.com/profile_images/422816823302561793/Hg3LD8K7_400x400.jpeg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'
  },
  {
    id: 3,
    name: 'Holly',
    username: 'hollylawly',
    avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg'
  }
]);

@Injectable()
export class UserService {

  // get all users
  getUsers() {
    return usersPromise;
  }

  // find a specific user
  getUser(username) {
    return usersPromise.then(users => users.find(user => user.username === username));

    // let user = usersPromise.then(users => {
    //   return users.find(user => {
    //     return user.username === username;
    //   });
    // });

    // return user;
  }

}