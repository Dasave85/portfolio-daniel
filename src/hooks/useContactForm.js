import { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";

export const useContactForm = () => {
  const [toSend, setToSend] = useState({
    user: "",
    email: "",
    message: "",
    phone: "",
  });

  const resetForm = () => {
    setToSend({
      user: "",
      email: "",
      message: "",
      phone: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "OK!",
      text: "Mensaje enviado",
      icon: "success",
      timer: 2000,
    });
    send("contact_service", "contact_form", toSend, "fK6Xr0dK4K3Z1Vwdu")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        Swal.fire({
          title: "Error en servidor!",
          text: "El mensaje no se ha podido enviar, prueba mas tarde en...",
          icon: "error",
          footer: "dasave85@gmail.com",
          showCloseButton: true,
          showConfirmButton: false,
        });
      });
    resetForm();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return {
    toSend,
    onSubmit,
    handleChange,
  };
};
