import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const {
  NEXTAUTH_URL,
  MONGODB_URI_DEV,
  MONGODB_URI,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = process.env;

const database = process.env.NODE_ENV === "development" ? MONGODB_URI_DEV : MONGODB_URI;

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  site: NEXTAUTH_URL,
  database,
});
