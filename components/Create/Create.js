import SectionTitle from "components/SectionTitle";
import useHandleForm from "hooks/useHandleForm";
import styles from "./styles";
import Form from "components/Form";

const Create = () => {
  const { values, handleChange, handleSubmit } = useHandleForm();

  return (
    <div className="container container--1280">
      <SectionTitle text="Add a new item" />
      <styles.Content>
        <Form
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isPayment={values?.type === "payment"}
        />
      </styles.Content>
    </div>
  );
};

export default Create;
