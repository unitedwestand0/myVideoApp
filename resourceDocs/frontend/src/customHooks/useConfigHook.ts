export const useConfig = () => {
  const token = localStorage.getItem("token");
  const configWithJWT = {
    headers: {
      Authorization: `Bearer ${token}`, // Pass the token in the header
    },
  };
  return { configWithJWT };
};
