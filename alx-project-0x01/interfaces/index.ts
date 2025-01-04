export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}
  

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
  