import { Layout } from "components/Layout";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import styles from "./styles";

type SuccessProps = {
  type: string;
};

function Success({ type }: SuccessProps) {
  return (
    <Layout>
      <styles.Container>
        <styles.Card>
          <styles.Upper>
            <styles.Legend>
              <styles.Check />
              <p>Your {type} was created succesfully</p>
            </styles.Legend>
          </styles.Upper>
          <styles.Buttons>
            <Link href="/main">
              <Button color="primary" variant="outlined">
                Back To Dashboard
              </Button>
            </Link>
            <Link href="/main/create">
              <Button color="primary" variant="outlined">
                Create New Item
              </Button>
            </Link>
          </styles.Buttons>
        </styles.Card>
      </styles.Container>
    </Layout>
  );
}

export default Success;
