import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export default {
  expo: {
    name: "Modest",
    slug: "modest-app",
    privacy: "public",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000000",
    },
    description: "Modest by Asmay online shop",
    owner: "eddy-modest",
    assetBundlePatterns: ["**/*"],
    extra: {
      firebaseApiKey: process.env.API_KEY,
      firebaseAuthDomain: process.env.AUTH_DOMAIN,
      firebaseProjectId: process.env.PROJECT_ID,
      firebaseStorageBucket: process.env.STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.MESSAGE_SENDER_ID,
      firebaseAppId: process.env.APP_ID,
      appUrl: process.env.URI,
    },
  },
};
