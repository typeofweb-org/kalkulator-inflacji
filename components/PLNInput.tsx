import { forwardRef } from "react";

export const PLNInput = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"]
>((props, ref) => {
  return (
    <span className="relative inline-block w-full">
      <input
        type="number"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
        min={0}
        {...props}
        ref={ref}
      />
      <span className="text-white bg-gray-300 rounded-md px-1 absolute top-1/2 -translate-y-1/2 touch-none select-none right-[3px]">
        PLN
      </span>
    </span>
  );
});
PLNInput.displayName = "PLNInput";
