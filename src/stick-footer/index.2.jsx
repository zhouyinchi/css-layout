import "./index.css";
const StickFooter = () => {
  return (
    <div
      className="main grid"
      style={{ height: "100vh", gridTemplateRows: "auto 1fr auto" }}
    >
      <div className="header">header</div>
      <div className="container">
        <div className="left">left</div>
        <div className="content">content</div>
        <div className="right">right</div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default StickFooter;
