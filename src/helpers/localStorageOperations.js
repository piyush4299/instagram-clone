export const getValueByKey = (keyToFind) => {
  return JSON.parse(localStorage.getItem(keyToFind));
};

export const setItemByKeyValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
