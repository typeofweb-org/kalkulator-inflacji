import type { NextPage } from "next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { entries, fromEntries } from "../utils";
import {
  GUSCategories,
  calculateTotalInflationForWeights,
  defaultWeights_01_2022,
  WeightsRecord,
  gusCategoriesDetails,
} from "../questions";

const formSchema = yup
  .object({
    ...fromEntries(
      entries(GUSCategories).map(
        ([key]) => [key, yup.number().min(0).max(100).required()] as const
      )
    ),
  })
  .required();
type FormData = yup.InferType<typeof formSchema>;

const calculateTotalExpenses = (expenses: FormData) => {
  console.log(expenses);
  const expensesEntries = entries(expenses);
  return expensesEntries.reduce((acc, [, value]) => acc + value, 0);
};

const calculateTotalInflationForExpenses = (expenses: FormData) => {
  const expensesEntries = entries(expenses);
  const totalExpenses = calculateTotalExpenses(expenses);
  console.log(totalExpenses);
  const weights: WeightsRecord = fromEntries(
    expensesEntries.map(
      ([key, value]) => [key, (100 * value) / totalExpenses] as const
    )
  );
  return calculateTotalInflationForWeights(weights);
};

const Home: NextPage = () => {
  const { register, watch, formState } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: defaultWeights_01_2022,
  });

  return (
    <div className="mt-6 relative max-w-md mx-auto pb-48">
      <output className="fixed rounded-lg border px-4 py-3 shadow-lg position-near-center w-60 tabular-nums text-center">
        <span className="block">
          Twoje wydatki: {(calculateTotalExpenses(watch()) || 0).toFixed(2)}
           zł
        </span>
        <span className="block">
          Twoja inflacja:{" "}
          {(calculateTotalInflationForExpenses(watch()) || 0).toFixed(1)}%
        </span>
      </output>
      <form className="grid grid-cols-1 gap-6">
        <h2 className="text-2xl font-bold">Twoje miesięczne wydatki na:</h2>
        {entries(GUSCategories).map(([key, title]) => (
          <label key={key} className="block text-gray-700">
            <h3 className="mb-2">{title}</h3>
            {gusCategoriesDetails[key].length > 0 ? (
              <div className="text-sm mb-4 mt-2">
                W tym:{" "}
                {/* <span className="text-xs text-gray-600">
                  {gusCategoriesDetails[key].join(", ")}
                </span> */}
                <ul className="text-xs text-gray-600 columns-2 mt-1">
                  {gusCategoriesDetails[key].map((text) => (
                    <li key={text} className="list-item list-disc ml-3">
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              min={0}
              {...register(key, { valueAsNumber: true })}
            />
            <span role="alert" className="text-red-500 text-sm font-bold">
              {formState.errors[key]?.message}
            </span>
          </label>
        ))}
      </form>
    </div>
  );
};

export default Home;
