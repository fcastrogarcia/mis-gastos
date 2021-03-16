import React from "react";
import Create from "components/Create";
import { Layout } from "components/Layout";
import LoadingProvider from "context/loading";

const CreatePage: React.FC = () => {
  return (
    <Layout>
      <LoadingProvider>
        <Create />
      </LoadingProvider>
    </Layout>
  );
};

export default CreatePage;
