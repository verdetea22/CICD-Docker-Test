# CICD Docker Test

A simple Node.js application that demonstrates the integration of Docker and a CI/CD pipeline using GitLab. 
The project uses Mocha and Chai for testing and includes a setup for containerization with Docker.

## Project Overview

The application is a basic Node.js server that responds with a "Hello World" message. 
The project goal is to automate testing, building, and deployment using GitLab CI/CD pipelines.

## Technologies Used

- **Node.js**: JavaScript runtime for building the application.
- **Express**: Web framework for Node.js.
- **Docker**: Containerization of the Node.js application.
- **Mocha**: Testing framework for automated tests.
- **Chai**: Assertion library used with Mocha for test validation.
- **GitLab CI/CD**: Continuous Integration/Continuous Deployment setup for automating testing and deployment.

## CI/CD Pipeline

The project is set up with a GitLab CI/CD pipeline that automates the process of running tests, building the Docker image, and deploying the application. The pipeline is defined in the `.gitlab-ci.yml` file.

## Badges

(https://gitlab.com/mmount/CICD-Docker-Test/badges/master/pipeline.svg?ignore_skipped=true)

[![pipeline status](https://gitlab.com/mmount/CICD-Docker-Test/badges/master/pipeline.svg)](https://gitlab.com/mmount/CICD-Docker-Test/-/commits/master)


## License

This project is licensed under the MIT License.
