import { readdirSync, lstatSync, readFileSync } from 'fs';
import { join } from 'path';
import { convertXMLToObject } from './conversions.js';

var listOfServiceAndDependencies = [];
export function searchListOfServiceWithTherDependencies(directory, filter) {
    let directories = readdirSync(directory);

    directories.forEach(element => {
        let fileName = join(directory, element);

        let stat = lstatSync(fileName);
        if (stat.isDirectory()) {
            searchListOfServiceWithTherDependencies(fileName, filter)
        } else if (fileName.endsWith(filter)) {
            const data = readFileSync(fileName, 'utf-8');

            let obj = {
                serviceName: element.substring(0, element.indexOf('.'))
            }

            let xmlConverted = convertXMLToObject(data);

            let listPackageReferences = xmlConverted?.Project?.ItemGroup?.find(x => x?.PackageReference);

            if (listPackageReferences != null) {
                listPackageReferences.PackageReference.forEach(element => {

                    obj.package = element.$.Include;
                    obj.version = element.$.Version;

                    listOfServiceAndDependencies.push(obj);
                });
            }
        }
    });

    return listOfServiceAndDependencies;
}
