import { Link } from 'react-router-dom';

function HomePage({ companies }) {
  return (
    <div className='company-block'>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {/* Iteration 4: Display Companies as a List */}
      {companies.map(company => {
        return (
          <div key={company.id}>
            <Link to={`/company/${company.slug}`}>
              <h3>{company.name}</h3>
              <img src={company.logo} alt='logo' />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
