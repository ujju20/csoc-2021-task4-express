var getLogin = (req, res) => {
  //render login page
};

var postLogin = (req, res) => {
  //authenticate using passport
  //On successful authentication, redirect to next page
};

var logout = (req, res) => {
  //write code to logout user and redirect back to the page
};

var getRegister = (req, res) => {
  //render register page
};

var postRegister = (req, res) => {
  //Register user to User db using passport
  //On successful authentication, redirect to next page
};

module.exports = {
  getLogin,
  postLogin,
  logout,
  getRegister,
  postRegister,
};
