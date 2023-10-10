const hcComponent = () => {
  return (
    <>
      <p id="horizontal">
        parent:text-align:center + children: display inline-block{" "}
      </p>
      <div className="parent text-align-center">
        <div className="children inline-block" />
      </div>
      <p>p children: margin:0 auto+ </p>
      <div className="parent">
        <div className="children" style={{ margin: "0 auto" }} />
      </div>
      <p>p children:left: 50%;margin-left:-100px </p>
      <div className="parent">
        <div
          className="children"
          style={{ position: "relative", left: "50%", marginLeft: "-100px" }}
        />
      </div>
      <p>p children:left: 0;top:0;margin:auto </p>
      <div className="parent relative">
        <div className="children" style={{ left: 0, top: 0, margin: "auto" }} />
      </div>
      <p>p children:left: 50%;transform:translateX(-50%)</p>
      <div className="parent relative">
        <div
          className="children"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>
      <p>flex</p>
      <div className="parent flex" style={{ justifyContent: "center" }}>
        <div className="children" />
      </div>
      <p>grid justify-items</p>
      <div className="parent grid" style={{ justifyItems: "center" }}>
        <div className="children" />
      </div>
      <p>grid justify-content</p>
      <div className="parent grid" style={{ justifyContent: "center" }}>
        <div className="children" />
      </div>
    </>
  );
};

export default hcComponent;
