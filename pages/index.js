import Head from 'next/head';
import Navbar from '../Components/Navigation/Navbar';

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Project Bunny 🐰</title>
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
