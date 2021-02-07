import { getSession } from "next-auth/client";

const authenticate = (redirect = "/login") => async ctx => {
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

export default authenticate;