import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserBuyerPublic.css';  // Import CSS for styling

const UserBuyer = () => {
  const { buyerID } = useParams();  // Get buyerID from URL params
  const [buyer, setBuyer] = useState(null);  // State to store buyer details

  useEffect(() => {
    const fetchBuyerDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/buyers/user/${buyerID}`);
        setBuyer(response.data[0]);  // Set the buyer data
      } catch (error) {
        console.error('Error fetching buyer details:', error);
      }
    };
    
    fetchBuyerDetails();
  }, [buyerID]);

  if (!buyer) return <p>Loading...</p>;

  return (
    <div className="buyer-profile">
      <h1>{buyer.Name}'s Profile</h1>
      <img src={buyer.ProfilePicture || 'default-profile.png'} alt="Buyer" className="profile-picture" />
      <p><strong>Email:</strong> {buyer.Email}</p>
      <p><strong>Shipping Address:</strong> {buyer.ShippingAddress}</p>
      <p><strong>Business Details:</strong> {buyer.BusinessDetails}</p>
      <p><strong>Yearly Wage:</strong> ${buyer.YearlyWage}</p>
      <p><strong>Approval Status:</strong> {buyer.ApprovalStatus}</p>
    </div>
  );
};

export default UserBuyer;
