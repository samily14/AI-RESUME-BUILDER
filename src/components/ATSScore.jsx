export default function ATSScore({ score }) {
  return (
    <div className="ats-card">
      <h3>Resume Score</h3>
      <div className="circle">{score}/100</div>
    </div>
  );
}