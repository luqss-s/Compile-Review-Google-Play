// import fs from 'fs/promises';

// const reviewsFilePath = 'log.txt';
// const csvFilePath = 'reviews.csv';

// // Read the log.txt file
// fs.readFile(reviewsFilePath, 'utf8')
//   .then(data => {
//     try {
//       // Parse JSON from the file
//       const jsonData = JSON.parse(data);

//       // Access the array of reviews within the JSON data
//       const reviewsArray = jsonData.data || jsonData.reviews || [];

//       // Extract relevant information from each review object
//       const reviewsData = reviewsArray.map(review => {
//         return {
//           id: review.id,
//           userName: review.userName,
//           text: review.text,
//           score: review.score,
//           // Add other properties you want to include
//         };
//       });

//       // Convert the reviews array to CSV
//       const csvHeader = Object.keys(reviewsData[0]).join(',');
//       const csvRows = reviewsData.map(review => Object.values(review).join(','));

//       // Write the CSV data to a new CSV file
//       return fs.writeFile(csvFilePath, [csvHeader, ...csvRows].join('\n'), 'utf8');
//     } catch (parseError) {
//       console.error('Error parsing JSON:', parseError.message);
//     }
//   })
//   .then(() => {
//     console.log('CSV file created:', csvFilePath);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

import fs from 'fs/promises';

const reviewsFilePath = 'log.txt';
const csvFilePath = 'reviews_text.csv';

// Read the log.txt file
fs.readFile(reviewsFilePath, 'utf8')
  .then(data => {
    try {
      // Parse JSON from the file
      const jsonData = JSON.parse(data);

      // Access the array of reviews within the JSON data
      const reviewsArray = jsonData.data || jsonData.reviews || [];

      // Extract only the text property from each review object
      const textArray = reviewsArray.map(review => review.text);

      // Convert the text array to CSV
      const csvRows = textArray.map(text => [text]);

      // Write the CSV data to a new CSV file
      return fs.writeFile(csvFilePath, csvRows.map(row => row.join(',')).join('\n'), 'utf8');
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
    }
  })
  .then(() => {
    console.log('CSV file created:', csvFilePath);
  })
  .catch(error => {
    console.error('Error:', error);
  });
