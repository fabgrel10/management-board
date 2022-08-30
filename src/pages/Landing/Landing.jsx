import { Link } from 'react-router-dom';

import './Landing.css';

const Landing = () => (
  <div className="container">
    <Link to="/Board">
      <span>Invoices</span>
    </Link>
    <span> | </span>
    <Link to="/Backlog">
      <span>Backlog</span>
    </Link>
  </div>
);

export default Landing;
