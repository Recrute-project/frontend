import axios from "../axios_setup"
import backend from "../backend"

export default async function companyRegister(credentials) {
   let response = await axios.post(backend.settings.baseURL + backend.settings.companyRegister);
   if(response.status === 200) {
      console.log("Success");
      return true;
   }
   else {
      console.error("ERROR: " + response.status);
      console.error("Description: " + response.data.message);
   }
}