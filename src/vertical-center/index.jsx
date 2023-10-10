const VCComponent = () => {
  return (
    <>
      <p id="vertical">
        children: display inline-block ;vertical-align:middle{" "}
      </p>
      <div className="parent" style={{ lineHeight: "200px" }}>
        <div
          className="children"
          style={{
            width: "100%",
            height: 50,
            display: "inline-block",
            verticalAlign: "middle",
            background: "pink",
          }}
        />
      </div>

      <p>children: absolute;top:50%;transform:translateY(-50%)</p>
      <div className="parent" style={{ position: "relative" }}>
        <div
          className="children"
          style={{
            width: "100%",
            background: "pink",
            height: 50,
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </div>
      <p>children: absolute;top:50%;margin-top:-25 px</p>
      <div className="parent" style={{ position: "relative" }}>
        <div
          className="children"
          style={{
            width: "100%",
            background: "pink",
            height: 50,
            position: "absolute",
            top: "50%",
            marginTop: "-25px",
          }}
        />
      </div>

      <p>parent: flex</p>
      <div className="parent flex" style={{ alignItems: "center" }}>
        <div
          className="children"
          style={{
            width: "100%",
            background: "pink",
            height: 50,
          }}
        />
      </div>
      <p>parent: grid</p>
      <div
        className="parent grid"
        style={
          {
            // alignItems: "center",
            // alignContent: "center",
          }
        }
      >
        <div
          className="children"
          style={{
            width: "100%",
            background: "pink",
            height: 50,
            // margin:'auto',
            alignSelf: "center",
          }}
        />
      </div>
    </>
  );
};

export default VCComponent;
