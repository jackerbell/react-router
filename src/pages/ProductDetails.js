import { useParams,Link } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();

  return (
    <>
      <h1>Details on here!!!!!!!</h1>
      <p>{params.id}</p>
      <p><Link to='..' relative='route'>Back</Link></p> {/* relative property를 써서 */}
    </>
  );
};

export default ProductDetails;