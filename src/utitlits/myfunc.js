// export const convertObj = (obj) => {
//   const emptyArr = [];
//
//   for (let key in obj) {
//     if (obj[key].clues.length === 5 && obj[key].total === 1500) {
//       emptyArr.push({
//         id: key,
//         title: obj[key].title,
//         clues: [...obj[key].clues].map((item) => {
//           return { ...item, answerIsCorrect: null };
//         }),
//       });
//     }
//   }
//
//   return emptyArr;
// };
export const replaceInNewArr = (arr) => {
  const emptyObj = {};
  const emptyArr = [];

  arr.forEach((el) => {
    if (!emptyObj[el.category_id]) {
      emptyObj[el.category_id] = {
        title: el.category.title,
        clues: [
          {
            id: el.id,
            question: el.question,
            answer: el.answer,
            value: el.value,
          },
        ],
        total: el.value,
      };
    } else {
      emptyObj[el.category_id].clues.push({
        id: el.id,
        question: el.question,
        answer: el.answer,
        value: el.value,
      });
      emptyObj[el.category_id].total += el.value;
    }
  });

  for (let key in emptyObj) {
    if (emptyObj[key].clues.length === 5 && emptyObj[key].total === 1500) {
      emptyArr.push({
        id: key,
        title: emptyObj[key].title,
        clues: [...emptyObj[key].clues].map((item) => {
          return { ...item, answerIsCorrect: null };
        }),
      });
    }
  }

  return emptyArr;
};
export const getRandomItems = (arr) =>
  arr.sort(() => 0.5 - Math.random()).slice(0, 5);
