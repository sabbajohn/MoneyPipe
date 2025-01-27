FROM node:14.17.6

# Set the working directory inside the container
WORKDIR /usr/src/app/

# Copy all files from the current directory to the working directory
COPY . .

WORKDIR /usr/src/app/backend

RUN npm install && npm run build

WORKDIR /usr/src/app/

# Install dependencies
RUN cd frontend && npm install && npm run build

WORKDIR /usr/src/app/
RUN mv frontend/build backend/dist/public


# Specify the port number the container should expose
EXPOSE 3030

WORKDIR /usr/src/app/backend
# Define the command to run your app
CMD [ "npm", "run", "start" ]
