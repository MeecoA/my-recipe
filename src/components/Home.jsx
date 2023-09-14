import Tooltip from "@mui/material/Tooltip";

const Home = () => {
  return (
    <div className="typewriter">
      <div>
        <Tooltip title="credits to the owner of the logo hehe.." placement="top">
          <img id="mainLogo" src="https://cdn-icons-png.flaticon.com/512/3448/3448609.png" alt="" />
        </Tooltip>
      </div>
      <h1>Welcome to ReciPeeks</h1>
      <h2>
        Taste
        <Tooltip title="WTH? Where's The Food?">
          <span style={{ color: "orange" }}>food</span>
        </Tooltip>
        around the
        <Tooltip title="Site developed by: Meeco Arcilla" placement="right">
          <span style={{ color: "blue" }}> Globe</span>.
        </Tooltip>
      </h2>
    </div>
  );
};

export default Home;
