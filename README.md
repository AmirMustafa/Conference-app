# Conference-app
Node.js application using Microservice Architecture. 

The main idea of this application is to convert a monolithic into microservice application architecture

1. The main application is conference app that had speakers and feedback form as monolithic architecture
2. Created three services - service registry, speakers and feedback microservices
3. Main app calls the microservices using axios
4. Circuit Breakers are implemented in calling the service for check - OPEN, CLOSED and HALF open state.
5. RabbitMQ is implemented to send data from conference app to feedback queue and feedback microservice consumes it from queue.

Please leave a star if you find it useful.

![Screenshot 2022-09-04 at 12 12 27 PM](https://user-images.githubusercontent.com/15896579/188300978-a409fcdd-4ace-4654-95dc-8fd888b3fe64.png)


![Screenshot 2022-09-03 at 5 04 54 PM](https://user-images.githubusercontent.com/15896579/188300908-f6a6261b-2a1e-46ff-a94e-03f59767623f.png)


![Screenshot 2022-09-04 at 12 11 08 PM](https://user-images.githubusercontent.com/15896579/188300982-e6dd2e93-638d-4f84-8ada-da063506a5b0.png)
