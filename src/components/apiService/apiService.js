import axios from 'axios';

export const postData = async (data) => {
  try {
    const response = await axios.post('http://localhost:3031/users', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (id) => {
  try {
    const response = await axios.delete('http://localhost:3031/users/' + id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const UpdatetData = async (formValues) => {
  try {
    const response = axios.put('http://localhost:3031/users/' + formValues.id, formValues);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3031/users');
    return response;
  } catch (error) {
    console.log(error);
  }
};
