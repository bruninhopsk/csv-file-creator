import { convertListOfObjectToCsv } from './helper/conversions.js';
import { searchListOfServiceWithTherDependencies } from './helper/listOfServiceAndDependencies.js';
import { writeFileSync } from 'fs';

const directory = "C:/Users/m.oliveira.barbosa/Projects"; /* Path where are you projects*/

const listOfService = searchListOfServiceWithTherDependencies(directory, '.csproj');
const csv = convertListOfObjectToCsv(listOfService);

writeFileSync("./package-references.csv", csv);


