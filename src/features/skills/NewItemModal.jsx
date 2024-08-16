import Button from "../../ui/Button";
import Input from "../../ui/Input";
import ModalHeading from "../../ui/ModalHeading";

import style from "./NewItemModal.module.css";

function NewItemModal({ onCloseModal }) {
  const handleSubmit = () => {};

  return (
    <div className={style.wrapper}>
      <ModalHeading>Creating new item</ModalHeading>

      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label className={style.label}>
          Name
          <Input
            type="text"
            placeholder="Name"
            value={""}
            disabled={false}
            name="name"
            onChange={(e) => {
              console.log(e);
            }}
          />
        </label>
        <label className={style.label}>
          Size
          <Input
            type="number"
            step="0.01"
            placeholder="Size"
            value={""}
            disabled={false}
            name="size"
            onChange={(e) => {
              if (
                !isNaN(e.target.value) ||
                e.target.value === "," ||
                e.target.value === "."
              ) {
                //   setNewProgress(e.target.value);
                //   setError("");
              }
            }}
          />
        </label>
        <label className={style.label}>
          Type
          <Input
            type="text"
            placeholder="Type (book, course, etc.)"
            value={""}
            disabled={false}
            name="type"
            onChange={(e) => {
              console.log(e);
            }}
          />
        </label>
        <label className={style.label}>
          Counter word
          <Input
            type="text"
            placeholder="Counter word (page, lesson, etc.)"
            value={""}
            disabled={false}
            name="counterWord"
            onChange={(e) => {
              console.log(e);
            }}
          />
        </label>

        <label className={style.label}>
          Info
          <Input
            type="text"
            placeholder="Any additional info"
            value={""}
            disabled={false}
            name="info"
            onChange={(e) => {
              console.log(e);
            }}
          />
        </label>

        <Button disabled={false}>Create</Button>
      </form>
      {/* {error && <p className={style.error}>ERROR</p>} */}
    </div>
  );
}

export default NewItemModal;
