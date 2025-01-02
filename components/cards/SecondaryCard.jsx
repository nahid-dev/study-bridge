import React from "react";

const SecondaryCard = ({ item, key }) => {
  return (
    <div key={key} className="flex flex-col items-center gap-4 p-10">
      <div className={`border ${item?.border} p-5 rounded-full`}>
        <div className={`${item.bg} p-4 rounded-full`}>
          <item.icon strokeWidth={1} className={`size-12 ${item?.color}`} />
        </div>
      </div>
      <h3 className="text-accent font-semibold text-xl">{item.title}</h3>
      <p className="capitalize text-center">{item.description}</p>
    </div>
  );
};

export default SecondaryCard;
