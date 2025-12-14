import EditForm from "@/feature/edit/EditForm";
import { AlertProvider } from "@/shared/providers/alertProvider";
import Header from "@/shared/ui/header";

function EditPage() {
  return (
    <div>
      <Header title="대회 생성" />
      <AlertProvider>
        <EditForm />
      </AlertProvider>
    </div>
  );
}

export default EditPage;
