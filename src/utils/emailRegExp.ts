const pattern = '[a-z0-9]+@[a-z]+.[a-z]{2,3}'
export const emailValidate = new RegExp(pattern);