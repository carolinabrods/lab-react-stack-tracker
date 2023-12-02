import { useParams, Link } from 'react-router-dom';

// Iteration 5: Show Company Details
function CompanyPage({ companies }) {
  // Iteration 5.1
  // URL Parameter - :companySlug
  const { companySlug } = useParams();

  // Iteration 5.2
  // Retrieving the data for a specific company
  const singleCompany = companies.find(company => company.slug === companySlug);

  return (
    <div key={singleCompany.id} className='company-page'>
      <h1>Company Profile</h1>
      {/* Iteration 5.2 - Show company details */}
      <div className='page-info'>
        {/* <a href={singleCompany.website}>
          <img src={singleCompany.logo} alt='logo' />
        </a> */}
        <a href={singleCompany.website}>
          <button>
            <img src={singleCompany.logo} alt='logo' />
          </button>
        </a>
        <div className='page-details'>
          <h2>{singleCompany.name}</h2>
          <h3>About</h3>
          <p>{singleCompany.description}</p>
        </div>
      </div>
      {/* Iteration 5.3 - Show company's tech stack */}
      <h3>Tech Stack</h3>
      <div className='tech-info'>
        {singleCompany.techStack.map(tech => {
          return (
            <div key={tech.name} className='tech-pair'>
              <Link to={`/tech/${tech.slug}?company=${singleCompany.slug}`}>
                <button>
                  <img src={tech.image} alt='tech logo' />
                </button>
                <p>{tech.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className='back-button'>
        <Link to='/'>
          <button>Back to Companies List</button>
        </Link>
      </div>
    </div>
  );
}

export default CompanyPage;
