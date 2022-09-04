# Conference-app
Node.js application using Microservice Architecture. The main idea of this application is to convert a monolithic application into microservice archotectire

1. The main application is conference app that had speakers and feedback form as monolithic architecture
2. Created three services - service registry, speakers and feedback microservices
3. Main app calls the microservices using axios
4. RabbitMQ is implemented to send data from conference app to feedback queue and feedback microservice consumes it from queue.


