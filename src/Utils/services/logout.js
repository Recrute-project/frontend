import axios from "./../axios_setup"
import backend from "./../backend"

export default async function logout() {
   try { 
   let response = await axios.post(backend.settings.baseURL + backend.setting.logout);
   if(response.status == 200) {
      console.log("Logout Success")
      return true;
   }
   else {
      console.error("ERROR: " + response.status);
      console.error("Description: " + response.data.message);
   }
   }

   catch(err) {
      console.error("SERVER ERROR: ");
      console.error(err)
    }
}