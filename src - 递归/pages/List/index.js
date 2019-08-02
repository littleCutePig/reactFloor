import React from "react";

const List = props => (
  <ul>
    {props.data.map(item => (
      <li key={item.dimensionvalue}>
        <h3 onClick={() => props.isOpen(item.dimensionvalue)}>
        {item.childdimensions.length?'*':null}{item.dimensionname}
        </h3>
        {item.childdimensions.length && item.checked ? (
          <List isOpen={props.isOpen} data={item.childdimensions} />
        ) : null}
      </li>
    ))}
  </ul>
);

export default List;
