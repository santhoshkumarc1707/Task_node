// Sample asynchronous functions
function fetchData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data 1');
      }, 1000);
    });
  }
  
  function fetchData2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data 2');
      }, 1500);
    });
  }
  
  function fetchData3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data 3');
      }, 2000);
    });
  }
  
  // Using async/await to perform operations sequentially
  async function fetchSequentially() {
    try {
      const data1 = await fetchData1();
      console.log('Data 1:', data1);
  
      const data2 = await fetchData2();
      console.log('Data 2:', data2);
  
      const data3 = await fetchData3();
      console.log('Data 3:', data3);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Using Promise.all to perform operations in parallel
  async function fetchInParallel() {
    try {
      const [data1, data2, data3] = await Promise.all([fetchData1(), fetchData2(), fetchData3()]);
      console.log('Data 1:', data1);
      console.log('Data 2:', data2);
      console.log('Data 3:', data3);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call functions to demonstrate asynchronous control flow
  console.log('Fetching data sequentially:');
  fetchSequentially();
  
  console.log('\nFetching data in parallel:');
  fetchInParallel();
  