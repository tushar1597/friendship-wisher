import { db } from './firebase';

// User API
export const createRegisteredUsers = (email)=>
db.ref(`RegisteredUsers/${email}`).set({
    email,
});

export const createUserDetails = (id,name,email,imageURL,theme)=>{
console.log('f1');
db.ref(`UserDetails/${id}`).set({
  name,
  email,
  imageURL,
  theme,
});
}

export const createUserCount = (id)=>
db.ref(`UserCount`).set({
  UserCount:id
});
