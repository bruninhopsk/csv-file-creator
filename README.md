# csv-file-creator
This application aims to read xml files (.csproj) from a directory and export a list of services with their dependencies and versions in a .csv file.

# Introduction
This project has the purpose of searching all projects in a certain directory(being possible to choose which one), creating a data list containing: Service Name / Dependency(Library) / Dependency Version. Once this information has been collected, it converts this data to a .csv file and creates it in the root of the project.

# How to test this project
Make sure you have Node.js installed on you machine and the package management (npm)
In the Index.js file, on line 5, change the directory where your projects are, example: [C:\Users]
Run the command node index.js in terminal
After the command is successfully completed, the file: [package-references.csv] will be created in the root of the project.