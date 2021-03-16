import { Layout } from "components/Layout";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import { getColor } from "styles/utils";
import { useRouter } from "next/router";
import Card from "@material-ui/core/Card";

const Container = styled.div.attrs({
  className: "container container--1280 flex flex--column",
})``;

const Buttons = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-flow: column;
`;

const Check = styled(CheckCircle).attrs({ size: 120 })`
  color: ${getColor("green", 500)};
  margin-bottom: 32px;
`;

const Legend = styled.div.attrs({ className: "flex flex--column" })`
  margin-bottom: 64px;
  & p {
    font-size: 20px;
    color: ${getColor("gray", 800)};
    text-align: center;
  }
`;

const Success = () => {
  const { query } = useRouter();
  const { type } = query;
  return (
    <Layout>
      <Container>
        <div style={{ position: "relative", bottom: 76 }}>
          <Card variant="outlined" elevation={4}>
            <Legend>
              <Check />
              <p>Your {type} was created succesfully</p>
            </Legend>
            <Buttons>
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
            </Buttons>
          </Card>
        </div>
      </Container>
    </Layout>
  );
};

export default Success;
