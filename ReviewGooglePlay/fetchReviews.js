import('google-play-scraper').then((gplay) => {
    // Your code that uses gplay
  }).catch((error) => {
    console.error('Error importing google-play-scraper:', error);
  });
  
  import('fs').then((fss) => {
    // Your code that uses fss
  }).catch((error) => {
    console.error('Error importing fs:', error);
  });
  

import gplay from "google-play-scraper";
import fss from "fs";


// will return 3000 reviews
// on a single call
gplay.reviews({
appId: 'com.iexceed.CBS',
sort: gplay.sort.HELPFULNESS,
num: 1000
}).then(
(reviews) => {
    // Convert reviews to JSON string for logging
    const reviewsString = JSON.stringify(reviews, null, 2);

    // Write the reviews to the log file
    fss.appendFile('log.txt', reviewsString, (err) => {
if (err) {
        console.error('Error writing to log file:', err);
    } else {
        console.log('Reviews logged to', 'log.txt');
    }
    });
},
(error) => {
    console.error('Error fetching reviews:', error);
}
);



