import { parseString } from 'xml2js';

export function convertXMLToObject(xml) {
    let result;
    parseString(xml, (err, res) => {
        result = res;
    });
    return result;
}

export function convertListOfObjectToCsv(data) {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const row of data) {
        const values = headers.map(header => {
            const val = row[header];
            return `"${val}"`;
        });

        csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
}