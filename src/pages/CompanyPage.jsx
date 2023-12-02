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
    <div key={singleCompany.id}>
      <h1>Company Profile</h1>
      {/* Iteration 5.2 - Show company details */}
      <img src={singleCompany.logo} alt='logo' />
      <h2>{singleCompany.name}</h2>
      <a href={singleCompany.website}>Website</a>
      <h3>About</h3>
      <p>{singleCompany.description}</p>
      {/* Iteration 5.3 - Show company's tech stack */}
      <h3>Tech Stack</h3>
      {singleCompany.techStack.map(tech => {
        return (
          <>
            <Link to={`/tech/${tech.slug}&company=${singleCompany.slug}`}>
              <img src={tech.image} alt='tech logo' />
              <p>{tech.name}</p>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default CompanyPage;
