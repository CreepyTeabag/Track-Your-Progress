import Button from "../../ui/Button";
import ModalHeading from "../../ui/ModalHeading";
import { useForm } from "react-hook-form";

import style from "./NewItemModal.module.css";
import inputStyle from "../../ui/Input.module.css";

function NewItemModal({ onCloseModal }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log("onSubmit", data);
  }

  function onError(errors) {
    console.error(errors);
  }

  return (
    <div className={style.wrapper}>
      <ModalHeading>Creating new item</ModalHeading>

      <form className={style.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <label className={style.label}>
          Name
          <input
            type="text"
            placeholder="Name"
            id="name"
            className={inputStyle.input}
            {...register("name", { required: "This field is required" })}
          />
          {errors.name?.message && (
            <p className={style.error}>{errors.name.message}</p>
          )}
        </label>
        <label className={style.label}>
          Size
          <input
            type="number"
            step="0.01"
            placeholder="Size"
            id="size"
            className={inputStyle.input}
            {...register("size", {
              required: "This field is required",
              min: {
                value: 0.01,
                message: "Size cannot be less than 0.01",
              },
            })}
          />
          {errors.size?.message && (
            <p className={style.error}>{errors.size.message}</p>
          )}
        </label>
        <label className={style.label}>
          Type
          <input
            type="text"
            placeholder="Type (book, course, etc.)"
            id="type"
            className={inputStyle.input}
            {...register("type", { required: "This field is required" })}
          />
          {errors.type?.message && (
            <p className={style.error}>{errors.type.message}</p>
          )}
        </label>
        <label className={style.label}>
          Counter word
          <input
            type="text"
            placeholder="Counter word (page, lesson, etc.)"
            id="counterWord"
            className={inputStyle.input}
            {...register("counterWord", { required: "This field is required" })}
          />
          {errors.counterWord?.message && (
            <p className={style.error}>{errors.counterWord.message}</p>
          )}
        </label>

        <label className={style.label}>
          Info
          <input
            type="text"
            placeholder="Any additional info"
            id="info"
            className={inputStyle.input}
          />
          {errors.info?.message && (
            <p className={style.error}>{errors.info.message}</p>
          )}
        </label>

        <Button disabled={false}>Create</Button>
      </form>
    </div>
  );
}

export default NewItemModal;
