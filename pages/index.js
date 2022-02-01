import Head from 'next/head';
import Navbar from '../Components/Navigation/Navbar';

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Project Bunny 🐰</title>
      </Head>
      <h1 className='text-3xl font-bold underline'>
        Testing 1234
      </h1>
    </div>
  );
};

export default Home;
