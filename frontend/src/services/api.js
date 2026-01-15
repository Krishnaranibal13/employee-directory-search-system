// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
// });

// export const searchEmployees = async (keyword) => {
//   const res = await API.get("/api/employees/search", {
//     params: { search: keyword },
//   });
//   return res.data;
// };

// export const getAllEmployees = async () => {
//   const res = await API.get("/api/employees/all");
//   return res.data;
// };



// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
// });

// export const searchEmployees = async (keyword) => {
//   const res = await API.get("/api/employees/search", {
//     params: { search: keyword },
//   });
//   return res.data;
// };

// export const getAllEmployees = async () => {
//   const res = await API.get("/api/employees/all");
//   return res.data;
// };


import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const searchEmployees = async (keyword) => {
  const res = await API.get("/api/employees/search", {
    params: { search: keyword },
  });
  return res.data;
};

export const getAllEmployees = async () => {
  const res = await API.get("/api/employees/all");
  return res.data;
};
