const addTokenToHeaders = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };
      return headers;
    }
    return {};
  };
  
  export default addTokenToHeaders;
