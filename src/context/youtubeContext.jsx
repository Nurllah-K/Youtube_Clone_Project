import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../utils/getData";

export const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      getData(`/${selectedCategory.type}`).then((data) => setVideos(data.data));
    }
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((data) =>
        setVideos(data.data)
      );
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
