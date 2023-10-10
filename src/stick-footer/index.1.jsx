import "./index.css";
const StickFooter = () => {
  return (
    <div
      className="main"
      style={{ display: "flex", flexFlow: "column", height: "100vh" }}
    >
      <div className="header">header</div>
      <div className="container" style={{ flex: 1, background: "gray" }}>
        <div className="left">left</div>
        <div className="content">content</div>
        <div className="right">right</div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default StickFooter;
