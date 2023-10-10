import "./index.css";
const ThreeColumns = () => {
  return (
    <>
      <p id="three-columns">children:float + overflow</p>
      <div className="parent container clearfix three">
        <div className="left" style={{ float: "left" }}>
          定宽
        </div>
        <div className="right" style={{ float: "right" }}>
          定宽
        </div>
        <div className="content" style={{ overflow: "hidden" }}>
          自适应
        </div>
      </div>
      <p>children:float + calc</p>
      <div className="parent container clearfix three">
        <div className="left" style={{ float: "left" }}>
          定宽
        </div>

        <div className="right" style={{ float: "right" }}>
          定宽
        </div>
        <div className="content" style={{ width: "calc(100% -200px)" }}>
          自适应
        </div>
      </div>
      <p>children:position:absolute +margin-left:100px</p>
      <div className="parent container clearfix three">
        <div className="left" style={{ position: "absolute" }}>
          定宽
        </div>
        <div
          className="right"
          style={{ position: "absolute", right: 10, top: 10 }}
        >
          定宽
        </div>
        <div
          className="content"
          style={{
            width: "calc(100% -200px)",
            marginLeft: 100,
            marginRight: 100,
          }}
        >
          自适应
        </div>
      </div>
      <p>flex</p>
      <div className="parent container clearfix flex three">
        <div className="left">定宽</div>
        <div className="content" style={{ flex: 1 }}>
          自适应
        </div>
        <div className="right">定宽</div>
      </div>
      <p>grid</p>
      <div
        className="parent container clearfix grid three"
        style={{ gridTemplateColumns: "auto 1fr auto" }}
      >
        <div className="left">定宽</div>
        <div className="content">自适应</div>
        <div className="right">定宽</div>
      </div>
    </>
  );
};

export default ThreeColumns;
