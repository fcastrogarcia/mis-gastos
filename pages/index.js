import authenticate from "utils/auth";

function Home(props) {
  return <div className="container"></div>;
}

export default Home;

export const getServerSideProps = authenticate();
