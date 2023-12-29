/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Controller } from "react-hook-form";

export const RTE = ({ name, control, label, defaultValue }) => {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1 ">{label}</label>}
      <Controller name={name || "content"} control={control}></Controller>
    </div>
  );
};
