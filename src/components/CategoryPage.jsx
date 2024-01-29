import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Capsule component for displaying selected genre
const Capsule = ({ genre }) => {
  return (
    <div className="bg-green-500 text-white font-bold p-2 rounded-2xl mb-4 text-center">
      {genre.title}
    </div>
  );
};

// Main component
const CategoryPage = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [minCategoriesRequired, setMinCategoriesRequired] = useState(true);



  // Effect to load selected genres from localStorage on component mount
  useEffect(() => {
    const selectedGenres = JSON.parse(localStorage.getItem("selectedGenres"))
    if (selectedGenres && selectedGenres.length > 0) {
      setSelectedGenres(selectedGenres);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Effect to update localStorage whenever selectedGenres changes
  useEffect(() => {
    localStorage.setItem('selectedGenres', JSON.stringify(selectedGenres));
    setMinCategoriesRequired(selectedGenres.length < 2);
  }, [selectedGenres]);




  const handleGenreClick = (genre) => {
    // Check if the genre is already selected
    if (selectedGenres.find((selectedGenre) => selectedGenre.id === genre.id)) {
      // If already selected, do nothing or remove it
      setSelectedGenres((prevSelectedGenres) =>
        prevSelectedGenres.filter((selectedGenre) => selectedGenre.id !== genre.id)
      );
    } else {
      // If not selected, add it
      setSelectedGenres((prevSelectedGenres) => [...prevSelectedGenres, genre]);
    }

    // Check if minimum categories requirement is met
    setMinCategoriesRequired(selectedGenres.length < 2);
  };

  const genres = [
    { id: 1, title: 'Action', imageUrl: 'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', bgColor: '#FF5209', borderRadius: '10%' },
    { id: 2, title: 'Drama', imageUrl: 'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', bgColor: '#D7A4FF', borderRadius: '10%' },
    { id: 3, title: 'Romance', imageUrl: 'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', bgColor: '#148A08', borderRadius: '10%' },
    { id: 4, title: 'Thriller', imageUrl: 'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', bgColor: '#84C2FF', borderRadius: '10%' },
    { id: 5, title: 'Western', imageUrl: 'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', bgColor: '#902500', borderRadius: '10%' },
    { id: 6, title: 'Horror', imageUrl: 'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', bgColor: '#7358FF', borderRadius: '10%' },
    { id: 7, title: 'Fantasy', imageUrl: 'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', bgColor: '#FF4ADE', borderRadius: '10%' },
    { id: 8, title: 'Music', imageUrl: 'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', bgColor: '#E61E32', borderRadius: '10%' },
    { id: 9, title: 'Fiction', imageUrl: 'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', bgColor: '#6CD061', borderRadius: '10%' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main Content Section */}
      <div className="flex-grow flex">
        {/* Left div for main content */}
        <div className="w-1/2 p-8 bg-black flex flex-col">
          <div className="mb-4 text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">Super App</div>
            <div className="text-5xl font-bold text-white mb-4">Choose your Entertainment category</div>
          </div>

          {/* First additional div with more space */}
          <div className="mb-4 flex-grow flex flex-col">
            {/* Display selected genres in capsule divs */}
            {selectedGenres.map((selectedGenre) => (
              <Capsule key={selectedGenre.id} genre={selectedGenre} />
            ))}
            
          </div>

          {/* Second additional div with red text */}
          <div className="mt-auto text-red-500 mb-4 text-center">
            {minCategoriesRequired && 'Minimum 3 categories needed'}
          </div>
        </div>

        {/* Right div for genre image grid */}
        <div className="w-1/2 p-8 flex items-center justify-center h-screen mt-8 bg-black">
          <div className="grid grid-cols-3 gap-5">
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => handleGenreClick(genre)}
                className={`relative text-left mb-4 focus:outline-none`}
                style={{ backgroundColor: genre.bgColor, borderRadius: genre.borderRadius }}
              >
                {/* Div for Text */}
                <div className="mb-2 text-left text-white font-bold text-2xl pt-2 pl-6 w-30 h-22">
                  {genre.title}
                </div>
                {/* Div for Image */}
                <div className="flex items-center justify-center">
                  <div className="p-3 w-40 h-32">
                    {/* Adjust width and height values */}
                    <img
                      src={genre.imageUrl}
                      alt={genre.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black p-4 text-center">
      <button className="bg-green-500 text-white py-2 px-4 rounded-full absolute bottom-4 right-4">
      Click me
      </button>
      </footer>
    </div>
  );
};

export default CategoryPage;
