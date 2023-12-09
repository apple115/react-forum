// SearchPage.js
import React, { useState } from "react";
import PostList from "../PostList";
import "./SearchPage.css";
import { Menu, Input, Button } from "antd";
import My_Menu from "../Menu";
const { Search } = Input;

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Perform search based on the searchTerm
    // For demonstration, let's assume searchResults is obtained from an API
    const mockSearchResults = [
      {
        id: 5,
        title: "Search Result 1",
        author: "User5",
        timestamp: "2023-01-05",
      },
      {
        id: 6,
        title: "Search Result 2",
        author: "User6",
        timestamp: "2023-01-06",
      },
      // Add more search results as needed
    ];

    setSearchResults(mockSearchResults);
  };

  return (
    <div className="search-page">
      <My_Menu Page="SearchPage" />
      <h2>Search</h2>
      <div>
        <Search
          placeholder="Enter search term..."
          enterButton={<Button onClick={handleSearch}>Search</Button>}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={handleSearch}
        />
      </div>

      {searchResults.length > 0 ? (
        <PostList posts={searchResults} />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchPage;
