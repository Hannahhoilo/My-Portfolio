import bubbleImg from "../../assets/bubble.webp";
import fishOrange from "../../assets/fish-orange.webp";
import fishBlue from "../../assets/fish-blue.webp";

// Hver boble får egen størrelse, posisjon, fart og forsinkelse,
// slik at de ikke beveger seg i takt
const bubbles = [
  { size: 30, left: 5, duration: 14, delay: 0 },
  { size: 50, left: 15, duration: 18, delay: 4 },
  { size: 20, left: 25, duration: 11, delay: 2 },
  { size: 70, left: 38, duration: 22, delay: 7 },
  { size: 35, left: 50, duration: 15, delay: 1 },
  { size: 25, left: 62, duration: 12, delay: 6 },
  { size: 60, left: 72, duration: 20, delay: 3 },
  { size: 40, left: 83, duration: 16, delay: 9 },
  { size: 22, left: 93, duration: 13, delay: 5 },
];

// direction: "right" svømmer fra venstre mot høyre, "left" motsatt vei
const fishes = [
  { img: fishOrange, size: 60, top: 15, duration: 45, delay: 0, direction: "right" },
  { img: fishOrange, size: 45, top: 55, duration: 35, delay: 12, direction: "right" },
  { img: fishBlue, size: 80, top: 35, duration: 50, delay: 5, direction: "left" },
  { img: fishBlue, size: 55, top: 75, duration: 40, delay: 20, direction: "left" },
];

const OceanBackground = () => {
  return (
    // aria-hidden: skjermlesere hopper over dekorasjonen
    // fixed inset-0: dekker hele skjermen. pointer-events-none: man kan klikke "gjennom" fiskene
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-linear-to-r from-ocean-dark to-ocean-light"
      aria-hidden="true"
    >
      {bubbles.map((b, index) => (
        <img
          key={"bubble" + index}
          src={bubbleImg}
          alt=""
          className="absolute -bottom-24 opacity-70 animate-bubble-rise motion-reduce:hidden"
          style={{
            width: b.size,
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `-${b.delay}s`,
          }}
        />
      ))}

      {fishes.map((f, index) => (
        <img
          key={"fish" + index}
          src={f.img}
          alt=""
          className={`absolute left-0 motion-reduce:hidden ${
            f.direction === "right" ? "animate-swim-right" : "animate-swim-left"
          }`}
          style={{
            width: f.size,
            top: `${f.top}%`,
            animationDuration: `${f.duration}s`,
            animationDelay: `-${f.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default OceanBackground;
