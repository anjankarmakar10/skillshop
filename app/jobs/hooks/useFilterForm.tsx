import { useForm } from "react-hook-form";

const useFilterForm = () => {
  const form = useForm({
    defaultValues: {
      title: "",
      location: "",

      type: "ALL",
      experience: "ALL",
    },
  });
  return { form };
};
export default useFilterForm;
