# SpotReveal
CPSC362 Group Project

**Step 1:** 
Installation requirements:
Python
Django
Reactjs
HTML & CSS
JavaScript

**Step 2:**  
In your command prompt, create a new Django project.
Type this command in your terminal: Django-admin startproject nameofyourproject
Change nameofyourproject to the name you wish your project to be called. This is your core Django file. 
After creating the core project file, open your code editor and open this new project file
cd nameofyourproject

**Step 3:**
 Inside your newly created project file, we need to create two Django apps. These apps are reusable modules that will handle specific aspects of our web application. In this case, we need one for our backend and one for the frontend.
Inside our new project directory type this command in the terminal:
python3 manage.py startapp nameofyourfrontendapp
python3 manage.py startapp nameofyourbackendapp
For this example, we are going to call the frontend app: frontend, and the backend app: spotify. The frontend app will handle the frontend and webpage application, and the spotify app will handle the logic for our webpage’s features and API calls. 

**Step 4: **
In the spotify app, we need to add a few files before we can begin development for our project’s features. We need to create a file to store our credentials, and a util file to handle the logic for our project’s main features. We also need to add to our database a way to store spotify tokens, which are unique for every user. 
In the frontend app, we need to add a 'src', 'templates', and 'static' folder. These are essential as we are going to install more imports soon. We are going to use a template for the project to simplify the process using React. In src add a components folder. In static add a frontend and css folder.

**Step 5: **
Go into your frontend directory and type this into your terminal:
npm init -y
npm i webpack webpack-cli --save-dev
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm i react react-dom --save-dev
npm install @material-ui/core
npm install @babel/plugin-proposal-class-properties
npm install react-router-dom
npm install @material-ui/icons

These are templates we are going to utilize for our frontend 

Go into your package.json file and add 
    "dev": "webpack --mode development --watch",
    "build": "webpack --mode production"
to the "scripts" file. Also add a webpack.config.js and babel.config.json file. Some of the installations we made are going to need these files to work. 

These are the main steps to get started. Development for app features are all ready to be implemented by developers.
