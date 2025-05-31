"use client";
import Container from "@/components/Container";
import TextInputField from "@/components/forms/TextInputField";
import { Button } from "@/components/ui/button";
import { contactDetails } from "@/lib/options";
import { useFormik } from "formik";
import * as LucideIcons from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { object, string } from "yup";

const contactFormSchema = object({
  name: string().required("Name is required"),
  email: string().required("Email is required"),
  message: object().required("Message is required"),
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    queryKey: "contact",
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      toast.success("Your message has been sent successfully!");
      setIsSubmitting(true);
      // Here you can handle the form submission, e.g., send data to an API
    },
  });
  return (
    <div className="py-5">
      <Container>
        <div className="grid grid-cols-2 gap-10 pt-10">
          <div>
            <h2 className="text-4xl font-medium pb-10">Contact Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {contactDetails?.map((item) => (
                <div key={item.id} className="flex gap-5">
                  <div>
                    {React.createElement(
                      LucideIcons[
                        item.icon
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join("")
                      ] || LucideIcons.MapPin
                    )}
                  </div>
                  <div className="space-y-5">
                    <h2 className="text-lg font-medium leading-none">
                      {item.title}
                    </h2>
                    <div>
                      {item.details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-medium pb-10">Have A Question?</h2>
            {isSubmitting ? (
              <div className="p-5 rounded border border-green-600 bg-green-50 w-full">
                Your Message has been sent successfully!
              </div>
            ) : (
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-10"
              >
                <div>
                  <TextInputField
                    label="Name"
                    placeholder={"Enter your name"}
                    name="name"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <TextInputField
                    label="Email"
                    placeholder={"Enter your email"}
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Content"
                    className="w-full border p-5 rounded"
                    rows="5"
                  ></textarea>
                </div>
                <Button type="submit">Send</Button>
              </form>
            )}
          </div>
        </div>
      </Container>
      <div className="pt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036955463023!2d90.36556223343321!3d23.747049949817132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1748716218662!5m2!1sen!2sbd"
          width="600"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-[500px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
