const HVCComponent = () => {
  return (
    <>
      <p id="horizontal-vertical">
        parent:text-align:center; children: display inline-block
        ;vertical-align:middle{" "}
      </p>
      <div
        className="parent"
        style={{ lineHeight: "200px", textAlign: "center" }}
      >
        <div
          className="children"
          style={{
            width: 100,
            height: 50,
            display: "inline-block",
            verticalAlign: "middle",
            background: "pink",
          }}
        />
      </div>

      <p>children: absolute;top left:50%;transform:translate(-50%,-50%) </p>
      <div className="parent" style={{ position: "relative" }}>
        <div
          className="children"
          style={{
            width: 100,
            background: "pink",
            height: 50,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      </div>
      <p>children: absolute;top:50%;margin-top:-25 px;margin-left:-50px</p>
      <div className="parent" style={{ position: "relative" }}>
        <div
          className="children"
          style={{
            width: 100,
            background: "pink",
            height: 50,
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-25px",
            marginLeft: "-50px",
          }}
        />
      </div>

      <p>parent: flex</p>
      <div
        className="parent flex"
        style={
          {
            // alignItems: "center",
            // justifyContent: "center"
          }
        }
      >
        <div
          className="children"
          style={{
            width: 100,
            background: "pink",
            height: 50,
            margin: "auto",
          }}
        />
      </div>
      <p>parent: grid</p>
      <div
        className="parent grid"
        style={{
          /* 1 */
          alignItems: "center",
          justifyItems: "center",

          // placeItems:'center' 前两个的缩写
          /* 2 */
          // alignContent: "center",
          // justifyContent:'center'
          // placeContent:'center' 前两个的缩写
        }}
      >
        <div
          className="children"
          style={{
            width: 100,
            background: "pink",
            height: 50,
            /* 3 */
            // margin:'auto',

            /* 4 */
            // alignSelf: "center",
            // justifySelf:'center'
            // placeSelf:'center'
          }}
        />
      </div>
    </>
  );
};

export default HVCComponent;
