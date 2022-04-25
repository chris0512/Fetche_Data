// d3.csv(input, init(optional), row(optional))
let csvOutput = d3.csv('username.csv');

console.log(csvOutput);

csvOutput.then(data => {console.log(data)});

csvOutput.then(data => {console.log(data.columns)});
csvOutput.then(data => {console.log(data.length)});


csvOutput = d3.csv('username.csv', row =>{
    return {
        username: row['Username'].toUpperCase(),
        identifier: Number(row['Identifier']),
        firstName: row['First name'].toUpperCase(),
        lastName: row['Last name'].toUpperCase(),
    }
});

csvOutput.then(data=>console.log(data))
    .catch(err => console.log(err));



// d3.tsv(input, init(optional), row(optional))
let tsvOutput = d3.tsv('username.tsv');
console.log(tsvOutput);
tsvOutput.then(data => console.log(data));
tsvOutput.then(data => console.log(data.columns));
tsvOutput.then(data => console.log(data.length));


tsvOutput = d3.tsv('username.tsv', d =>{
    return {
        username: d['Username'].toUpperCase(),
        identifier: Number(d['Identifier']),
        firstName: d['First name'].toUpperCase(),
        lastName: d['Last name'].toUpperCase()
    }
});

tsvOutput.then(data => console.log(data))
    .catch((err)=>console.log(err));


// d3.dsv(delimiter, input, init(optional), row(optional))
let dsvOutput = d3.dsv(';', 'username.dsv');
console.log(dsvOutput);

dsvOutput = d3.dsv(";", "username.dsv", d=>{
    return {
        username: d['Username'].toUpperCase(),
        identifier: Number(d['Identifier']),
        firstName: d['First name'].toUpperCase(),
        lastName: d['Last name'].toUpperCase()
    }
});
dsvOutput.then(data => console.log(data))
    .catch(err => console.log(err));


let jsonData = d3.json('username.json');
jsonData.then(data => console.log(data))
    .catch(err => console.log(err));
jsonData.then(data => console.log(data.length));


let imageOutput = d3.image('sample.png');
imageOutput.then(data=>console.log(data));


let svgOutput = d3.svg('sample.svg');
svgOutput.then(data => console.log(data))
    .catch(err => console.log(err));
