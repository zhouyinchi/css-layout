import "./index.css";
const FullScreen = () => {
  return (
    <div className="full-container">
      <div className="header">header</div>
      <div
        className="content"
        style={{ overflow: "hidden", height: "calc(100vh - 200px)" }}
      >
        <div className="left" style={{ height: "100%" }}>
          导航
        </div>
        <div className="right" style={{ height: "100%", overflow: "auto" }}>
          <div className="right-in" style={{ height: "200vh" }}>
            自适应，超出高度出现滚动条
          </div>
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
};

export default FullScreen;
