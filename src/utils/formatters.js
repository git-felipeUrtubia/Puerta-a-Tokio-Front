


export const formatName = (name) => {
  return name
    .toLowerCase()
    .split(' ')
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ');
};

export const reverseList = (lista) => {
  return [...lista].reverse();
};

