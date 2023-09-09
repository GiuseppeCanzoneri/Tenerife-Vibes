import ListDestination from "./ListDestination";
import destinations from "./destinationData";

const HomePage = () => {
  return (
    <>
      <ListDestination destinations={destinations} />
    </>
  );
};

export default HomePage;
