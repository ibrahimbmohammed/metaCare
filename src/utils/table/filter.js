export default function searchFor(data, term, columns) {
  if (data.length === 0) {
    return [];
  }
  return data.filter((item) => {
    const flattened = flattenObject(item);
    for (let column of columns) {
      if (
        flattened[column] &&
        toLowercase(flattened[column]).includes(toLowercase(term))
      ) {
        return item;
      }
    }

    return flattened;
  });
}

function toLowercase(text) {
  if (typeof text !== "string") {
    return `${text}`.toLowerCase();
  }
  return text.toLowerCase();
}

function flattenObject(obj) {
  let toReturn = {};

  for (let i in obj) {
    if (!obj.hasOwnProperty(i)) continue;

    if (typeof obj[i] == "object" && obj[i] !== null) {
      const flatObject = flattenObject(obj[i]);
      for (let x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[i + "." + x] = flatObject[x];
      }
    } else {
      toReturn[i] = obj[i];
    }
  }
  return toReturn;
}
