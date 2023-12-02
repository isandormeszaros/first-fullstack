import http from "../http-common";

const getAll = () => {
  return http.get('/filmek');
};

const get = (id) => {
    return http.get(`/filmek/${id}`);
  };
  
  const create = (data) => {
    return http.post(`/filmek`, data);
  };
  
  const filmService = {
    getAll,
    get,
    create
  };
  
  export default filmService;
  
