const cron = require('node-cron');

// Define a cron job to run every minute
cron.schedule('* * * * *', () => {
  console.log('Running task every minute');
  // Add your task logic here (e.g., sending email notifications)
});

// Define a cron job to run every day at 8:00 AM
cron.schedule('0 7 * * *', () => {
  console.log('Running task every day at 7:00 AM');
  // Add your task logic here (e.g., sending daily email notifications)
});

// Define a cron job to run every Monday at 9:00 AM
cron.schedule('0 9 * * 1', () => {
  console.log('Running task every Monday at 9:00 AM');
  // Add your task logic here (e.g., sending weekly email notifications)
});
