# About the Project

The Challenge:
- Display all country info from the API, and match your design to the provided Figma design file
- Search for a country using an `input` field and display results in real-time
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

**https://countries-tyler.netlify.app/**

![ezgif-4-9934fc516b](https://user-images.githubusercontent.com/67395239/156834550-8a900d54-5451-4a32-9e26-2bcac4d75fd7.gif)
<!-- ![countriesREADMEgif](https://user-images.githubusercontent.com/67395239/155774783-f8d12efc-a14d-4323-90cf-392d07abd0aa.gif) -->

## How It's Made:

**Tech used:** 
- React 
- React Hooks (useState, useEffect, useContext) 
- React Router 
- Material UI

Coding this application from scratch was a great learning experience, and was my first introduction to Material UI.  Material UI was helpful in building the components for the search field, select menu, and toggling between light/dark mode.  There was a bit of a learning curve with Material UI, but I wanted to learn another CSS framework besides Bootstrap, and it was worth it since I've continued to use MUI on future projects.  

## Optimizations
- Break components down into smaller components that makes the code easier to read
- Implemented the useContext hook for passing data between components instead of prop drilling
- Added a loading spinner while waiting on initial API data to display
- Used ESLint to optimize code quality

## Lessons Learned:

### Pixel Perfect Deisgn
- It's an important skill to have attention to detail so my project matched the layout provided by the designer.  It was easy to get thing looking close, but took awhile to perfect my layout.

### When you receive data from an API, it may not be organized in a way for you to use immediately
- The country population data didn't include commas, so I implemented a function to add commas when displaying the population data
- Part of the challenge was to display FULL NAMES of the border countries, however I was only receiving the abbreviations of the country names from the API.  I had to maninpulate the data using .filter() and .includes() to display the data in the desired format.  See screenshots below:

![Screen Shot 2022-02-25 at 3 21 13 PM](https://user-images.githubusercontent.com/67395239/155805086-4ed119a1-2d01-4ea4-8e18-8c054bccfd28.png)
![Screen Shot 2022-02-25 at 3 22 20 PM](https://user-images.githubusercontent.com/67395239/155805091-cb8a776c-e521-4837-8c0f-7de0b3eedbe2.png)
