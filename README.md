
# Colleper = College + Keeper
This is a simple web application to help the juniors and seniors with college related issues, mainly four specific issues:
1. to help the juniors with notes and study mater
2. to integrate lost and found section with help of Google Vision API,
3. To build a platform to exchange vehicles.
4. Technoshop: A platform to provide small earning by letting the CSE/IT students help the non technical kids.


## Deployment instructions

### Basic deployment:

```sh
$ git clone https://github.com/dvkcool/Colleper.git
$ git push hasura master
```
For the second command We are assuming that you are familiar with using Hasura as a backend service.


### Making changes and deploying

* To make changes to the project, browse to `/microservices/api/src` and edit the `server.js` file in according to your app.
* Commit the changes, and perform `git push hasura master` to deploy the changes.

## Local development

To test and make changes to this app locally, follow the below instructions.
* Open Terminal and `cd` into the project folder
* Run `npm install` to install all the project dependencies
* Run `npm start` in the terminal to run it.
* Make changes to the app, and see the changes in the browser

## View server logs

You can view the logs emitted by the node server by running the below command:

``` shell
$ hasura microservice logs api
```
You can see the logs in your terminal, press `CTRL + C` to stop logging.

## Managing app dependencies

* System dependencies, like changing the web-server can be made in the Dockerfile
* npm/yarn deps can be managed by editing **package.json**.

If changes have been done to the dependencies, `git commit`, and perform `git push hasura master` to deploy the changes.

## Migrating your existing express.js app

* If you have an existing express.js app which you would like to deploy, replace the code inside `/microservices/api/src/` according to your app.
* You may need to modify the Dockerfile if your `package.json` or the build directory location has changed, but in most cases, it won't be required.
* Commit, and run `git push hasura master` to deploy your app.

## Adding backend features

Hasura comes with BaaS APIs to make it easy to add backend features to your apps.

## Found a bug?
Feel free to open an issue here or mail me at divyanshukumarg@gmail.com

## Know the developers
1. Chetana Sahu -Front-end(HTML,CSS, JS, jQuery) chetanasahu1997@gmail.com
2. Vaibhav Gupta -Front-end(HTML,CSS, JS, jQuery) && Integration with Backend(Fetch API)- vaibnakgupta100@gmail.com
3. Divyanshu Kumar - Backend- Node JS, Postgress SQL, 
