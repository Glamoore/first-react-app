import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PeopleContext } from "./../contexts/person.context";
import { Label } from "@mui/icons-material";
import styled from "styled-components";

export default function PersonForm() {
  const Label = styled.label`
    margin: 0.5em;
    color: blue;
    font-weight: bold;
  `;

  const ButtonStyle = styled.button`
    margin-left: 0.5em;
    font-size: 1rem;
    color: blue;
    font-weight: bold;
  `;

  const FormItem = styled.section`
    max-width: 30em;
    border: 1px solid black;
    margin: 1em;
    padding: 0.25em;
  `;

  const Wrapper = styled.section`
    padding-left: 0.5em;
    background: lightgrey;
    font-size: 1rem;
    max-width: 25em;
    margin-left: 0.5em;
    border: 1px solid black;
    margin-bottom: 1em;
  `;

  let navigate = useNavigate();
  const { addPerson } = useContext(PeopleContext);

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addPerson(data);
    reset();
    navigate("/");
  };

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <FormItem>
          <div>
            <Label>Name: </Label>
            <input {...register("name", { required: true })} />
          </div>
        </FormItem>

        <FormItem>
          <div>
            <Label>Gender: </Label>
            <select {...register("gender", { required: true })}>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </FormItem>

        <FormItem>
          <div>
            <Label>Email address: </Label>
            <input type="email" {...register("email", { required: true })} />
          </div>
        </FormItem>
      </Wrapper>

      {/* errors will return when field validation fails  */}
      {errors.name && <span>This field is required</span>}

      <ButtonStyle type="submit">Submit</ButtonStyle>
    </form>
  );
}
