"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Subscribe = ({ notitle = false }: { notitle?: boolean }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [isPending, startTransition] = React.useTransition();
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState({ type: "", text: "" });

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = async () => {
    if (!isValidEmail(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setMessage({ type: "", text: "" });

    startTransition(async () => {
      try {
        const obj = { email, labels: [] };
        const res = await fetch(`${API_URL}members/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });

        if (!res.ok) {
          throw new Error("Failed to subscribe. Please try again.");
        }

        const data = await res.json();
        console.log(data);
        setMessage({ type: "success", text: "Subscribed successfully!" });
        setEmail("");
      } catch (error: any) {
        console.error(error);
        setMessage({ type: "error", text: error.message });
      }
    });
  };

  return (
    <div
      className={`flex  flex-col  rounded-xl  ${
        !notitle ? "bg-white gap-4 py-4 px-8 border border-red-500 items-center" : "gap-2"
      }`}
    >
      {!notitle && <h2 className=" font-semibold">Subscribe to our newsletter</h2>}
      <Input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="bg-red1 text-gray-400 border-red-500"
        placeholder="Enter your email"
      />
      <Button disabled={isPending} onClick={handleSubscribe}>
        {isPending ? "Subscribing..." : "Subscribe"}
      </Button>
      {message.text && (
        <p className={`mt-2 text-sm ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
          {message.text}
        </p>
      )}
    </div>
  );
};

export default Subscribe;
