export default function Sidebar() {
  return (
    <div className="sidebar">
  <h3>Resume Builder</h3>
  <button onClick={() => setSection("profile")}>Profile</button>
  <button onClick={() => setSection("skills")}>Skills</button>
  <button onClick={() => setSection("projects")}>Projects</button>
  <button onClick={() => setSection("ats")}>ATS</button>
</div>
  );
}