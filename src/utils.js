import formatDistance from "date-fns/formatDistance";

export const arrayConvertor = (arrOfObjs, key) => {
  const arr = arrOfObjs.map((item) => {
    return item[key];
  });
  return arr;
};

export const average = (ratings) =>
  ratings.reduce((a, b) => a + b) / ratings.length;

export const getTimeAgo = (date) => {
  const miliSeconds = Date.parse(date);
  const newDateObj = new Date(miliSeconds);
  return formatDistance(newDateObj, new Date(), {addSuffix: true});
};
