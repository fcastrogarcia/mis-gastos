import SectionTitle from "components/SectionTitle";
import styles from "./styles";
import Form from "components/Form";
import { LoadingContainer } from "components/Layout";

const Create = () => {
  return (
    <LoadingContainer className="container--1280">
      <>
        <SectionTitle text="Add a new item" />
        <styles.Content>
          <Form />
        </styles.Content>
      </>
    </LoadingContainer>
  );
};

export default Create;
