import { ConfigProps } from "./types/config";

export const config = {
  appName: "Hi I'm Paranjay",
  appDesignation: "Software Developer",
  appDescription: `Hi, I'm Paranjay Khachar. Welcome to my portfolio.`,

  domainName: "localhost:3000", // Update this with your domain later

  colors: {
    theme: "dark",
    main: "#000000",
  },

  social: {
    github: "https://github.com/paranjay", // Update with your GitHub
    linkedin: "https://linkedin.com/in/paranjay-khachar", // Update with your LinkedIn
    instagram: "", // Add your Instagram if needed
    discord: "", // Add your Discord if needed
    email: "paranjay@example.com", // Update with your email
    phone: "", // Add your phone if needed
    youtube: "", // Add your YouTube if needed
    twitter: "", // Add your Twitter if needed
    buymeacoffee: "", // Add your Buy Me A Coffee if needed
  },

  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
