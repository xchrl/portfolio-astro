import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import type { FormEvent } from "react";

export default function ContactForm() {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sendMail = emailjs.sendForm(
      import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
      import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
      e.target as HTMLFormElement,
      { publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY }
    );

    toast.promise(sendMail, {
      loading: "sending form...",
      success: (data: EmailJSResponseStatus) => {
        console.log("Success!");
        return {
          message: "form sent successfully",
          description: "thanks for contacting me!",
        };
      },
      error: (error: EmailJSResponseStatus) => {
        console.error("Failed to send form: ", error.text);
        return {
          message: "an error occured",
          description: "check the browser console for more details",
        };
      },
      closeButton: true,
      className: "",
    });
  };

  return (
    <>
      <div>
        <h2>contact form</h2>
        <h5 className="text-muted-foreground">
          * fields in <span className="text-red-400">red</span> are required
        </h5>
      </div>
      <form
        onSubmit={sendEmail}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <Input
          type="text"
          id="text"
          name="name"
          placeholder="name/username"
          className="placeholder:font-bold"
        />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          className="placeholder:text-red-400 placeholder:font-bold"
          required
        />
        <Textarea
          name="message"
          placeholder="Message"
          className="sm:col-span-2 placeholder:text-red-400 placeholder:font-bold"
          required
        />
        <Button variant="outline" type="submit" className="sm:col-span-2">
          Submit
        </Button>
      </form>
    </>
  );
}
