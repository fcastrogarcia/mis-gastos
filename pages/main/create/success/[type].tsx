import { GetStaticProps, GetStaticPaths } from "next";
import SuccessView from "views/main/create/success";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { type: "payment" } }, { params: { type: "expense" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { type = "" } = params;
  return {
    props: { type },
  };
};

export default SuccessView;
