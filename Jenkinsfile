
pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        timeout(time: 20, unit: 'MINUTES')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Validate Files') {
            steps {
                sh '''
                    set -eu

                    test -f /etc/employee-directory/.env
                    test -f docker-compose.yml
                    test -f backend/Dockerfile
                    test -f frontend/Dockerfile
                    test -f frontend/nginx.conf

                    echo "Required deployment files are present."
                '''
            }
        }

        stage('Build and Deploy') {
            steps {
                sh '''
                    set -eu

                    cp /etc/employee-directory/.env .env
                    chmod 600 .env

                    docker compose config -q

                    docker compose up -d --build

                    echo "Docker Compose deployment completed."
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    set -eu

                    echo "Waiting for frontend..."

                    for attempt in $(seq 1 30); do
                        if curl -fsS http://127.0.0.1/ -o /dev/null; then
                            echo "Frontend is responding."
                            break
                        fi

                        if [ "$attempt" -eq 30 ]; then
                            echo "Frontend verification failed."
                            exit 1
                        fi

                        sleep 5
                    done

                    echo "Checking employee API..."

                    curl -fsS \
                        http://127.0.0.1/api/employees/all

                    echo
                    echo "Checking container status..."

                    docker compose ps
                '''
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Employee Directory deployed and verified.'
        }

        failure {
            echo 'FAILURE: Check the Jenkins Console Output.'

            sh '''
                docker compose ps || true
                docker compose logs --tail=100 || true
            '''
        }

        always {
            sh 'rm -f .env'
        }
    }
}
