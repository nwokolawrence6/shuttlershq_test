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
- To start server on production update the **NODE_ENV** to production and run ```yarn start or npm start```

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
     query boundaryId= <provide boundary ID> 
     query vehicleId= <provide vehicle ID>
     Eg
    /api/average_time/?boundaryId=1&vehicleId=1
   
     #Get the estimated date and time of arrival for the vehicle on this travel route
    GET estimated_date_and_time_of_arrival
      query date_time= <Provide future date time>
    /api/estimated_date_and_time_of_arrival/?date_time=2022-01-27T14:17:23.773Z
 ```
#using the terminal

```
curl -X GET --location "http://localhost:8017/api/average_time/?boundaryId=2&vehicleId=1" \
    -H "Content-Type: application/json"
```

```
curl -X GET --location "http://localhost:8017/api/estimated_date_and_time_of_arrival/?boundaryId=2&vehicleId=1&date=2022-01-27&time17:23.773Z" \
    -H "Content-Type: application/json"
```

# Test API in the browser 

***Average Time*** ``Provide date a query params boundaryId=<ID of the boundary> and vehicleId=<ID of the boundary> vehicle``
```http request
GET http://localhost:8017/api/average_time/?boundaryId=2&vehicleId=1
Content-Type: application/json
```
***Estimated Date and time of arrival:*** `` Provide date a query params date_time=<value of data time>``
```http request
GET http://localhost:8017/api/estimated_date_and_time_of_arrival/?boundaryId=2&vehicleId=1&date=2022-01-27&time=14:17
Content-Type: application/json
```

# Test Recommendations

**The Following should be implemented in a production testing environment**

``
The API response should also be tested for its return values in order to certify that it conforms to the structure required; this will make it more effective in catching errors.
``



