function MyFunBackground() {
    return (
      <div className="background-wrapper">
        <div className="squares">
          <Square speed="12s" leftPlace="10%" size={20} delay="2s" />
          <Square speed="8s" leftPlace="25%" size={80} delay="0" />
          <Square speed="18s" leftPlace="40%" size={60} delay="0" />
          <Square speed="8s" leftPlace="65%" size={20} delay="0" />
          <Square speed="8s" leftPlace="70%" size={20} delay="4s" />
        </div>
        <div className="circles">
          <Circle speed="8s" leftPlace="10%" size={20} delay="0" />
          <Circle speed="8s" leftPlace="45%" size={80} delay="12s" />
          <Circle speed="8s" leftPlace="60%" size={50} delay="18s" />
          <Circle speed="8s" leftPlace="90%" size={50} delay="4s" />
          <Circle speed="8s" leftPlace="90%" size={40} delay="1s" />
        </div>
        <div className="triangles">
          <Triangle speed="8s" leftPlace="25%" size={30} delay="12s" />
          <Triangle speed="8s" leftPlace="30%" size={40} delay="18s" />
          <Triangle speed="8s" leftPlace="45%" size={20} delay="0s" />
          <Triangle speed="8s" leftPlace="70%" size={40} delay="1s" />
          <Triangle speed="8s" leftPlace="80%" size={30} delay="4s" />
        </div>
      </div>
    );
  }
  
  function Square({ speed, leftPlace, size, delay }) {
    return (
      <div
        class="square"
        style={{
          animationDuration: speed,
          animationDelay: delay,
          left: leftPlace,
          width: size,
          height: size,
          top: -1 * size,
        }}
      ></div>
    );
  }
  
  function Circle({ speed, leftPlace, size, delay }) {
    return (
      <div
        class="circle"
        style={{
          animationDuration: speed,
          animationDelay: delay,
          left: leftPlace,
          width: size,
          height: size,
          top: -1 * size,
        }}
      ></div>
    );
  }
  
  function Triangle({ speed, leftPlace, size, delay }) {
    return (
      <div
        class="triangle"
        style={{
          animationDuration: speed,
          animationDelay: delay,
          left: leftPlace,
          borderBottomWidth: size,
          borderLeftWidth: size / 2,
          borderRightWidth: size / 2,
          top: -1 * size,
        }}
      ></div>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to Tana's Game Page</h1>
        <MyFunBackground />
      </div>
    );
  }
  