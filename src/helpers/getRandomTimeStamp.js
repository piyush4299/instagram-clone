function getRandomTimeStamp(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export default getRandomTimeStamp;
