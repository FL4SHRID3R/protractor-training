pipeline {
  options {
    ansiColor('xterm')
    timeout(time: 30, unit: 'MINUTES')
  }
  
  stages {
    stage('Test stage 1') {
      steps {
        echo "Stage one."
        sh 'ls -al'
      }
    }
    
    stage('Test stage 2') {
      steps {
        echo "Stage two."
        echo "npm install"
        npm install
      }
    }
  }
  
  post {
    success {
      echo "Success post action."
    }
    
    fail {
      echo "Fail post action."
    }
  
    always {
      echo "Always post action."
    }
  }

}
