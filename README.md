# Wanderlust

Wanderlust is a web application inspired by Airbnb that allows users to list, explore, and review accommodations. The platform leverages Node.js, Express, and MongoDB to provide a seamless experience for travelers and property owners.

## Features

- **User Authentication**: Secure registration and login using `passport` and `passport-local-mongoose`.
- **Accommodation Listings**: Users can create, edit, and delete their property listings.
- **Reviews**: Visitors can leave reviews and ratings for accommodations.
- **Cloudinary Integration**: Upload and manage images for listings.
- **Flash Messages**: Informative success and error messages throughout the app.
- **Responsive Design**: Works across devices with a mobile-friendly interface.

## Technology Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Templating Engine**: EJS with `ejs-mate` for layouts
- **Authentication**: Passport.js
- **File Uploads**: Multer and Cloudinary
- **Validation**: Joi
- **Dependencies**:
  - `dotenv` for environment variables
  - `express-session` for session management
  - `connect-flash` for flash messages
  - `method-override` for HTTP method support
  - `faker` for generating mock data
