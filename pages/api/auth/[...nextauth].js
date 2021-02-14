import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import config from "config";

const { DB_URI, NEXTAUTH_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = config;

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  site: NEXTAUTH_URL,
  database: DB_URI,
});
