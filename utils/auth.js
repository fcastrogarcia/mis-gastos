import jwt from "next-auth/jwt";
import { getSession } from "next-auth/client";

export const authenticate = (redirect = "/login") => async ctx => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: redirect,
        permanent: false,
      },
    };
  }

  return { props: { session } };
};

const secret = process.env.JWT_SECRET;

export const verifyToken = async req => {
  try {
    if (!req) throw new Error("No req object was provided as parameter");
    const token = await jwt.getToken({ req, secret });
    return token;
  } catch (err) {
    console.error(err);
    return null;
  }
};
