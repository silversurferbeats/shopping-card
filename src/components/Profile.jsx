import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    isLoading && (<div>Loading...</div>)

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} className='w-20 h-20 md:w-12 md:h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' />
                {/* <h1> {user.name} </h1> */}
                {/* <p> {user.email} </p> */}
            </div>
        )
    )
}

export default Profile;