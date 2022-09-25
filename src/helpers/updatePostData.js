const {
  getValueByKey,
  setItemByKeyValue,
} = require("./localStorageOperations");

function updatePostData(postDataObj) {
  const storeKey = process.env.REACT_APP_STORE_KEY;
  const appData = getValueByKey(storeKey);
  setItemByKeyValue(storeKey, { ...appData, posts: postDataObj });
}

export default updatePostData;
