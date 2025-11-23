import React from "react";
import Lostitem from "./Lostitem";

const List = () => {
  return (
    <>
      <div>
        <h3>Items are Found</h3>
        <div className="Card-body-body">
        {Lostitem.map((item) => {
          return (
              <div className="card" style={{ width: "18rem" }}>
                {/* <h4>{item.id}</h4> */}
                <img src={item.img} className="card-img-top" alt="Example" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {item.desc}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
          );
        })}
            </div>
      </div>
    </>
  );
};

export default List;
