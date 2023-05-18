import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const navigatoHandler = () => {
    navigate('product');
  }

  return (
    <>
      <h1>it's homePage</h1>
      <p>
        <button onClick={navigatoHandler}>Navigate</button>
      </p>
    </>
  );
};

export default Home;