import axios from 'axios';
type item = {
  id: string;
  data: {
    id: number;
    hero_name: string;
    hero_power: string;
    group: string;
  };
};
export const fetchData = async () => {
  const response = await axios.get(
    'https://6453582ce9ac46cedf22c25e.mockapi.io/heros/',
  );
  const data = await response.data;
  return data;
};
export const deleteData = async (id: string) => {
  return await axios.delete(
    `https://6453582ce9ac46cedf22c25e.mockapi.io/heros/${id}`,
  );
};
export const addData = (item: object) => {
  return axios.post(`https://6453582ce9ac46cedf22c25e.mockapi.io/heros`, item);
};
export const updateData = (Item: item) => {
  return axios.patch(
    `https://6453582ce9ac46cedf22c25e.mockapi.io/heros/${Item.id}`,
    Item.data,
  );
};
