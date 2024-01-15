import List from "../../components/list/List";
import Featured from "../../components/featured/featured";
import "./home.scss";

const Home = () => {

  return (
    <div className="home">
      <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
};

export default Home;
