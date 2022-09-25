const getTimeStampForSite = (fromDate) => {
  let createdDate = new Date(fromDate);
  let today = new Date();
  let requiredDifferentDays;

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((createdDate - today) / oneDay));

  if (diffDays >= 360) {
    requiredDifferentDays = `${Math.floor(diffDays / 365)}y`;
  } else if (diffDays >= 30) {
    requiredDifferentDays = `${Math.floor(diffDays / 30)}m`;
  } else if (diffDays < 30 && diffDays >= 1) {
    requiredDifferentDays = `${diffDays}d`;
  } else if (diffDays < 1) {
    let hoursDiff = Math.floor(
      Math.abs((createdDate - today) / (60 * 60 * 1000))
    );
    if (hoursDiff >= 1) {
      requiredDifferentDays = `${hoursDiff}h`;
    } else if (hoursDiff < 1) {
      let minutesDiff = Math.floor(
        Math.abs((createdDate - today) / (60 * 1000))
      );
      if (minutesDiff === 0) {
        requiredDifferentDays = "just now";
      } else {
        requiredDifferentDays = `${minutesDiff}min`;
      }
    }
  }
  return requiredDifferentDays;
};

export default getTimeStampForSite;
