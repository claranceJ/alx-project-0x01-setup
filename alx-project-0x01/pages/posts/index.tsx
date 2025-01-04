import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-6">
        <h1 className="text-3xl font-bold">Posts</h1>
        <p>List of posts will go here.</p>
      </main>
    </div>
  );
}

export default Posts;
