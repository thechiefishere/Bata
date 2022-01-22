const url = "http://localhost:5000";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const addData = () => {
  const data = fetchData();

  return {
    type: "UPDATE_DATA",
    payload: data,
  };
};
