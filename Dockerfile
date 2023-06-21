# Set the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Install yarn
RUN npm install -g yarn

# Copy the entire project to the working directory
COPY . .

# Install dependencies
RUN yarn install

# Specify the command to run the application
CMD ["yarn", "dev", "--host", "0.0.0.0"]
