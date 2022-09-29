![Roadtrip](https://user-images.githubusercontent.com/31336001/185769234-f050044f-f086-4b82-92e9-27103ece826b.png)

## About This Application
This project was a 1-week sprint where our team of 9 engineers completed an MVP for an external client. Roadtrip is a service for travel enthusiasts or anyone who wants to be able to organize their travel plans. With Roadtrip, users can search for destinations to add to their route, add places to visit within each destination, and share these trips with their friends or whoever they want to travel with.

<img src="https://user-images.githubusercontent.com/31336001/185769340-ddf78514-4acc-4d16-a042-a31a4e7e99a6.PNG " width="300">


## Features
- Secure account creation and hashed password storage with Passport.js
- Creation of trip itineraries stored to a database accessible from different devices
- Searchable destinations using Google Places API
- Searchable places of interest using Yelp APICreation and retrieval of notes for places visited stored to a database
- Sharing functionality for multiple users to edit the same trip
- View/reorder/delete destinations you have added to your trip
- View/reorder/delete places of interest you have added to your trips
- View trips you have completed in the archive
- View trips you have removed in the archive, delete them, or recover them back to the “All Trips” section


## Major Technologies Used
- Client: [ReactJS](https://reactjs.org/) with Hooks & [React Native](https://reactnative.dev/)
- Server: [NodeJS](https://nodejs.dev/) & [ExpressJS](https://expressjs.com/)
- Database: [PostgreSQL](https://www.postgresql.org/) & [Node-Postgres](https://node-postgres.com/)
- Client-server connection: [Localtunnel](https://theboroer.github.io/localtunnel-www/)
- Mobile client: [Expo](https://expo.dev/)
- Authentication: [PassportJS](https://www.passportjs.org/)
- HTTP client: [Axios](https://axios-http.com/) & [React Query](https://react-query-v3.tanstack.com/)
- API: [Yelp Fusion API](https://fusion.yelp.com/) & [Google Map API](https://developers.google.com/maps)
- Other libraries used: [React Navigation](https://reactnavigation.org/) & [Use-Places-Autocomplete](https://github.com/wellyshen/use-places-autocomplete) & [React Native Draggable Flatlist](https://github.com/computerjazz/react-native-draggable-flatlist)


## Notes & Project status
- This is a standalone repo that was originally forked from the [main project](https://github.com/naruto-blue-ocean/roadtrip). Please check out that page for more details.
- This repo has fixed the majority of navigation bugs from the original project. However, this project is no longer worked on so that I can focus on higher-priority ones.
- The corresponding server repo is [here](https://github.com/kbinhnguyen/roadtrip-server).
