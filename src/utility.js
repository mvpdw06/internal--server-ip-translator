export const transToKeyCode = str => {
  return str.toUpperCase().charCodeAt(0)
}

const serverCodeChecker = str => {
  const keyCode = transToKeyCode(str.toUpperCase())
  // only A-J
  return (keyCode >= 65 && keyCode <= 74)
}

export const eachCharCheckIsServerCode = (charList) => {
  if (!!!charList || charList.lenght === 0) return false;

  let result = true;
  charList.map((char) => {
    if (!serverCodeChecker(char)) {
      result = false;
    }
  })

  return result
}

export default {
  transToKeyCode,
  eachCharCheckIsServerCode,
}
