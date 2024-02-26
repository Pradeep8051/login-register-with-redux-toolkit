import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export { Home };

function Home() {
    const auth = useSelector(x => x.auth.value);
    return (
        <div>
            <h1>Hi {auth?.firstName}!</h1>
            <p>You're logged in Baseline it devlepment!!</p>
            <p><Link to="/users">Manage Users</Link></p>
        </div>
    );
}
