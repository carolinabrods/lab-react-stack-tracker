import { useParams, Link, useSearchParams } from 'react-router-dom';

function TechnologyPage({ technologies }) {
  // Iteration 6 - Technology Details

  // Iteration 6.1
  // URL Parameter - :slug
  const { slug } = useParams();

  // Iteration 6.2 - Show technology details
  const singleTech = technologies.find(tech => tech.slug === slug);

  // Iteration 7 - Back to Visited Company
  const [searchParams, setSearchParams] = useSearchParams();
  const companyName = searchParams.get('company');

  return (
    <div key={singleTech.id}>
      <h1>Technology Details</h1>
      {/* Iteration 6.2 */}
      <div className='page-info'>
        <button>
          <img src={singleTech.image} alt='tech logo' />
        </button>
        <div className='page-details'>
          <h2>{singleTech.name}</h2>
          <h3>About</h3>
          <p>{singleTech.description}</p>
        </div>
      </div>
      <div className='back-button'>
        <Link to={`/company/${companyName}`}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default TechnologyPage;
