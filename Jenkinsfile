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
    stage('start'){
        sh 'scp docker-compose-prod.yml root@zuntaz.com:/root/express/docker-compose.yml'
        sh 'ssh root@zuntaz.com << TESTE'
        sh 'cd express'
        sh 'docker-compose up -d'
        sh 'TESTE'

    }
  }
  catch (err) {
    throw err
  }
}