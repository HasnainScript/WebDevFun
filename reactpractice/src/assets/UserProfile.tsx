import {useState , useEffect} from 'react'

type User = {
  id: number;
  name: string;
  email: string;
}

function UserProfile({userId}: {userId: number}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       async function loadUser() {
            setLoading(true);
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await res.json();
            setUser(data);
            setLoading(false);
        }
        loadUser();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserProfile;