import { useState, useEffect } from "react";
import axios from "axios";

// Define the shape of a story object
interface Story {
  id: "0";
  download_url: "";
}

// Custom hook to fetch stories from an API
const useFetchStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Effect to fetch stories when the component mounts
  useEffect(() => {
    // Function to fetch stories asynchronously
    const fetchStories = async () => {
      try {
        const response = await axios.get<Story[]>(
          "https://picsum.photos/v2/list?page=2&limit=10",
        );
        setStories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stories", error);
      }
    };

    fetchStories();
  }, []); // This effect runs only once on component mount

  // Return the fetched stories and loading state
  return { stories, loading };
};

export default useFetchStories;
