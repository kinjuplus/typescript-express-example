

# how to bring up this application

1. clone repository
2. Before using these restful APIs, please setup database as mentioned below. 
3. run `npm i`
4. edit `ormconfig.json` and change your database configuration (you can also change a database type, but don't forget to install specific database drivers). 
5. use the init.sql located in sql/ to initialize sample data.
5. run `npm start`
6. use curl or postman to inovke the restful API, for example, to test login, you can send post request with email and password included in x-wwww-for-urlencoded body to the url `http://localhost:3000/login`.
7. As for logout, just send post request to `http://localhost:3000/logout` to destroy session object associated with the current user.
8. As for retriving customer's personal info, send a get request to `http://localhost:3000/customers/${id}` to get the customer with his id specified in the end of the url. 

## How to setup DB
1. install docker service in your computer.
2. use the command `docker run --name MyPostgres -d -p 5432:5432 -e POSTGRES_USER=admin -e POSTGRES_PASSWORD='12345' postgres` to make a postgresql databse up and running.
3. If you use the above command, don't forget to change ormconfig.json accordingly.

## Criteria
1. The database design
```diff
+ Please see src/entity/customers.ts
```

2. The API design
```diff
+ Please see point 6, 7 ,8 listed above or controller files under src/controller/
```

3. Any application and network level security consideration
```diff
+ We can: 
+ 1. use IP whiteList
+ 2. use HTTPS with API keys or user credentials
+ 3. use JWT but make sure to clean all possible places in client side, renew token periodically.
```

4. Explanation on how to scale up and down both API and database to handle variable traffic
```diff
+ We can:
+ 1. add index to the table columns which is used as query condition
+ 2. split customers data into different tables based on some criteria or algorithm such as range of IDs or hash value of a ID
+ 3. Based on user daily activities, warm up cache for heavy users.  
```

5. Considerations on how to enable real time monitoring and alerting onto the service for production support
```diff
+ We can:
+ 1. monitor CPU usage, disk I/O, network bandwidth on application servers, database and network devices.
+ 2. In database, make some aggregation report on slow sql operation
+ 3. In applicatiom, make profile on critical operations and log them. use ELK stack to collect such information
+ 4. use third party agent.
```

6. An automatable testing strategy for this service
```diff
+ use Mocha and Chia to write some unit tests 
```

7. instructions to bring up the service
```diff
+ Please see the first section
```