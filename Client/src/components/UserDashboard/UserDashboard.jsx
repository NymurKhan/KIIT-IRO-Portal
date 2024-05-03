import useAuth from "../../Hooks/useAuth";

const UserDashboard = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1 className="text-lg font-semibold">Welcome {user?.displayName}</h1>
        </div>
    );
};

export default UserDashboard;