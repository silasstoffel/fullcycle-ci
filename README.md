# FullCycle CI

This is an example project to practice continuos integrations.    

1 - Create Git Actions [on_pull_request](./.github/workflows/on_pull_request.yml). Here, I use steps as tests and code analyzer with (Sonar Cloud)[https://sonarcloud.io].

2 - Enable require status checks (Branch Protected Rule) for actions as tests and code analyzer (sonar cloud).

3 - Create organization in Sonar Cloud 

4 - Create Project in Sonar Cloud

5 - Generate Sonar Token to your project

6 - Create secret `SONAR_TOKEN` in your project in github

7 - Define your [sonar-project.properties](./sonar-project.properties) 