import { getValueByKey } from "./localStorageOperations";

function getUserData() {
  const storeKey = process.env.REACT_APP_STORE_KEY;
  const appData = getValueByKey(storeKey);
  return appData.users;
}

export default getUserData;
