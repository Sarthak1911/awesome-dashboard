const users = [];

localStorage.setItem("users", JSON.stringify(users));

export function getAllUsers() {
  return users;
}

export function registerUser(newUser) {
  //Check if the user already exists
  const existsEmail = users.find(user => user.email === newUser.email);
  const existsUsername = users.find(user => user.username === newUser.username);
  if (existsUsername) {
    throw new Error("Username already taken");
  }
  if (existsEmail) {
    throw new Error("Email already taken");
  }
  //Add the user
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  return newUser.username;
}

export function loginUser(userInfo) {
  const existsUser = users.find(user => user.username === userInfo.username);

  if (!existsUser) throw new Error("Username or password is incorrect");

  if (userInfo.password !== existsUser.password)
    throw new Error("Username or password is incorrect");

  return userInfo.username;
}

export function logoutUser(token) {
  localStorage.removeItem(token);
}
