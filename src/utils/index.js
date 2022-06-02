export const formatUserDataToObject = (data) => {
  const { displayName, email, phoneNumber, photoURL, uid } = data;
  return { displayName, email, phoneNumber, photoURL, uid };
};
export const objectHasValuesForKeys = (compareWith, object) => {
  const keys = Object.keys(object)
  const hasAllKeys = compareWith.every(key => keys.includes(key));
  if(hasAllKeys) {
      // check if all keys have value;
      const areKeysNull = shouldSubmitBeDisabled(object);
      return areKeysNull;
  }
  return !hasAllKeys;
}
export const getSrcFromBuffer = (profile) => {
  return `data:${profile.mimetype};base64,${Buffer.from(profile.file).toString('base64')}`
}
export const getFileExtension = (type) => {
  const ext = type.split('/');
  return ext[1];
}
export const getFormDataFromFile = (key, file) => {
  const formData = new FormData();
  formData.append(key, file);
  return formData;
}

export const sellerFormValidation = (form) => {
  // validations left
  // if error throw ERROR_MESSAGES

}