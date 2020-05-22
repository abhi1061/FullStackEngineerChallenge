# HR Management Application

This is a web application that allows employees to submit feedback toward each other's performance review.

## Technologies used

### API Backend

This backend server uses Docker, Node js, Express, Mongo db, Mongoose ORM stack.
Docker runs both api and mongo images and links them as well.

To run this api please go to `/hr-app/server` directory and run `docker-compose up --build`

To varify the surver is running please go to postman app and hit `http://localhost:8080/health`
If it returns `server is online` then the express server is running

### Frontend

This client is written on React js `create-react-app` and material ui.
In order to run this front end please go to `hr-app/client` directory
Run `yarn` command to install all the dependancies.
Then run `yarn start` command to run the React application

### Log in

To log in to this application you need to run both back end and frond end applications together.
Once you done so you will be guided to `Log In` screen, then put following credentials to log in as an admin.

Email: `admin@hr.com`
pass: `1234`

Once you successfully logged in to this system you will be successfully redirected to home page.

## Assumptions I did made from the challenge's Readme

1. There should be login and role based permissions for this application. There will be three types of user roles a. Admin, b. Reviewer and c. Employee.
2. The role based access will be Admin can add/edit/delete employee, Admin can assign employee to review other employees, Admin can review employee.
3. Reviewer can not access employee page and can not add/edit/delete any employee.
4. Reviewer can only access review list page and make review for employees.
5. Employee does not have either admin or reviewer role will not be able to access any of these described options before.
6. There should be log out option in order to log in again with different credentials
7. It can be a single page application with tab navigation to work with these two options stated before.
8. List displaying both employee and review should be able to perform sorting in order to leverage user.
9. Review should use some certain categories and use marking for each category.
