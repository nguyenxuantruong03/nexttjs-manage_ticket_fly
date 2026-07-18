import { getUsers } from "@/lib/users";
import ProviderBookingForm from "../components/form_page";

const ProviderBookingsCreate = async () => {
    const users = await getUsers()
    return ( 
       <ProviderBookingForm users = {users}/> 
     );
}
 
export default ProviderBookingsCreate;