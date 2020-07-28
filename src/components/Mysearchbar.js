import { useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/core";

export default function Mysearchbar() {

  const { handleSubmit, formState } = useForm();
  const [value, setValue] = useState("");
  const handleChange = event => setValue(event.target.value);

  function onSubmit(value) {
    setTimeout(() => {
      alert(JSON.stringify(value, null, 2));
    }, 1000);
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Type anything you want to search"
        size="sm"
      />
      <Button
        mt={4}
        variantColor="teal"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
      </form>
    </>
  );
}
