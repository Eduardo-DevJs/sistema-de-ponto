import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

interface TimeProps {
  time: string;
}

export default function Home() {
  const [dateTime, setDateTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
    date: "",
  });

  const [date, setDate] = useState("");
  const [hours, setHours] = useState<TimeProps[]>([]);

  const addPoint = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const newPoint = `${hours}:${minutes} h`;

    setHours((prevPoints) => [...prevPoints, { time: newPoint }]);
  };

  const getLastPoint = (): string => {
    if (hours.length > 0) {
      return hours[hours.length - 1].time;
    }
    return "";
  };

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      setDateTime((prevState) => ({
        ...prevState,
        hours,
        minutes,
        seconds,
      }));
    }
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    function getDateCurrent() {
      const now = new Date();
      const day = String(now.getDay()).padStart(2, "0");
      const month = now.toLocaleString("pt-BR", { month: "long" });
      const year = now.getFullYear();

      setDate(`${day} de ${month} de ${year}`);
    }

    getDateCurrent();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-5 w-96">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-slate-800 text-white flex items-center justify-center p-5 text-xl font-bold">
              EL
            </div>
            <h2 className="font-bold uppercase">Eduardo Liria</h2>
          </div>

          <div className="flex gap-4">
            <div className="h-10 w-px bg-black"></div>
            <button className="font-bold underline">Sair</button>
          </div>
        </header>
        <div className="mt-5">
          <div>
            <h1 className="text-2xl mb-1">Registro</h1>
            <div className="h-px bg-slate-200"></div>
          </div>

          <div className=" flex items-center justify-between mt-5">
            <div className="flex flex-col justify-center items-center h-36 w-36 rounded-full border-4 border-slate-700">
              <span>Último Registro</span>
              <h2 className="font-bold text-xl">{getLastPoint()}</h2>
              <span className="uppercase">De junho</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="font-semibold">{date}</span>
              <h2 className="font-semibold text-3xl">
                {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
              </h2>
              <button
                onClick={addPoint}
                className="uppercase hover:bg-sky-600 transition-colors rounded-full px-8 py-1 bg-sky-700 text-white"
              >
                Bater Ponto
              </button>
            </div>
          </div>

          <h2 className="uppercase text-sky-600 font-semibold mt-5 text-center">
            ùltimos Registro
          </h2>

          <ul className="mt-3 space-y-2">
            {hours.map((hour, index) => (
              <li
                className="flex items-center justify-between font-semibold text-xl"
                key={index}
              >
                <div className="flex items-center gap-2">
                  <FaClock size={15} />
                  {hour.time}
                </div>
                <div>{new Date().toLocaleDateString()}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
