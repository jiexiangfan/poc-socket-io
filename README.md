# Proof of concept for socket.io usage in monitor visualisation

This repo intended to show the concept of using socket.io, in order to use a remote control device to change components being displayed on main screen.

# How to run this locally

1. ~~Run the server **first** (to make sure it is running on port 3000)~~ (The server is hosted)

   ```
   cd server
   npm install
   nodemon server.js
        or
   node server.js
   ```

2. Run the controller client

   ```
   cd controller
   npm install
   npm run start
   ```

3. Run the monitor client

   ```
   cd monitor
   npm install
   npm run start
   ```

# How it should look like

The controller and monitor in this repo should look similar to the screenshot. After choosing display type, press submit button on controller, the monitor screen should update accordingly.

<img width="1350" alt="image" src="https://user-images.githubusercontent.com/51945335/234727412-c811eb1c-33ef-4ed8-9e9c-e6be99afeecf.png">
