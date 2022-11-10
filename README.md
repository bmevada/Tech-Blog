# Tech Blog Application
Week 14: Model-View-Controller (MVC) Challenge

## Tech Blog Application

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

A CMS-style blog site similar to a Wordpress site has been built, where developers can publish their blog posts and comment on other developers’ posts as well. This site was completely from scratch and deployed to Heroku. The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Links to deployed application

[Link to deployed working application] - to be added

[Link to Github] https://github.com/bmevada/Tech-Blog.git



## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN the user visit the site for the first time
THEN the user is presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN the user clicks on the homepage option
THEN the user is taken to the homepage
WHEN the user clicks on any other links in the navigation
THEN the user is prompted to either sign up or sign in
WHEN the user chooses to sign up
THEN the user am prompted to create a username and password
WHEN the user click on the sign-up button
THEN the user credentials are saved and the user is logged into the site
WHEN the user revisits the site at a later time and choose to sign in
THEN the user is prompted to enter their username and password
WHEN the user is signed in to the site
THEN the user sees navigation links for the homepage, the dashboard, and the option to log out
WHEN the user clicks on the homepage option in the navigation
THEN the user is taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN the user clicks on an existing blog post
THEN the user is presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN the user enters a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN the user clicks on the dashboard option in the navigation
THEN the user is taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN the user click son the button to add a new blog post
THEN the user is prompted to enter both a title and contents for their blog post
WHEN the user clicks on the button to create a new blog post
THEN the title and contents of their post are saved and the user is taken back to an updated dashboard with their new blog post
WHEN the user clicks on one of their existing posts in the dashboard
THEN the user is able to delete or update my post and taken back to an updated dashboard
WHEN the user clicks on the logout option in the navigation
THEN the user is signed out of the site
WHEN the user is idle on the site for more than a set time
THEN the user is able to view comments but the user is prompted to log in again before the user can add, update, or delete comments
```

## Mock-Up of the functional deployed page

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 

## Deployed Application

 - Landing page- user presented with the following deployed homepage


 - User sign-in page  - user is prompted to enter username and password


 - User sign-up page - User to create new login with username and password


 - Dashboard (view users exisitng blogs)

 - Add new blog

 - Add new comment

 - Idle Page


## Development Technologies Used
- bcrypt - used to hash passwords
- bootstrap
- connect-session-sequelize - to add authentication
- dotenv - to use environment variables
- express
- express-handlebars - used for views
- express-session - to store the session data on the client in a cookie
- mysql2 - used to connect to a MySQL database for Models, and create an Express.js API for the Controllers
- seeds
- sequelize - used to connect to a MySQL database for Models, and create an Express.js API for the Controllers


