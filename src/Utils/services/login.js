import axios from "../axios_setup";
import backend from "../backend";

// credentials -
// email:
// password:
// isCompany:

export default async function login(credentials) {
  console.log("Service Called");
  try {
  let response = await axios.post(
    backend.settings.baseURL + backend.settings.login,
    credentials
  );
  if (response.status === 200) {
    console.log("Login Success");
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
