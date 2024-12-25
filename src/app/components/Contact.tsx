
"use client";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import "./Contact.css";
import { toast } from "@/hooks/use-toast"

export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'service_ahvfigp', 
                'template_c9biraf', 
                form.current, 
                '6IWDp1c7ryr9hLun7'
            )
            .then(
                (result) => {
                    // console.log('Email sent successfully:', result.text);
                    toast({
                        description: "Your Message has been sent.",
                        className: "toast"
                      })

                })
            .catch(
                (error) => {
                    console.error('Email failed to send:', error);
                }
            );

            form.current.reset();
        } else {
            console.error('Form reference is null');
        }
    };

    return (
        <>
            <div>
                <p style={{fontSize: "1.3rem", padding: "10px 10px"}}>I’m probably busy figuring out life—or debugging it—but hey, why not drop me a message? Let’s turn a casual conversation into something exciting (or at least mildly entertaining)!👇🏻</p>
            </div>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="name-email">
                    <div className="name">
                        <label>
                            Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <input type="text" name="Name" required />
                    </div>
                    <div className="email">
                        <label>
                            Email <span style={{ color: "red" }}>*</span>
                        </label>
                        <input type="email" name="Email" required />
                    </div>
                </div>
                <label>Message</label>
                <textarea name="message" required />
                <div className="button">
                    <button type="submit">
                        <SendIcon style={{ marginRight: 5 }} /> Send
                    </button>
                </div>
            </form>
        </>
    );
}