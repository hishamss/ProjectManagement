# Done.
**Creators**: `Hisham Saymeh, Dylan Ambrose, Sean Baklini, Barry Green`

**Created on**: `June 06 2020`

**Link to live app**: https://pm-hss.herokuapp.com/
- - -

## ABOUT THE APP
Done. is an all in one project management solution. Users can create accounts, add projects, add pertinent links, add project issues, add team members to projects, and message team members all from one convenient place.

### Creating an account
Users will need to create an account to access any of the features of Done. This can be done on the landing page.

<img src="./Readme-Img/signup.png" alt="Signup"
	 width="300" height="250" />

A successfull sign up simultaneously creates a Firebase ID and adds the user to the database

<img src="./Readme-Img/create.png" alt="create"
	 width="350" height="300" />

<img src="./Readme-Img/postuser.png" alt="post"
	 width="300" height="200" />

### Creating projects
Users add new projects by clicking  <img src="./Readme-Img/add.png" alt="add" width="55" height="30"  /> and filling out the information on the popup modal.

<img src="./Readme-Img/newproject.png" alt="new"
	 width="300" height="175" />

A project card will the be populated on the home page

<img src="./Readme-Img/projcard.png" alt="card"
	 width="300" height="175" />

 #### Adding additional users to projects
 Team memembers can be added to the project by clicking the add user button and then selecting the user from the dropdown

<img src="./Readme-Img/adduser.png" alt="add user"
	 width="300" height="175" />


The newly added user will receive and email invite

<img src="./Readme-Img/invite.png" alt="Invite"
	 width="300" height="250" />

When the user clicks get started, they will be added to the project and will be able to access it from the home page

#### Adding issues

Once inside a project, users will have access to a responsive kanban board to add and manage issues.

<img src="./Readme-Img/doneKanban.gif" alt="kanban"
	 width="500" height="300" />




### Free vs Full
A new user account will default to the free version. This allows them to create and manage up to 3 accounts. Free users will always have the option to upgrade to full. This will allow the user to have unlimited projects and grant them the ability to message team members.

### How to upgrade
Free account users can click <img src="./Readme-Img/upgrade.png" alt="upgrade" width="55" height="30"  /> at anytime to upgrade their account. They will be routed to the payment screen to enter their payment information.

<img src="./Readme-Img/pay.png" alt="pay"
	 width="300" height="200" />

Stripe is used to process the payment. If the payment is successfull the user's account type is changed to full in the database

<img src="./Readme-Img/stripe.png" alt="stripe"
	 width="400" height="475" />



## Technologies Used
* React.js
* Stripe
* Nodemailer
* Firebase Authentication
* Javascript
* HTML
* Bootstrap
* Git
* GitHub
* Nodejs
* Node packages:
    * dotenv
    * express
    * if-env
    * mysql2 
    * nodemailer
    * sequelize
    * stripe
    * axios
    * bootstrap
    * firebase
    * react
    * react-bootstrap
    * react-dom
    * react-router-dom
    * react-scripts
