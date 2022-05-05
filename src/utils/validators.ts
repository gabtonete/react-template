// export const validatePassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,32}$');

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (
  password: string,
) => {
  const pwRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,32}$");
  if (pwRegex.test(password)) {
    return true;
  } else {
    return false;
  }
};

export const passwordComparison = (password: string,
  passwordValidation: string) => {
  if (password === passwordValidation) {
    return true;
  }
}