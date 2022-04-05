export function handleResponseFromAPI (promise) {
  if (promise) {
    const workDone = {
      status: 200,
      body: 'Success'
    };
    return Promise.resolve(workDone);
  } else {
    const failed = 'The fake API is not working currently';
    return Promise.reject(failed);
  }
}
