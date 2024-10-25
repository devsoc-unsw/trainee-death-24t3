
# Cotangles

A social timetable web-app where users can share their schedules via iCal links





## Setting Up
To setup the frontend:

1. ```cd frontend/cotangles && npm i```

2. ```npm run prepare``` (to setup husky)

To setup the backend:

1.  ```cd backend && npm i```


## Connecting With MongoDB
Quick guide on MongoDB's NodeJs Driver: https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/

To connect to a cluster, create a ```src/.env.local``` file in backend folder. Avoid exposing the DB uri connection string by storing it in this env file. 

From the backend folder run

```npx tsx src/dbInterface.ts```

to test if a connection has been successfuly established to the db.