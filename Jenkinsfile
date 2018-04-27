pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        sh 'docker-compose build'
        sh 'docker-compose up -d'
      }
    }
  }
}