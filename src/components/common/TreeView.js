import React, { useState } from "react";

function TreeView(props) {
  const { childrenKey, detailsKey, hierarchy, nodeRenderer, ...rest } = props;
  const [dropDown, setDropDown] = useState(true);
  return (
    <div style={{ paddingLeft: "20px" }}>
      {nodeRenderer(hierarchy[detailsKey])}
      <div style={{ display: dropDown ? "block" : "none" }} onClick={() => setDropDown(!dropDown)}>
        {Object.values(hierarchy[childrenKey]).map((e) => {
          if (e.hasOwnProperty(childrenKey)) {
            return TreeView({ childrenKey, detailsKey, hierarchy: e, nodeRenderer });
          } else {
            return nodeRenderer(e[detailsKey]);
          }
        })}
      </div>
    </div>
  );
};

export default TreeView;