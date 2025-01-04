import { UserProps } from "@/interfaces";

// Functional component to display user details in a card format
const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Display the user's full name */}
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>

      {/* Display the username */}
      <p className="text-gray-600">@{username}</p>

      {/* Display the email address */}
      <p className="text-gray-600">Email: {email}</p>

      {/* Display the phone number */}
      <p className="text-gray-600">Phone: {phone}</p>

      {/* Display the website with a clickable link */}
      <p className="text-gray-600">
        Website: <a href={`http://${website}`} className="text-blue-500">{website}</a>
      </p>

      {/* Display the address with optional chaining */}
      <p className="text-gray-600">
        Address: {address?.street}, {address?.city || "City not available"}
      </p>

      {/* Display the company name with optional chaining */}
      <p className="text-gray-600">Company: {company?.name || "Company not available"}</p>
    </div>
  );
};

// Export the component for reuse
export default UserCard;
