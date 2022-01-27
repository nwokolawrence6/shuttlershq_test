# Interview Test solution On vehicle telemetries

## Make sure you have node.js version 14 or 16 LTS preferable


### How to Run:


- clone the project and cd into project directory
- run **npm install**
- create .env file in the root directory of the project and set the following:

```dotenv
  PORT=8017 #set any port of your choice as permited by os
  DB_HOST=localhost # set database host name
  username=root #set username of thw database
  DATABASE= vehicle_telemetry #set database name
  NODE_ENV=development #set Node enviroment
```
- Make sure your database is running
- To start server on development run ``` npm run dev or yarn dev```
- To start server on development update the **NODE_ENV** to production and run ```yarn start or npm start```

### Testing: To run the test provide the following
- create an .env.test file 
- Add the following line to it:
```dotenv
  PORT=8017 #set any port of your choice as permited by os
  DB_HOST=localhost # set database host name
  username=root #set username of thw database
  DATABASE= vehicle_telemetry #set database name
  NODE_ENV=development #set Node enviroment
```
- Run `npm test` to perform unit testing

# How to execute Api

#### Note that the GET average_time end point requires boundaryId and vehicleId in the query

##### End Point
 ``` 
    GET Average Time
     #Get the average time it takes to move between each bus stop along the route for the one month period
    /api/average_time 
   
     #Get the estimated date and time of arrival for the vehicle on this travel route
    GET estimated_date_and_time_of_arrival
    /api/estimated_date_and_time_of_arrival 
 ```
1) using the terminal
 Open your terminal and enter
  ```curl http://localhost:<PROT>/api/average_time/\?boundaryId\=2\&vehicleId\=1```


2)  ```curl http://localhost:<PROT>/api/average_time/\?boundaryId\=2\&vehicleId\=1```


