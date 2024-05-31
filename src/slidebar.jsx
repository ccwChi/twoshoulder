// import { useRef } from "react";
// import styled from "styled-component";

// export const SwipeToDelete = () => {
//   const rows = [{ title: "1" }, { title: "2" }, { title: "3" }, { title: "4" }];
//   return (
//     <Wrapper>
//       {rows.map((row) => (
        
//           <Item>
//             <p key={i}>{row.title}</p>
//             <DeleteButton>Delete</DeleteButton>
//           </Item>
        
//       ))}
//     </Wrapper>
//   );
// };

// export default SwipeToDelete;

// const Wrapper = styled.div`
//   width: 80%;
//   border: 1px solid;
//   overflow: hidden;
// `;

// const DeleteButton = styled.button`
//   background: red;
//   text-align: left;
//   border: none;
//   min-width: 55px;
//   cursor: point;
//   color: darkblue;
// `;

// const Item = ({ children }) => {
//   const ref = useRef();
//   let downX;

//   const onPointerMove = (e) => {
//     const newX = e.clientX;

//     if (newX - downX > -30) {
//       ref.current.style.transform = "translate(-55px)";
//       setTimeout(() => {
//         ref.current.style.transform = "translate(0px)";
//       }, 4000);
//     } else ref.current.style.transform = "translate(0px)";
//   };

//   const onPointerDown = (e) => {
//     downX = e.clientX;
//     ref.current.addEventlistener("pointermove", onPointerMove);
//   };

//   const onPointerUp = (e) => {
//     ref.current.removeEventlistener("pointermove", onPointerMove);
//   };

//   return (
//     <ItemWrapper
//       onPointerDown={onPointerDown}
//       ref={ref}
//       onPointerUp={onPointerUp}
//     >
//       {children}
//     </ItemWrapper>
//   );
// };

// const ItemWrapper = styled.div`
//   display: flex;
//   background-color: lightgray;
//   margin: 3px 0;
//   transition: transform 800ms;

//   p {
//     flex: 1 0 100%;
//   }
// `;
