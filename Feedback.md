# Project 2 Feedback

## Code Quality - Progressing

Criteria: Is the code well-formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

### Strengths:

-   Code is well-formatted and easy to read.
-   Components, variables and functions are named in a sensible, semantic way that is easy to follow.
-   Components are organized in a logical hierarchy.
-   Demonstrates understanding of React and JSX, including concepts such as conditional rendering, modularizing UI elements, and programmatic navigation via React Router.

### Areas for Growth:

-   I know that the project grew quite complex over the past week, with many different moving parts. One big refactor that I think would help reduce the complexity of your project is if you move all your state, methods and API calls to the top-level `App.js`, which can pass down all the props and methods to its child components. The children can filter through that data and pull out the relevant pieces for themselves. Ideally in a React app, you only have one source of data, the top-most level possible, and data flows downward in one direction. This would help your project be more manageable and DRY up some code as well.
-   Next time be sure to remove any non-functional, commented out code, including unused imports, state, and console.logs(), before submitting projects. In a React app, any out-of-the-box code left over from `npx create-react-app` that won't be used should also be removed, such as styles in `index.css` and the React favicon.

## Technical Requirements - Performing

Criteria: How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

### Strengths:

-   Application is a working, interactive React application that uses a third-party API.
-   Uses five separate components, CSS Flexbox for layout, deployed to Heroku.
-   Git is used for version control, with frequent commits dating from Day 1 of the project.

### Areas for Growth:

-   In the event that the Potter API is ever down again, consider adding some stock data or an error message that asks the user to check back later.
-   Try to phrase your Git commit messages in a more consistent way, and ideally one commit per code change. Usually Git commits start with a present-tense noun.

## Creativity and Interface - Progressing

Criteria: Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

### Strengths:

-   Application is easy to navigate, with uncluttered and straightforward UI.
-   Application is functional and responsive to small and large screens.

### Areas for Growth

-   When you have time, I would revisit the UI and add some more styling. I like the straightforward design, but there are areas that could use more margins/padding. You could also make use of CSS tables to better organize and present all the data. You also mentioned adding images at some point, which I think would add a lot of visual interest!
-   The 'Characters' link that takes the user to the CharStats page should stand out a little more from the Home H1/link.

## Functionality - Performing

Criteria: Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

### Strengths:

-   Application works without errors or bugs. No error messages observed in console for any of the possible routes.
-   The house and character view features are fully implemented and easy to navigate between.

### Areas for Growth:

-   None at this time :)

## Presentation - Performing

Criteria: Is there adequate documentation? Is the repository well-organized and free of clutter?

### Strengths:

-   Project is adequately documented in the README.md, with screenshots of major page views, information about technologies used, contribution link, and acknowledgements (thanks for the shout out!).
-   Repo is well-organized, with components stored in their own directory.

### Areas for Growth:

-   The contribution link just redirects to the home page of the repo; instead, it could take the user to the issues tab. In the Contribute section, you can also tell users that they can fork and clone the repo and submit suggestions via pull request.

## Hard Requirements - Complete:

-   [x] Your app must be a working, interactive, React application.
-   [x] It must include data from a third-party API.
-   [x] It must use at least 4 separate components.
-   [x] It must be deployed to the Web.
-   [x] It uses CSS Grid or Flex for layout and not floats.
-   [x] Your project repository must adequately document your project and include a line to the deployed app.
-   [x] You have used git for version control throughout the project.

## Grade: Pass
