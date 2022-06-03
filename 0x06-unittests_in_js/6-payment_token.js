// Gets payment token from API

async function getPaymentTokenFromAPI (success) {
  if (success) {
    return await Promise.resolve({ data: "Successful response from the API" });
  }
}
module.exports = getPaymentTokenFromAPI;
