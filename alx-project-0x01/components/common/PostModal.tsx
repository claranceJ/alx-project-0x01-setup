import { PostData, PostModalProps } from "@/interfaces"; // Import interfaces
import React, { useState } from "react"; // React hooks for state management

// Functional component for the Post Modal
const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  // State for storing form data
  const [post, setPost] = useState<PostData>({
    userId: 1, // Default userId
    title: "", // Empty title
    body: "" // Empty body
  });

  // Handle changes in the input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; // Get the name and value of the changed field
    setPost((prevPost) => ({ ...prevPost, [name]: value })); // Update the corresponding field in state
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSubmit(post); // Pass the post data to the onSubmit function
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      {/* Modal content container */}
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          {/* User ID Input */}
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700 font-medium mb-2">User ID</label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={post.userId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Title Input */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
          {/* Body Input */}
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Body</label>
            <textarea
              id="body"
              name="body"
              value={post.body}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose} // Close modal
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit" // Submit form
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
