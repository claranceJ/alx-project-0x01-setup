export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}
/////////////////////////

// Geo interface represents the geographical coordinates of a user's address
export interface Geo {
    lat: string; // Latitude
    lng: string; // Longitude
}
  
// Address interface represents a user's address details
export interface Address {
    street: string; // Street name
    suite: string;  // Suite or apartment number
    city: string;   // City name
    zipcode: string; // ZIP code
    geo: Geo;       // Geographical coordinates
}
  
// Company interface represents a user's company details
export interface Company {
    name: string;        // Company name
    catchPhrase: string; // Company tagline
    bs: string;          // Business specialization
}
  
 // UserProps interface defines the structure for user data
export interface UserProps {
    id: number;          // User ID
    name: string;        // Full name
    username: string;    // Username
    email: string;       // Email address
    address: Address;    // Address details
    phone: string;       // Phone number
    website: string;     // Website URL
    company: Company;    // Company details
}
////////////////////////

// Interface for the structure of post data
export interface PostData {
    userId: number; // The ID of the user creating the post
    id?: number; // Optional ID for the post (added after creation)
    title: string; // The title of the post
    body: string; // The content/body of the post
}
  
// Interface for the props used in the PostModal component
export interface PostModalProps {
    onClose: () => void; // Function to close the modal
    onSubmit: (post: PostData) => void; // Function to handle form submission with the new post
}
  