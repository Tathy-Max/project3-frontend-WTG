import { useContext, useState } from "react";
import { api } from "../../../api/api";

import { AuthContext } from "../../../contexts/authContext";
import { Card, Form } from "antd";

export function EditUser() {
  const { loggedInUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthday: "",
  });

  console.log(loggedInUser);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleUpdate(e) {
    e.preventDefault();
    delete form._id;
    try {
      await api.patch(`/user/update-user`, form);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Card>
        <h1>{loggedInUser.user.name}</h1>
        <p>{loggedInUser.user.email}</p>
        <p>{loggedInUser.user.birthday}</p>
      </Card>
      <Form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleForm}
        />

        <label>Birthday</label>
        <input
          type="date"
          name="birthday"
          value={form.birthday}
          onChange={handleForm}
        />
        <button onClick={handleUpdate}>Add Edition</button>
      </Form>
    </>
  );
}
