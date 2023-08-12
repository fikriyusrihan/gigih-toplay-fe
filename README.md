# Tokopedia Play Clone FE 🖥️
This is the frontend repository for Tokopedia Play Clone.
This application is built using React.js.
This project is a part of Generasi GIGIH 3.0 Final Project submission.
Any feedbacks are welcome!

## Table of Contents 📑
<!-- TOC -->
* [Tokopedia Play Clone FE 🖥️](#tokopedia-play-clone-fe-)
  * [Table of Contents 📑](#table-of-contents-)
  * [Run the Application ▶️](#run-the-application-)
    * [Run without Docker 💿](#run-without-docker-)
    * [Run with Docker 🐳](#run-with-docker-)
    * [Run with Docker Compose 🐳](#run-with-docker-compose-)
  * [.env File Configuration ⚙️](#env-file-configuration-)
  * [Tools ⚒️](#tools-)
  * [Bonus Checklist 📝](#bonus-checklist-)
  * [Features 📝](#features-)
  * [Deployed Application 🚀](#deployed-application-)
<!-- TOC -->

## Run the Application ▶️
### Run without Docker 💿
This application requires Node.js and npm to run. Make sure you have installed Node.js and npm on your computer, then do the following steps.

```bash
# Move to the workspace directory
cd workspace

# Clone the repository
git clone https://github.com/fikriyusrihan/gigih-toplay-fe.git

# Move to the application directory
cd gigih-toplay-fe

# Install the dependencies
npm install

# Run the application
npm start
```
Please make sure that the backend application is already running before running this application.

### Run with Docker 🐳
This application can also be run using Docker. Make sure you have installed Docker on your computer, then do the following steps.

```bash
# Move to the workspace directory
cd workspace

# Clone the repository
git clone https://github.com/fikriyusrihan/gigih-toplay-fe.git

# Build the Docker image
docker build -t gigih-toplay-fe .

# Run the Docker container
docker run -p 3000:3000 gigih-toplay-fe
```

### Run with Docker Compose 🐳
You can also run this application as a whole service including the frontend, backend, and database using Docker Compose. Make sure you have installed Docker Compose on your computer, then do the following steps.
- Download the docker-compose.yml file [here](https://gist.github.com/fikriyusrihan/84eaecf2fab4caa626b4881493f46ec6).
- Move the docker-compose.yml file to the `workspace` directory.
- Run the following command.
```bash
# Move to the workspace directory
cd workspace

# Run Docker Compose
docker-compose up --build
```

## .env File Configuration ⚙️
You can configure the application by changing the values in the `.env` file. The following is the default configuration of the application.
```bash
REACT_APP_API_URL=http://localhost:3080/api/v1
REACT_APP_SOCKET_URL=ws://localhost:3080
```

## Tools ⚒️
The following are the tools used in this project.
- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) - A collection of navigational components that compose declaratively with your application
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library that gives you the building blocks you need to build your React applications
- [React Icons](https://react-icons.github.io/react-icons/) - A collection of icons for React
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [Socket.IO](https://socket.io/) - A library that enables real-time, bidirectional and event-based communication between the browser and the server
- [Docker](https://www.docker.com/) - A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers

## Bonus Checklist 📝
- Add authentication to achieve user-specific data ✅
- Implement websockets to achieve live update of the comments data ✅
- Implement search feature for videos ✅

## Features 📝
- [x] User can see a list of videos
- [x] User can search for videos
- [x] User can see a video detail
- [x] User can see a list of comments of a video
- [x] User can add a comment to a video
- [x] User can see a real-time update of the comments data
- [x] User can log in and register an account

## Deployed Application 🚀
This application is deployed on Azure Virtual Machine and Docker.
You can access the application at [http://gigih-tokoplay.southeastasia.cloudapp.azure.com/](http://gigih-tokoplay.southeastasia.cloudapp.azure.com/).