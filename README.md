![Logo](https://github.com/Adacis/whereami/blob/main/img/app.svg)


# Where am I
Where am I is a management application allowing users to record and see who and what everyone is working on in a calendar and table. The application is hosted on Nextcloud in a Docker Container.


## Tech Stack

**Client:** JS

**Server:** PHP Symphony

**Database:** MariaDB SQL
## Installation for developers

The application runs on a docker container.

### Prerequisites

- Install Docker Desktop
- Install Github Desktop

### Step by step
- Create a folder for the application
- Open a terminal in the folder
- Git clone the projet WhereAmI into the folder
```bash
git clone https://github.com/Adacis/whereami.git
```
- Create a network for "Nextcloud"
```bash
docker network create nextcloud
```
#### Database setup
- Go to the "whereami-docker" folder
```bash
cd whereami-docker/
```
- Create the container for the database
```bash
docker compose up -d
```
- Verify the container with the following command
```bash
docker ps
```
- Check the logs 
```bash
docker logs nextcloud-db
```
- Verify the database using a tool such as Dbeaver (https://dbeaver.io/) 
- Connect to the database with these settings
```
Server Host : localhost
Port : 3306
User : nextcloud
Password : nextcloud
```
#### Nextcloud installation
- Create a folder called "nextcloud_data" using the following command
```bash
mkdir /Users/miage/Documents/nextcloud_data
```
- Run the following command in the terminal to install nextcloud version 28.0.5
```bash
docker run -d --name nextcloud -p 8001:80 -v /Users/miage/Documents/nextcloud_data:/var/www/html --network nextcloud nextcloud:28.0.5
```
*The container will be on the port 8001, modify if needed*
- Verify the container with the following command
```bash
docker ps
```
- Check the logs 
```bash
docker logs nextcloud
```
- To access Nextcloud on the addresse  http://localhost:8001
```
User : adacis
Password : admin
```
- Install all the basic applications that are proposed on launch
- Configure the database with the information below
```
Database username : nextcloud
Database password : nextcloud
Database name : nextcloud-db
Database host : nextcloud-db:3306
```
- Click install
#### WhereAmI installation
- Copy the repository into the generated folder nextcloud_data/apps/ 
``` bash
cp -r [cloned repository]/whereami [nextcloud_data folder]/nextcloud_data/apps/
```
- Go to the applications page on Nextcloud
- Find "WhereAmI" and click activate

## Deployment

### First time deployment
To deploy this project run the following commands in the order :
- Start the Docker Bash Terminal for Nextcloud
```bash
docker exec -it nextcloud bash
```
- Navigate to the correct folder
```bash
cd apps/whereami/ 
```
- Install and update NPM if you don't have it
```bash
apt-get update && apt-get install -y npm
```
- Initialise the project
```bash
make npm-init
```
- Build the project
```bash
make build-js
```

### Build
- Start the container
```bash
docker exec -it nextcloud bash
```
- Place yourself in the correct folder
```bash
cd apps/whereami/ 
```
- Build the project
```bash
make build-js
```
## Features
- **Event Assignment using the Calendar feature**: Users can register themselves, record their whereabouts and time slots for specific contracts as well as their work status, which are then converted into full or half work days.
- **Weekend Exclusion**: Automatically exclude weekends from scheduling calculations.
- **Employee Tab**: A summary table of all users, their locations, and their status for the selected date range.
- **Location Tab**: A summary table showing the number of users by location for the selected date range.
- **Last Seen Tab**: A summary table of all the instances where users have crossed paths with other users within the selected date range.
- **Contract Tab**: A summary table listing all users with their contracts and the total hours worked, rounded to the nearest half day, for the selected date range.
- **Summary Tab**: A summary table showing the locations and the time spent at each location by the user for the selected month.
- **Hover Summary Functionality**: Provide brief information when hovering over specific dates.

## Authors
- [@Benjamin Aimard](https://github.com/baimard)
## License
[GNU AFFERO GENERAL PUBLIC LICENSE](https://choosealicense.com/licenses/gpl-3.0/)
