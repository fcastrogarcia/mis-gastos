import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import config from "config";

const {
  DB_URI,
  NEXTAUTH_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  JWT_SECRET,
} = config;

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    // Providers.Email({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM
    // }),
  ],
  site: NEXTAUTH_URL,
  secret: JWT_SECRET,
  database: DB_URI,
  session: {
    jwt: true,
  },
  jwt: {
    secureCookie: true,
  },
});
