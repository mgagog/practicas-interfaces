
import { useState } from "preact/hooks";

export default function CreateContactForm() {
  const [formData, setFormData] = useState({
    name: {
      field: "name",
      value: "",
      error: "",
    },
    lastName: {
      field: "lastName",
      value: "",
      error: "",
    },
    email: {
      field: "email",
      value: "",
      error: "",
    },
    gender: {
      field: "gender",
      value: "",
      error: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateForm() {
    const newFormData = { ...formData };
    if (!newFormData.name.value) {
      newFormData.name.error = "Name is required";
    } else {
      newFormData.name.error = "";
    }

    if (!newFormData.lastName.value) {
      newFormData.lastName.error = "Last Name is required";
    } else {
      newFormData.lastName.error = "";
    }

    if (!newFormData.email.value) {
      newFormData.email.error = "Email is required";
    } else {
        newFormData.email.error = "";
    }

    if (!newFormData.gender.value) {
      newFormData.gender.error = "Gender is required";
    } else {
      newFormData.gender.error = "";
    }

    setFormData(newFormData);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    validateForm();
    if (Object.values(formData).every((field) => field.value)) {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.value,
          lastName: formData.lastName.value,
          email: formData.email.value,
          gender: formData.gender.value,
        }),
      }).then((response) => {
        if (response.ok) {
          alert("Contact created successfully");
          setIsSubmitting(false);
        } else {
          alert("Failed to create contact");
          setIsSubmitting(false);
        }
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class={"flex flex-row space w-full"}>
        <div class={"flex flex-col w-full"}>
          <label for="name">Name</label>
          <input
            class={"w-full"}
            type="text"
            id="name"
            name="name"
            onChange={(e) =>
              setFormData({
                ...formData,
                name: { ...formData.name, value: e.currentTarget.value },
              })}
          />
          {formData.name.error && (
            <p class={"text-red-500"}>{formData.name.error}</p>
          )}
        </div>
        <div class={"flex flex-col w-full"}>
          <label for="lastName">Last Name</label>
          <input
            class={"w-full"}
            type="text"
            id="lastName"
            name="lastName"
            onChange={(e) =>
              setFormData({
                ...formData,
                lastName: {
                  ...formData.lastName,
                  value: e.currentTarget.value,
                },
              })}
          />
          {formData.lastName.error && (
            <p class={"text-red-500"}>{formData.lastName.error}</p>
          )}
        </div>
      </div>
      <label for="email">Email</label>
      <input
        class={"w-full"}
        type="email"
        id="email"
        name="email"
        pattern={"[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{1,}$"}
        title={"El formato del mail debe ser correcto"}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: { ...formData.email, value: e.currentTarget.value },
          })}
      />
      {formData.email.error && (
        <p class={"text-red-500"}>{formData.email.error}</p>
      )}
      <label for="gender">Gender</label>
      <select
        class={"w-full"}
        id="gender"
        name="gender"
        onChange={(e) =>
          setFormData({
            ...formData,
            gender: { ...formData.gender, value: e.currentTarget.value },
          })}
      >
        <option value={""}>
          Select a gender
        </option>
        <option value={"Male"}>
          Male
        </option>
        <option value={"Female"}>
          Female
        </option>
        <option value={"none"}>
          I prefer not to answer
        </option>
        <option value={"Genderqueer"}>
          Genderqueer
        </option>
        <option value={"Other"}>
          Other
        </option>
      </select>
      {formData.gender.error && (
        <p class={"text-red-500"}>{formData.gender.error}</p>
      )}
      <button class={"w-full"} type="submit">
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}