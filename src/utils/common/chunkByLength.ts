const chunkByLength = (value: string, junction = 200) => {
  return [value.slice(0, junction), value.slice(junction, value.length)];
};
export default chunkByLength;
