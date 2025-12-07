import AddForm from "@/feature/add/AddForm";
import { AlertProvider } from "@/shared/providers/alertProvider";
import Header from "@/shared/ui/header";

function AddPage() {
  return (
    <div>
      <Header title="대회 생성" />
      <AlertProvider>
        <AddForm />
      </AlertProvider>
    </div>
  );
}

export default AddPage;
