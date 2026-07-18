import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { getUsers } from "@/lib/users";
import { usersColumns } from "./components/columns";

const UserPage = async () => {
  const users = await getUsers();
  
  return (
    <FormPage
      label="User"
      title="Manage User"
      link="/user/create"
      action="Create"
      apiPath="users"
      description="Manage User"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable columns={usersColumns} data={users} />
      </div>
    </FormPage>
  );
};

export default UserPage;
