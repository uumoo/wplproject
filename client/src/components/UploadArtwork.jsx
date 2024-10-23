import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UploadArtwork.css';  // Custom CSS for styling

const UploadArtwork = () => {
  const { artistID } = useParams();  // Get artistID from URL params
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('Pending');  // Default status is 'Pending'

  const handleSubmit = async (e) => {
    e.preventDefault();

    const artworkData = {
      artistID,
      title,
      description,
      basePrice,
      category,
      status,  // Status will be pending by default
    };

    try {
      await axios.post(`http://localhost:8000/api/artworks/upload`, artworkData);
      alert('Artwork uploaded successfully!');
      navigate(`/artists/user/${artistID}`);  // Redirect back to artist profile after submission
    } catch (error) {
      console.error('Error uploading artwork:', error);
    }
  };

  return (
    <div className="upload-artwork">
      <h2>Upload Your Artwork</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="basePrice">Base Price</label>
          <input
            type="number"
            id="basePrice"
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Approval Status</label>
          <input
            type="text"
            id="status"
            value={status}
            disabled  // The status is pending by default, and can't be changed
          />
        </div>

        <button type="submit" className="submit-btn">Submit Artwork</button>
      </form>
    </div>
  );
};

export default UploadArtwork;
