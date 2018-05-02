node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
     sh 'docker build -t my_express -f Dockerfile --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm --detach my_express '
    }
    stage('Clean Docker test'){
      sh 'docker rmi -f my_express'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t my_express --no-cache .'
        sh 'docker tag my_express localhost:5000/my_express'
        sh 'docker push localhost:5000/my_express'
        sh 'docker rmi -f react-app localhost:5000/my_express'
      }
    }
  }
  catch (err) {
    throw err
  }
}