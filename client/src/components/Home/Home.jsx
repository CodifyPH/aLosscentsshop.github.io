import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [formData, setFormData] = useState({
    email: '',
    age: '',
    location: '',
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // free voucher
  const handleSubmit = (e) => {
    e.preventDefault();

   
    setMessage('Congratulations! You will receive a voucher via email.');

    // Clear form data after submission
    setFormData({
      email: '',
      age: '',
      location: '',
    });
  };
  // free voucher

  useEffect(() => {
    // Display the pop-up message when the component mounts
    alert("Stay connected with us on Facebook and Instagram to participate in our exciting giveaways and stay informed about the latest updates.");
  }, []);

  return (
    <div>
      {/* Main Content */}
      <div className="container">
        <img src="/src/assets/bg1.JPG" alt="bg" className="bg" />
        <div className="overlay"></div>
        <div>
          <h1 className="title">
            ALo's
            <p className="title2">SCENTS ♦ SHOP</p>
          </h1>
          <div className='home-tagline-container'>
            <div className='home-logo'>
              <img src="/src/assets/home-logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        {/* About Photos Section */}
        <div className="about-photos">
          <div className="photo-container">
            <img src="src/assets/person1.JPG" alt="Person 1" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="photo-container">
            <img src="/src/assets/person2.JPG" alt="Person 2" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="photo-container">
            <img src="/src/assets/person3.JPG" alt="Person 3" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <h2>Get a Free ALo's SCENTS SHOP Voucher!</h2>
        <form onSubmit={handleSubmit} className="voucher-form">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Claim Voucher</button>
        </form>
        {message && <p className="success-message">{message}</p>}
      </div>

      <br />
      <br />


      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-contact">
            <p>Email: Holycowramralph@gmail.com</p>
            <p>Phone: 09457063193</p>
            <p>Address: Brgy 24, Rizal Street, Legazpi City</p>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons8-facebook-48.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons8-instagram-48.png" alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons8-twitterx-50.png" alt="X" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons8-whatsapp-48.png" alt="Whatsapp" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons8-tiktok-48.png" alt="Tiktok" />
            </a>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/products">Products</a></li>
              {/* <li><a href="/signup">Sign Up</a></li> */}
            </ul>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, natus. Quia, sint corrupti quos aut facere maiores aliquid cumque nostrum blanditiis nulla, accusantium quis explicabo unde consectetur minus non nesciunt.</p>
      </footer>
    </div>
  );
}

export default Home;
