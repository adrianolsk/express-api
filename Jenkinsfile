pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        sh 'docker ps -a'
        sh 'docker-compose up -d'
      }
    }
  }
}