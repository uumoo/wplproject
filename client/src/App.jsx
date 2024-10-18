import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FeaturedPaintings from "./components/FeaturedPaintings";
import OpenAuctions from "./components/OpenAuctions";
import FeaturedArtists from "./components/FeaturedArtists";
import CustomerReviews from "./components/CustomerReviews";
import ExploreOptions from "./components/ExploreOptions";
import HeroSection from "./components/HeroSection";  // Import the HeroSection
import Footer from "./components/Footer";
import './index.css';

// Dummy components for detailed pages
const RareThingsPage = () => <div>Rare Things Collection</div>;
const PaintingsPage = () => <div>More Paintings Gallery</div>;
const DrawingsPage = () => <div>More Drawings</div>;
const SculpturePage = () => <div>More Sculptures</div>;
const ArtistsPage = () => <div>More Artists Details</div>;
const AuctionsPage = () => <div>More Auction Details</div>;
const ReviewsPage = () => <div>More Reviews</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection /> {/* Add HeroSection at the top */}
      <Routes>
        <Route path="/" element={
          <main>
            <ExploreOptions />
            <FeaturedPaintings />
            <OpenAuctions />
            <FeaturedArtists />
            <CustomerReviews />
          </main>
        } />
        <Route path="/rare-things" element={<RareThingsPage />} />
        <Route path="/paintings" element={<PaintingsPage />} />
        <Route path="/drawings" element={<DrawingsPage />} />
        <Route path="/sculpture" element={<SculpturePage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/auctions" element={<AuctionsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
