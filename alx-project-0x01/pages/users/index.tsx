import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <p>List of users will go here.</p>
      </main>
    </div>
  );
}

export default Users;
