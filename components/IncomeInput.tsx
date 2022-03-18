import { useState } from "react";
import { formatMoney, getInflationColor } from "../utils/format";

export const IncomeInput = ({ inflation }: { inflation: number }) => {
  const [value, setValue] = useState(5000);

  return (
    <p className="text-lg tabular-nums">
      Jeśli miesięcznie zarabiasz…{" "}
      {(value.toString() + " zł").padEnd("60000 zł".length, " ")}
      <label>
        <input
          aria-label="Twoje zarobki w złotówkach"
          type="range"
          className="block w-full"
          min={1000}
          step={500}
          max={60000}
          value={value}
          onChange={(e) => setValue(e.target.valueAsNumber)}
        />
      </label>
      to w tym roku musisz dostać podwyżkę w wysokości przynajmniej{" "}
      <strong
        className={`block font-bold text-2xl translate-y-0.5 ${getInflationColor(
          inflation
        )}`}
      >
        {formatMoney((inflation * value) / 100)}
      </strong>{" "}
      aby nie tracić.
    </p>
  );
};
