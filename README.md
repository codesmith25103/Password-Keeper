# Password-Keeper

Password-Keeper is a command-line interface (CLI) application written in JavaScript using Node.js and MongoDB. It securely stores passwords for various services, providing users with a convenient and secure way to manage their credentials.

![Password-Keeper Interface](https://github.com/lata-11/Password-Keeper/assets/103296906/d1f66d19-66cc-4c56-b76e-f5f72f9feead)

## Features

- **Secure Storage**: Passwords are encrypted using Bcrypt before storing them in MongoDB, ensuring data security.
- **User Authentication**: Requires users to create an account with a username and master password for access.
- **Interactive Interface**: Uses Inquirer.js for a user-friendly command-line interface with prompts and responses.
- **Password Generation**: Provides an option to generate strong, randomized passwords.
- **Search and Retrieval**: Allows users to search for stored passwords and retrieve them when needed.

## Screenshots

![Password-Keeper Interface](https://github.com/lata-11/Password-Keeper/assets/103296906/d1f66d19-66cc-4c56-b76e-f5f72f9feead)

![Password-Keeper Interface](https://github.com/lata-11/Password-Keeper/assets/103296906/828256df-3154-45c7-b4bd-569c7ce7bfd3)

## Getting Started

Follow these instructions to get Password-Keeper up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js (v14.x or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lata-11/Password-Keeper.git
   ```
2. Navigate into the project directory:
 ```bash cd Password-Keeper ```
3. Install dependencies:
    ```npm install ```

### Configuration
Rename .env.example file to .env and provide your MongoDB connection URI and a secret key for JWT token generation:

```bash
MONGODB_URI=<your_mongodb_uri>
SECRET_KEY=<your_secret_key>
```

### Start the application:

```node app.js```

Follow the prompts to create an account, store passwords, generate passwords, and manage your credentials.

### License

This project is licensed under the MIT License. See the LICENSE file for details.


