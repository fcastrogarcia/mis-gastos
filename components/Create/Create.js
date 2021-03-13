import SectionTitle from "components/SectionTitle";
import styles from "./styles";
import Form from "components/Form";

const Create = () => {
  return (
    <div className="container container--1280">
      <SectionTitle text="Add a new item" />
      <styles.Content>
        <Form />
      </styles.Content>
    </div>
  );
};

export default Create;
