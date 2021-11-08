# Beers API

A web app using the Brewdog Punk API built in React.

![Beers API search function](https://github.com/AdamDCosta/beers-api/blob/main/src/assets/images/Beer-api-search.JPG)

****

## About The Project

This project was set during week 7 of the full-time *_nology* course. The requirements were to build the project in React, using the Brewdog API and following the component tree provided by the brief. Once we were able to render the fetch response on the page we had to add in search functionality and a set of filters. I also then added in routing so that you can click on each beer tile and it will take the user to a full page with more information on the specific beer. This required the use of useParams based on each beer's ID to route to the correct individual page. Example below:

![Beers API routing to an individual beer](https://github.com/AdamDCosta/beers-api/blob/main/src/assets/images/beer-api-routing-2.JPG)

****

## What I learned

- useEffect. Used with the fetch with the search and filter states as the dependency arrays.
- Routing. Used to link from the main list of beers to an individual beer page.
- useParams. Used the beer Id from the fetch response as the param to link to each individual page.
- useState. To pass the fetch response through the app.
- props. To create re-usable components, passing data objects, functions and state.

****

## Tech Stack

- React
- Javascript
- HTML
- SCSS




