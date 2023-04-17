import React, { useState } from "react";

function TemperatureConverter(props) {
  const [celcius, setCelcius] = useState("");
  const [fah, setFah] = useState("");

  const handleCelcius = (event) => {
    setCelcius(event.target.value);
    event.target.value == ""
      ? setFah("")
      : setFah(Math.floor(parseInt(event.target.value) * 1.8 + 32));
  };
  const handleFah = (event) => {
    setFah(event.target.value);
    event.target.value == ""
      ? setCelcius("")
      : setCelcius(Math.floor((parseInt(event.target.value) - 32) / 1.8));
  };
  return (
    <div>
      <h4>
        [Thực hành] 6. Sử dụng react hook tạo ứng dụng chuyển đổi nhiệt độ
      </h4>
      <label>
        Celcius:
        <input type="text" value={celcius} onChange={handleCelcius} />
        °C
      </label>
      <br></br>
      <label>
        Fah:
        <input type="text" value={fah} onChange={handleFah} />
        °F
      </label>
    </div>
  );
}

export default TemperatureConverter;
