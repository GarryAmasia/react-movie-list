export const randomChar = () => {
  const chars = "OQWERTYUIOPASDFGHJKLZXCVBNqwertyuioasdfghjklzxcvbnm";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};
