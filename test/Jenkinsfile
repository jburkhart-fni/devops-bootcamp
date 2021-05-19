pipeline {
    agent any
    
    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
                nodejs('node_install') {
                    sh "npm install"
                }
                
            }
        }
    }
}
