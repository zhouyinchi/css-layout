const TwoColumns = () => {
  return (
    <>
      <p id="two-columns">children:float + calc</p>
      <div className="parent container clearfix">
        <div className="left" style={{ float: "left" }}>
          定宽
        </div>
        <div
          className="right"
          style={{ float: "left", width: "calc(100% - 100px)" }}
        >
          自适应
        </div>
      </div>
      <p>children:float +margin-left:100px</p>
      <div className="parent container clearfix">
        <div className="left" style={{ float: "left" }}>
          定宽
        </div>
        <div className="right" style={{ marginLeft: "100px" }}>
          自适应
        </div>
      </div>
      <p>children:position:absolute +margin-left:100px</p>
      <div className="parent container clearfix">
        <div className="left" style={{ position: "absolute" }}>
          定宽
        </div>
        <div className="right" style={{ marginLeft: "100px" }}>
          自适应
        </div>
      </div>
      <p>children:position:absolute +overflow:hidden (BFC)</p>
      <div className="parent container clearfix">
        <div className="left" style={{ position: "absolute" }}>
          定宽
        </div>
        <div className="right" style={{ overflow: "hidden" }}>
          自适应
        </div>
      </div>
      <p>flex</p>
      <div className="parent container clearfix flex">
        <div className="left">定宽</div>
        <div className="right" style={{ flex: 1 }}>
          自适应
        </div>
      </div>
      <p>grid</p>
      <div
        className="parent container clearfix grid"
        style={{ gridTemplateColumns: "auto 1fr" }}
      >
        <div className="left">定宽</div>
        <div className="right">自适应</div>
      </div>
    </>
  );
};

export default TwoColumns;
