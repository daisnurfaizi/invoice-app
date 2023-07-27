<div id="top"></div>
## Getting Started

Get a local copy (clone the repo)

### Prerequisites

install& NodeJs and update to latest version

- [Node Js](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/umarbawazirfaiz/invoice-app.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Create database * run migration table
    ```sh    
    npx sequelize db:create
    npx sequelize db:migrate
    ```
3. Start development server
    ```sh
    npm run dev
    ```

Start the development server on `http://localhost:3000`: