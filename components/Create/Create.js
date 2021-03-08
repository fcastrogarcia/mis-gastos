import SectionTitle from "components/SectionTitle";
import Switch from "components/Switch";
import useHandleForm from "./useHandleForm";
import styles from "./styles";

const typeOptions = [
  { value: "payment", label: "payment" },
  { value: "expense", label: "expense" },
];

const Create = () => {
  const { data, handleClick } = useHandleForm();

  console.log({ data });

  return (
    <div className="container container--1280">
      <SectionTitle text="Add a new item" />
      <styles.Content>
        <form>
          <fieldset>
            <Switch
              options={typeOptions}
              handleClick={handleClick}
              selected={data.type}
            />
          </fieldset>
        </form>
      </styles.Content>
    </div>
  );
};

export default Create;
