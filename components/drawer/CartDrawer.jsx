import React from "react";
import DrawerHeader from "../DrawerHeader";
import { Trash } from "lucide-react";

const cartItems = [
  {
    id: 1,
    title: "Course 1",
    price: 100,
  },
  {
    id: 2,
    title: "Course 2",
    price: 200,
  },
  {
    id: 3,
    title: "Course 3",
    price: 300,
  },
  {
    id: 4,
    title: "Course 4",
    price: 400,
  },
  {
    id: 5,
    title: "Course 5",
    price: 500,
  },
];

const CartDrawer = ({ setIsOpenCartDrawer }) => {
  return (
    <div>
      <DrawerHeader title="Your Cart" setIsOpen={setIsOpenCartDrawer} />
      <div>
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className={`${
              cartItems.length - 1 === index
                ? "border-b-0"
                : "border-b border-gray-200"
            } flex items-center justify-between p-4`}
          >
            <div className="flex items-center gap-2">
              <div className="size-16 bg-gray-200 rounded-full"></div>
              <div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
            </div>
            <div>
              <button className="text-primary">
                <Trash strokeWidth={1} className="size-5 hover:text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartDrawer;
