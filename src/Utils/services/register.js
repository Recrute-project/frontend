import axios from "../axios_setup";
import backend from "../backend";

export default async function register(credentials) {
  console.log("Service Called");

  try {
  let response = await axios.post(
    backend.settings.baseURL + backend.settings.register,
    credentials
  );
  if (response.status === 200) {
    console.log("Reg Success");
    localStorage.setItem('token', response.data.token);
    return response.data;
  } else {
    console.error("ERROR: " + response.status);
    console.error("Description: " + response.data.message);
    return null;
  }
}
catch(err) {
  console.error("SERVER ERROR: ");
  console.error(err)
}
}
