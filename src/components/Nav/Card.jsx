// import React from "https://esm.sh/react@18.3.1";
// import ReactDOM from "https://esm.sh/react-dom@18.3.1";

// import gsap from "https://esm.sh/gsap";
// import { useGSAP } from "https://esm.sh/@gsap/react?deps=react@18.3.1";

// const { useRef } = React;
// console.log(React.version);

// function Card() {
//   const container = useRef();
//   const circle = useRef();

//   useGSAP(() => {
//       // use selectors...
//       gsap.to(".box", { rotation: "+=360", duration: 3 });

//       // or refs...
//       gsap.to(circle.current, { rotation: "-=360", duration: 3 });
//     },
//     { scope: container }
//   ); // <-- scope for selector text (optional)

//   return (
//     <div className="App">
//       <div ref={container} className="container">
//         <div className="box gradient-blue">selector</div>
//         <div className="circle gradient-green" ref={circle}>
//           Ref
//         </div>
//       </div>
//       <div className="box gradient-blue">selector</div>
//     </div>
//   );
// }

// export default Card;
