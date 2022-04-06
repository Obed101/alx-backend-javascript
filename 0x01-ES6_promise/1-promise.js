export function handleResponseFromAPI (promise) {
  return new Promise((resolve, reject) => {
	  if (promise) {
      const workDone = {
        status: 200,
        body: 'Success'
      };
      resolve(workDone);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
