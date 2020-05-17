function getUniqueId() {
  return +(Math.random() * 100000).toFixed(0);
}
export default getUniqueId;
