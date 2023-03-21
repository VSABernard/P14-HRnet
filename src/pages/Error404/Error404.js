import { Link } from "react-router-dom"
import '../Error404/Error404.css'

/**
 * Component React that displays the page Error 404
 * @component 
 * @returns The page Error 404 when the path is not found
 */
function Error404() {
  return (
    <div> 
        <section className="error-section">
            <h1 className="error-title">404</h1>
            <p className="sign">⚠️</p>
            <p className="error-content">
                Oups! The page you requested does not exist.
            </p>
            <Link to="/">                                                       {/* Link to Homepage */}
                <p className="error-link">Go to homepage</p>
            </Link>
        </section>
    </div>
  )
}

export default Error404