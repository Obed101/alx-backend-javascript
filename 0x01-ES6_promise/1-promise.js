export default function handleResponseFromAPI (promise) {
  if (promise) {
    const workDone = {
      status: 200,
      body: 'Succcess'
    };
    Promise.resolve(workDone);
  } else {
    const failed = 'The fake API is not working currently';
    Promise.reject(failed);
  }
}
