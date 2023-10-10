import "./index.css";
const StickFooter = () => {
  return (
    <div
      className="main"
      style={{ height: "100vh", position: "relative", minHeight: "100vh" }}
    >
      <div className="header">header</div>
      <div
        className="container"
        style={{ paddingBottom: "100px", background: "gray" }}
      >
        <div className="left">left</div>
        <div className="content">content</div>
        <div className="right">right</div>
      </div>
      <div
        className="footer"
        style={{ position: "absolute", bottom: "0", width: "100%" }}
      >
        footer
      </div>
    </div>
  );
};

export default StickFooter;
