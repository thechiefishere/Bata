const url = "http://localhost:5000/api/v1/footwears";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data);

  return data;
};

export const addData = () => {
  const data = fetchData();

  if (data.status !== "success") {
    return {
      type: "ERROR-LOADING-DATA",
    };
  }

  return {
    type: "UPDATE-DATA",
    payload: data.items,
  };
};
