import axios from 'axios';

export const getData = async (url) => {
   const { data } = await axios.get(url);
   return data;
}

export const postData = async (url, props) => {
   const { data } = await axios.post(url, props);
   return data;
};