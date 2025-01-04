import PostCard from "@/components/common/PostCard"; // Post card component
import PostModal from "@/components/common/PostModal"; // Modal component
import Header from "@/components/layout/Header"; // Header component
import { PostData, PostProps } from "@/interfaces"; // Interfaces
import { useState } from "react"; // React state management

// Functional component for the Posts page
const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility
  const [post, setPost] = useState<PostData | null>(null); // State for new post

  // Handle adding a new post
  const handleAddPost = (newPost: PostData) => {
    setPost({ ...newPost, id: posts.length + 1 }); // Assign a new ID and update post state
  };

  return (
    <div className="flex flex-col h-screen">
      <Header /> {/* Header */}
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)} // Open modal
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {/* Render posts */}
          {posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
            <PostCard title={title} body={body} userId={userId} id={id} key={key} />
          ))}
        </div>
      </main>

      {/* Conditional rendering of PostModal */}
      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)} // Close modal
          onSubmit={handleAddPost} // Handle form submission
        />
      )}
    </div>
  );
};

// Fetch posts data at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // Fetch from API
  const posts = await response.json();

  return {
    props: {
      posts // Pass posts as props
    }
  };
}

export default Posts;
