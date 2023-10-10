import "./index.css";
const EqualWidth = () => {
  return (
    <>
      <p id="equal-width"> float + 百分比</p>
      <div className="parent container equal">
        <div className="item1" style={{ float: "left", width: "25%" }}>
          1
        </div>
        <div className="item2" style={{ float: "left", width: "25%" }}>
          2
        </div>
        <div className="item3" style={{ float: "left", width: "25%" }}>
          3
        </div>
        <div className="item4" style={{ float: "left", width: "25%" }}>
          4
        </div>
      </div>
      <p> inline-block + 百分比</p>
      <div className="parent container equal">
        <div
          className="item1"
          style={{ display: "inline-block", width: "25%" }}
        >
          1
        </div>
        <div
          className="item2"
          style={{ display: "inline-block", width: "25%" }}
        >
          2
        </div>
        <div
          className="item3"
          style={{ display: "inline-block", width: "25%" }}
        >
          3
        </div>
        <div
          className="item4"
          style={{ display: "inline-block", width: "25%" }}
        >
          4
        </div>
      </div>
      <p> flex </p>
      <div className="parent container equal flex">
        <div className="item1" style={{ flex: 1 }}>
          1
        </div>
        <div className="item2" style={{ flex: 1 }}>
          2
        </div>
        <div className="item3" style={{ flex: 1 }}>
          3
        </div>
        <div className="item4" style={{ flex: 1 }}>
          4
        </div>
      </div>
      <p> grid </p>
      <div
        className="parent container equal grid"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        <div className="item1">1</div>
        <div className="item2">2</div>
        <div className="item3">3</div>
        <div className="item4">4</div>
      </div>
    </>
  );
};

export default EqualWidth;
