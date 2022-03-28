import React from "react";
import { ErrorListProps } from "@rjsf/core";

const ErrorList = ({ errors }: ErrorListProps) => (
  <div className="mt-1 p-8 border-2 border-error border-solid rounded-md">
    <div className="text-error">
      <ul className="list-disc">
        {errors.map((error, i: number) => {
          return (
            <li key={i}>{error.stack}</li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default ErrorList;
