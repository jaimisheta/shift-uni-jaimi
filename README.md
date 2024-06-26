# University Search Web App

## Introduction

This web application allows users to search for universities based on country and name, save their favourite universities, and view them later. The application retrieves data from the University Domains List API, and features a responsive user interface built with React.

## Features

- Search universities by country and name
- Save universities to favourites
- Performance tracking of API calls
- Responsive UI for mobile to desktop
- Local storage for favourite universities
- Dockerized environment for easy deployment

## Technologies Used

- React
- JavaScript
- HTML
- Tailwind CSS
- Docker

## Getting Started

### Prerequisites

- Node.js (version >= 12.0.0)
- npm (version >= 6.0.0)
- Docker (optional, for Dockerized deployment)

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/jaimisheta/shift-uni-jaimi.git

   cd shift-uni-jaimi
```

2. Install dependencies:

```bash
   npm install
```

### Running the Application

#### Option 1: Local Development

1. Start the development server:

```bash
   npm start
```

2. Open your browser and visit `http://localhost:3000` to view the application.

#### Option 2: Dockerized Deployment using Dockerfile

1. Open the Docker Desktop

2. Open the terminal

3. Build the Docker image on:

```bash
   docker build -t jaimisheta1999/shift-uni-jaimi .
```

4. Run the Docker container:

```bash
   docker run -p 3000:3000 jaimisheta1999/shift-uni-jaimi
```

#### Note: For thr first time allow some time to start the server

5. Open your browser and visit `http://localhost:3000` to view the application.

#### Option 3: Using Docker Hub Deployed Image (OPTIONAL)

#### Skip the installation step, no need to clone the repository:

1. Open the Docker Desktop

2. Open the terminal

3. Run the command:

```bash
   docker run -p 3000:3000 jaimisheta1999/shift-uni-jaimi
```

#### Note: For thr first time allow some time to start the server

4. Open your browser and visit `http://localhost:3000` to view the application.

## How to Use?

- On the home page, select a country from the dropdown menu and/or enter a university name in the search box. Results will be displayed in a table.
- Click the "Add to Favourite" button to add a university to your favourites.
- Navigate to the favourites page from Navbar to view your favourite marked universities.
- Click the "Remove" button to remove a university from your favourites.

## Contributors

- Jaimi Sheta
