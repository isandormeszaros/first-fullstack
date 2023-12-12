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
  
  const remove = (id) => {
    return http.delete(`/filmek/${id}`);
  };

  const update = (id, data) => {
    return http.put(`/filmek/${id}`, data);
  };

  const filmService = {
    getAll,
    get,
    create,
    remove, 
    update
  };
  
  export default filmService;
  
