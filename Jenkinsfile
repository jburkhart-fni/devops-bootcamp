pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Hello World'
                nodejs('node_install') {
                    sh "npm install"
                }
                
            }
        }
        stage('Test') {
            steps {
                nodejs('node_install') {
                    sh 'npm test'
                }
            }
        }
    }
}
