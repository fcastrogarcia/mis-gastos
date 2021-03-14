import SectionTitle from "components/SectionTitle";
import styles from "./styles";
import Form from "components/Form";
import LoadingProvider from "context/loading";

const Create = () => {
  return (
    <LoadingProvider>
      <SectionTitle text="Add a new item" />
      <styles.Content>
        <Form />
      </styles.Content>
    </LoadingProvider>
  );
};

export default Create;
