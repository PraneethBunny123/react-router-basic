import { Link } from "react-router-dom"

function Homepage() {
    return (
        <>
            <h1>Home page</h1>
            <p>Go to <Link to="/products">products</Link></p>
        </>
    )
}

export default Homepage