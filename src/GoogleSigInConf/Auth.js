import app from "./firebase-config";


const socialMediaAuth = (provider) => {
  return app
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((er) => {
      return er;
    });
};

export default socialMediaAuth;
