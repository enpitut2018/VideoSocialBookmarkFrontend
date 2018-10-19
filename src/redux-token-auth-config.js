import { generateAuthActions } from "redux-token-auth";
import config from "./config";

const reduxTokenAuthconfig = {
  authUrl: config.backend_api_url + "/auth",
  userAttributes: {},
  userRegistrationAttributes: {
    firstName: "first_name"
  }
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
} = generateAuthActions(reduxTokenAuthconfig);

export { registerUser, signInUser, signOutUser, verifyCredentials };
