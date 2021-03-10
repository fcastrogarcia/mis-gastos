import SectionTitle from "components/SectionTitle";
import useHandleForm from "./useHandleForm";
import styles from "./styles";
import Form from "components/Form";

const Create = () => {
  const { values, handleChange, handleSubmit } = useHandleForm();

  return (
    <div className="container container--1280">
      <SectionTitle text="Add a new item" />
      <styles.Content>
        <Form values={values} handleChange={handleChange} handleSubmit={handleSubmit} />
      </styles.Content>
    </div>
  );
};

export default Create;
