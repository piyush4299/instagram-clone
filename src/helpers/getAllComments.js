const { getValueByKey } = require("./localStorageOperations");

function getAllComments() {
  const storeKey = process.env.REACT_APP_STORE_KEY;
  const appData = getValueByKey(storeKey);
  return appData.comments;
}

export default getAllComments;
