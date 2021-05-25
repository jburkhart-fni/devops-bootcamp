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
        stage('Docker Image Build') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'JohnCredentials', passwordVariable: 'AWS_SECRET_ACCESS_KEY', usernameVariable: 'AWS_ACCESS_KEY_ID')]) {
                    sh '''
                        wget https://download.docker.com/linux/ubuntu/dists/bionic/pool/stable/amd64/docker-ce-cli_18.09.9~3-0~ubuntu-bionic_amd64.deb
                        dpkg -i ./docker-ce-cli_18.09.9~3-0~ubuntu-bionic_amd64.deb
                        apt-get update
                        apt-get install -y awscli
                        docker build -t workshopuser11:latest .
                        docker tag workshopuser11:latest workshopuser11:${BUILD_NUMBER}
                        docker tag workshopuser11:latest 686567993080.dkr.ecr.us-east-1.amazonaws.com/devopsbootcampuser0000:latest
                        $(aws ecr get-login --region us-east-1 | sed 's/-e none//g')
                        docker push 686567993080.dkr.ecr.us-east-1.amazonaws.com/devopsbootcampuser11:latest
                    '''
                }
            }
        }
    }
}
