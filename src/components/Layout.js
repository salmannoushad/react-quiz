/* eslint-disable no-undef */
import React from "react";
import classes from "../styles/Layout.module.css";
import Nav from "./Nav";

// export default function Layout({ Children }) {
//   return (
// //     <>
// //       <Nav />
// //       <main className={classes.main}>
// //         <div className={classes.container}>{Children} hjfdghfjldh</div>
// //       </main>
// //     </>

// // import classes from "../styles/Layout.module.css";
// // import Nav from "./Nav";

//   );
// }
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
