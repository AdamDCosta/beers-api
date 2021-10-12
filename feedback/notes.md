# Feedback

Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview

## Goals

1. Working beers web app - ✔
2. Practice using API and React - ✔
3. Application of what you're learning (React, Fetch etc.) - ✔

## Specification

### Start

- All the wireframe content in black is the first part of the challenge - that is, the sidenav, the main section containing the beers and beer cards for each piece of data.

### Extension 1

- Once you've got the design and layout sorted to render the elements, it's time to add some search functionality. Make it so you can search the beers by their name, and the page content should update as you type each letter in the box.

### Extension 2

- Finally attempt to make it so you can filter the content on three conditions:

  - High Alcohol (ABV value greater than 6%)
  - Classic Range (Was first brewed before 2010)
  - High Acidity (pH lower than 4)
  - If you can’t achieve this after a good attempt, then feel free to move on to the final extension.

### Extension 3

- Style the website however you see fit! Go wild!

## Overall

App is a little messy but you're using a really clever useEffect

Very well componentised code across the board

Good key for the BeerList map

Smart variable naming, code was easy to follow

InfoButton may be too small as a component, could just be some styling in a scss file instead unless you're planning to add more functionality later(?)

Can see you ran out of time for BeerModal as component is too large. Could be split up further and could be styled better by just making it not the full width of the page.

## To work on

Code cleanliness, structure, indentation, line length. This stuff is hard but technically with React I can see that you're where you need to be right now. 

To make looking at your code easier I was formatting every file. It's tough to do manually but we can make our lives easier by using a auto-formatter like prettier. 

Just install it as an extension on VSCode, right-click a file, select "Format Document With..." and at the top of VSCode select "Prettier - Code Formatter".

You can edit how it formats files in your settings in VSCode, but it will clear up a good amount of cleanliness issues.

One thing it won't do organise your code. The only bad example of this in your code is `App.jsx`. You've got your state at the top which is good but it quickly falls apart where the useEffect is referencing variables which are defined below the the useEffect. This made the `App` quite difficult to read initially. So try to keep a smart order to things. 

Be careful to always use `<h>` tags in order, so `h2 => h3 => h4` and not skipping over any for good semantics. Which is most notable in `BeerModal.jsx`

Final notes, when you run a react app, your terminal shows you warnings. These are generally easily googleable and simple to fix and will improve code quality. So always keep one eye on your terminal while coding in react.