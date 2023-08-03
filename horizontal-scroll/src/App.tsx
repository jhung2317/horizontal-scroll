import { animated, useSpring } from "react-spring";
import './App.css'

const movies = [
  "/images/img-1.jpeg",
  "/images/img-2.jpg",
  "/images/img-3.jpg",
  "/images/img-4.jpg",
  "/images/img-5.jpg",
  "/images/img-6.jpg",
  "/images/img-7.jpg",
  "/images/img-8.jpg",
  "/images/img-9.jpg",
];

const App = () => {
  const style = useSpring({
    from: {
      transform: "perspective(500px) rotateY(0deg)"
    },
    transform: "perspective(500px) rotateY(25deg)"
  });
  
  return (
    <>
      <div className="container">
        {movies.map(src => (
          <animated.div
            key={src}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${src})`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default App
