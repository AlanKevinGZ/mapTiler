pipeline{
    agent any
    tools{
        nodejs "node"
    }
   
    stages{
        stage("install"){
            
            steps{
                git branch: 'master', credentialsId: 'GitHub-udemy', url: 'https://github.com/AlanKevinGZ/mapTiler.git'
                bat 'npm install'
            }

        }

         stage("Ready to used"){
            
            steps{
                
                echo 'ng s'
            }
            
        }

           

    }
    
}