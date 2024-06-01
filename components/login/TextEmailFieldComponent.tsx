import React from "react";
import {Input} from "@nextui-org/react";

export default function TextEmailFieldComponent() {
  return (
    <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      placeholder="Anonymous777@gmail.com"
      defaultValue=""
      onClear={() => console.log("input cleared")}
      className="w-full INPUT"
    />
  );
}