import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import type { FormEvent } from "react";

export default function ContactForm() {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        { publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          console.log("Success!");
        },
        (err) => {
          console.error("Failed to send form: ", err);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 intersect-once intersect:motion-preset-slide-right"
    >
      <Input type="text" id="text" name="name" placeholder="Full name" />
      <Input type="email" id="email" name="email" placeholder="Email" />
      <Textarea
        name="message"
        placeholder="Message"
        className="sm:col-span-2"
      />
      <Button variant="outline" type="submit" className="sm:col-span-2">
        Submit
      </Button>
    </form>
  );
}
