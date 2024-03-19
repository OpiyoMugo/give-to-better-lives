
 
 <style>
  /* Global styles */
  
 
  /* Container for the image and content */
  /* Global styles */


/* Container for the image and content */
.centered-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 3600px; /* Adjust based on your design */
    padding: 20px;
    position: relative; /* Needed for absolute positioning of the content container */
    background-image: url('https://images.unsplash.com/photo-1633555741617-a8308850847b?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
}

/* Content container */
.content-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Grey overlay */
    color: #fff; /* Ensures the text is visible against the overlay */
}

.content-container h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.content-container p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

/* Styles for the email button */
.email-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    text-align: center;
    cursor: pointer;
    min-width: 120px; /* Ensures the button is large enough to be easily tapped on mobile */
    min-height: 44px; /* Minimum touch target size for mobile */
}

.email-button:hover {
    background-color: #0056b3;
}

 </style>
 
 <div class="centered-container">
  <div class="image-container">
     <img src="https://images.unsplash.com/photo-1633555741617-a8308850847b?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
  </div>
  <div class="content-container">
     <h1>Contact Us</h1>
     <p>Got a question about Give To better Lives?
       We're here to help! Please feel free to reach out.</p>
     <a href="https://formsubmit.co/el/kutibo" target="_blank" class="email-button">Email us</a>
  </div>
 </div>

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>