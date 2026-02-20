import Sidebar from "../components/Sidebar";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import "../styles/builder.css";

export default function Builder() {
  return (
    <div className="builder">
      <Sidebar />
      <ResumeForm />
      <ResumePreview />
    </div>
  );
}