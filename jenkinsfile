pipeline {
    agent any
    options {
        timeout(time: 60, unit: 'MINUTES')
    }
    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Node and NPM') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {

        always {
            archiveArtifacts(
                artifacts: 'playwright-report/**',
                allowEmptyArchive: true,
                fingerprint: true
            )
        }

        success {
            echo 'Playwright tests completed successfully.'
        }

        failure {
            echo 'Playwright tests failed.'
        }
    }
}
