import fs from "fs";
import { faker } from '@faker-js/faker';

const productData = []

for(let i = 0; i < 10; i++){
    const productDatum = {
        name: faker.commerce.product(),
        category: faker.commerce.department(),
        price: parseInt(faker.commerce.price(), 10),
        description: faker.commerce.productDescription(),
        condition: parseInt(faker.random.numeric(), 10),
        sellerName: faker.company.name() 
    }

    productData.push(productDatum)
}

const jsonString = JSON.stringify(productData, null, 2)
  
fs.writeFile('./data.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})

// function jsonReader(filePath, cb) {
//   fs.readFile(filePath, (err, fileData) => {
//     if (err) {
//       return cb && cb(err);
//     }
//     try {
//       const object = JSON.parse(fileData);
//       return cb && cb(null, object);
//     } catch (err) {
//       return cb && cb(err);
//     }
//   });
// }

// jsonReader("./data.json", (err, productData) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     const jsonString = JSON.stringify(productDatum, null, 2)
  
//     fs.writeFile('./data.json', jsonString, err => {
//         if (err) {
//             console.log('Error writing file', err)
//         } else {
//             console.log('Successfully wrote file')
//         }
//     })

// });