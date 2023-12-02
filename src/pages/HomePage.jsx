import { Link } from 'react-router-dom';

function HomePage({ companies }) {
  return (
    <div className='homepage'>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {/* Iteration 4: Display Companies as a List */}
      <div className='companies-list'>
        {companies.map(company => {
          return (
            <div key={company.id} className='company-block'>
              <Link to={`/company/${company.slug}`}>
                <h3>{company.name}</h3>
                <img src={company.logo} alt='logo' />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
