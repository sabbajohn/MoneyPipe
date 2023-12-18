FROM node:14.17.6

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy all files from the current directory to the working directory
COPY . .

RUN npm install 

# Install dependencies
RUN cd frontend && npm install && npm run build
RUN cp -r frontend/build/* backend/dist/public


# Specify the port number the container should expose
EXPOSE 3030

# Define the command to run your app
CMD [ "npm", "run", "start" ]
