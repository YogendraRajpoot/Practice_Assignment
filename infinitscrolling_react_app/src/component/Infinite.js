import React, { useEffect, useState } from "react";
// let initPage = 1;
export const Infinite = () => {
  console.log("4");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=25`
    )
      .then((res) => res.json())
      .then((res) => {
        setData([...data, ...res]);
        console.log("14 data-page", data, page);
      });
  };
  useEffect(() => {
    console.log("called");
    // fetch(
    //   `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=25`
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setData([...data, ...res]);
    //     console.log("14 data-page", data, page);
    //   });
    fetchData();
    // return () => {
    //   fetchData();
    // };
  }, [page]);

  //*******************************For changing page or add 1 to page*****************************************
  const scrollToEnd = () => {
    setPage(1 + page);
  };

  //**************************For Scrolling **********************************************
  window.onscroll = function () {
    console.log("scroll");
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };
  console.log("39", data, page);
  return (
    <>
      <div
        style={{
          position: "fixed",
          marginTop: "-5%",
          marginRight: "auto",
          marginLeft: "auto",
          width: "100%",
          backgroundColor: "black",
          color: "coral",
        }}
      >
        <h1>Infinite Scroll</h1>
      </div>

      <div style={{ width: "50%", margin: "auto",marginTop:"5%" ,position:"inherit"}}>
        {data.length > 0 &&
          data.map((value) => {
            return (
              <div
                key={value.id}
                style={{
                  border: "3px solid red",
                  placeItems: "center",
                  padding: "2%",
                }}
              >
                <h1>Comment :- ${value.name}</h1>
                <h2>Email :- ${value.email}</h2>
                <h4>Message :- ${value.body}</h4>
              </div>
            );
          })}
      </div>
    </>
  );
};
