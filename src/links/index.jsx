const Links = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 10,
        left: 10,
        padding: 10,
        zIndex: 10,
        display: "flex",
        width: 200,
        flexDirection: "column",
        background: "white",
      }}
    >
      <a href="#horizontal">水平居中</a>
      <a href="#vertical">垂直居中</a>
      <a href="#horizontal-vertical">水平垂直居中</a>
      <a href="#two-columns">两列</a>
      <a href="#three-columns">三列</a>
      <a href="#equal-width">等宽</a>
    </div>
  );
};

export default Links;
