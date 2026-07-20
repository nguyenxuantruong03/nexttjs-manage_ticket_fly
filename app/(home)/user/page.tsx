"use client";
import FormPage from "@/components/form/form";
import { DataTable } from "@/components/ui/data-table";
import { usersColumns } from "./components/columns";
import { useUsers } from "@/hooks/user";

const UserPage = () => {
  const { data = [], isPending, error } = useUsers();
  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  console.log("data", data);

  return (
    <FormPage
      label="User"
      title="Manage User"
      apiPath="users"
      description="Manage User"
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">
        <DataTable columns={usersColumns} data={data} />
      </div>
    </FormPage>
  );
};

export default UserPage;
