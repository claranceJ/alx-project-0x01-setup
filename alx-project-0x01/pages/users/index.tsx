import UserCard from "@/components/common/UserCard"; // Import the UserCard component
import Header from "@/components/layout/Header"; // Import the Header component
import { UserProps } from "@/interfaces"; // Import the UserProps interface

// Functional component to render a list of users
const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Display the page header */}
      <Header />

      <main className="p-4">
        {/* Page title */}
        <h1 className="text-2xl font-semibold">Users</h1>

        {/* Grid layout to display user cards */}
        <div className="grid grid-cols-3 gap-4">
          {/* Loop through the users array and render a UserCard for each user */}
          {users?.map((user) => (
            <UserCard
              key={user.id} // Unique key for each user card
              name={user.name}
              username={user.username}
              email={user.email}
              address={user.address}
              phone={user.phone}
              website={user.website}
              company={user.company}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

// Fetch user data at build time using getStaticProps
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Fetch user data from API
  const users = await response.json(); // Parse JSON response

  return {
    props: {
      users, // Pass the fetched users data as props
    },
  };
}

// Export the Users component as default
export default Users;
