# Citizen Management System
## Backend
### Usage

1\.  Clone the repository

`git clone https://github.com/semihBiygit/d14.ai-case-study.git`

2\.  Go to the backend directory

3\.  Edit your Postgres username and password in application.yml

4\.  Create DB on Postgres 

5\.  Build the project

`gradle build`

6\.  Run the project

`gradle bootRun`

5\.  The backend will be running on `http://localhost:8080`

### Endpoints

-   `GET /api/citizen/get-citizens`: Get all citizens

-   `GET /api/citizen/get-citizen-by-id/{id}`: Get citizen by id

-   `GET /api/citizen/get-children-by-parent-id/{parentId}`: Get children by parent id

-   `POST /api/citizen/add-citizen`: Add a citizen

-   `POST /api/citizen/add-children`: Add children

-   `PUT /api/citizen/update-citizen`: Update a citizen

-   `DELETE /api/citizen/delete-citizen/{id}`: Delete a citizen

## Frontend
### Usage

1\.  Go to the frontend directory

2\.  Install dependencies

`npm install`

3\. Start the project

`npm start`

4\. The frontend will be running on `http://localhost:3000`
