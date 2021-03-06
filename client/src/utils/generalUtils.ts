const pipe = (...fns: Array<Function>) => (x: any) =>
  fns.reduce((v, f) => f(v), x);

const setCookie = (label: string, data: string) => {
  try {
    // console.log("label:", label, "data", data);
    document.cookie = `${label}=${data}`;
  } catch (error) {
    console.log("Error setting cookies");
  }
};

const deleteFromCookie = (label: string) => {
  document.cookie = `${label}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
};

const getCookie = (label: string) => {
  let cookieValue = null;
  try {
    if (document.cookie.indexOf(label) !== 0) {
      cookieValue = document.cookie
        .split(";")
        .filter((row) => row.indexOf(label) !== -1)[0]
        .split("=")[1];
    }
  } catch (error) {
    console.log(error);
  }

  // console.log(cookieValue);
  return cookieValue;
};

const deepCopy = (obj: {}) => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};

const formatTwoDigits = (number: number): number => {
  const string = number.toString();
  return string.length > 1 ? +string : Number("0" + string);
};

const formatDateYYYYMMDD = (dateString: string) => {
  const dateObject = new Date(dateString);
  const month = formatTwoDigits(dateObject.getUTCMonth());
  const day = formatTwoDigits(dateObject.getDate());
  const formatedDateString = `${dateObject.getFullYear()}-${month}-${day}`;
  return formatedDateString;
};

export {
  pipe,
  setCookie,
  deleteFromCookie,
  getCookie,
  deepCopy,
  formatDateYYYYMMDD,
};
