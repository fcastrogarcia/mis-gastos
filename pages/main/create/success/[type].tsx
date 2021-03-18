import { GetStaticProps, GetStaticPaths } from "next";
import { Layout } from "components/Layout";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import { getColor } from "styles/utils";

const Container = styled.div.attrs({
  className: "container container--1280 flex flex--column",
})``;

const Buttons = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: column;
  padding: 40px;
`;

const Check = styled(CheckCircle).attrs({ size: 120 })`
  color: white;
  margin-bottom: 32px;
`;

const Legend = styled.div.attrs({ className: "flex flex--column" })`
  & p {
    font-size: 20px;
    text-align: center;
    color: #fafafa;
  }
`;

const Card = styled.div`
  position: relative;
  bottom: 76px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.fuzzy};
`;

const Upper = styled.div`
  background: ${getColor("green", 600)};
  padding: 40px;
`;

type SuccessProps = {
  type: string;
};

function Success({ type }: SuccessProps) {
  return (
    <Layout>
      <Container>
        <Card>
          <Upper>
            <Legend>
              <Check />
              <p>Your {type} was created succesfully</p>
            </Legend>
          </Upper>
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
      </Container>
    </Layout>
  );
}

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

export default Success;
