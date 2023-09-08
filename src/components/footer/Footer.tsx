import { Link } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <span>Kaggle Analytics © {new Date().getFullYear()}</span>
      <span>Data from <Link to="https://www.kaggle.com/">Kaggle</Link></span>
    </div>
  )
}

export default Footer