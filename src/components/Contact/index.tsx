import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import Title from "../Title";
import * as S from "./style";

const newMessageFormValidationSchema = z.
object({
  name:z.string().min(3, "Informe seu nome"),
  email:z.string().email("Digite um email válido").min(5),
  message:z.string().min(5, "Informe aqui sua mensagem")
})

export type newMessageFormValidation = z.infer <typeof newMessageFormValidationSchema>;

export const Contact = () => {
  const {register, handleSubmit, reset,formState: { errors },} = useForm<newMessageFormValidation>({
    resolver:zodResolver(newMessageFormValidationSchema),
    defaultValues:{
      name:"",
      email:"",
      message:""
    }
  });

  const onSendMessage = (data:newMessageFormValidation) => {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };

    emailjs
      .send(
        "service_1n39rsp",
        "template_v9h6wc2",
        templateParams,
        "zr68sPSbyMI7BM5mt"
      )
      .then(() => {
        alert("Mensagem enviada com sucesso");
        reset();
      })
      .catch((error) => {
        alert(`Mensagem não enviada: ${error.message}`);
      });
  };

  return (
    <S.Section id="Contact">
      <Title text="Contato" />
      <S.Container>
        <form onSubmit={handleSubmit(onSendMessage)}>
          <input
            type="text"
            placeholder="name"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <input
            type="email"
            placeholder="email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <textarea
            placeholder="Escreva sua mensagem aqui"
            {...register("message")}
          />
          {errors.message && <span>{errors.message.message}</span>}
          <button type="submit">enviar</button>
        </form>
      </S.Container>
    </S.Section>
  );
};


