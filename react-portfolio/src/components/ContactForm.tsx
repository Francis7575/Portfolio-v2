import React, { useState, useEffect, ChangeEvent, FormEvent, FocusEvent } from 'react';
import iconAt from '/images/icon-at-sign.png'
import iconEmail from '/images/icon-email.gif'
import emailjs from 'emailjs-com';

type FormData = {
    name: string;
    email: string;
    message: string;
}

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [successMessage, setSuccessMessage] = useState<string>('');

    useEffect(() => {
        emailjs.init('T1bCbVM4o9-_Jx2Ya');
    }, []);

    const validateForm = (): boolean => {
        let formErrors: FormErrors = {};
        let isValid = true;

        if (!formData.name) {
            isValid = false;
            formErrors.name = 'Name is required';
        }

        if (!formData.email) {
            isValid = false;
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            formErrors.email = 'Email address is invalid';
        }

        if (!formData.message) {
            isValid = false;
            formErrors.message = 'Message is required';
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        setSuccessMessage('');

        if (validateForm()) {
            emailjs.sendForm('service_6l6i6si', 'template_q7s8lqn', e.currentTarget)
                .then(() => {
                    setSuccessMessage('Form submitted successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                    setLoading(false);
                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 3000);
                })
                .catch((error) => {
                    console.error('FAILED...', error);
                    setLoading(false);

                });
        } else {
            setLoading(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleInputFocus = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        console.log(`Focus event on: ${name}`); // Debugging line
        setErrors(prevErrors => {
            const newErrors = { ...prevErrors };
            if (name === "name" || name === "email" || name === "message") {
                delete newErrors[name as keyof FormErrors];
            }
            return newErrors;
        });
    };

    return (
        <main className='md:flex md:flex-col md:items-center md:justify-center md:h-screen lg:ml-[10rem]'>
            <div className='flex flex-col mt-10 max-w-[500px] lg:max-w-[700px] px-8 mx-auto w-full'>
                <h2 className='font-bold text-[1.6rem] lg:text-[2rem]'>Let's
                    <span className='text-fuchsia ml-2'>Connect.</span>
                </h2>
                <form className='mt-8 w-full flex flex-col gap-4'
                    onSubmit={handleSubmit}>
                    <div className={`text-center text-fuchsia font-bold`}
                        style={{ display: loading ? 'block' : 'none' }}>
                        Loading...
                    </div>
                    <div className='flex flex-col gap-2 relative'>
                        <input
                            className='py-1 pl-7 pr-3 text-[.9rem] lg:text-[1.1rem]'
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={handleInputFocus}
                            placeholder="Your name"
                        />
                        <img src={iconAt} alt="" className='absolute-position max-w-[1.1rem] lg:max-w-[1.2rem]' />
                        {errors.name && <span className="text-error text-[.85rem] lg:text-[1rem]">{errors.name}</span>}
                    </div>
                    <div className='flex flex-col gap-2 relative'>
                        <input
                            className='py-1 pl-7 pr-3 text-[.9rem] lg:text-[1.1rem]'
                            type="text"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleInputFocus}
                            placeholder="Your email"
                        />
                        <img src={iconEmail} alt="" className='absolute-position max-w-[1.1rem] lg:max-w-[1.2rem]' />
                        {errors.email && <span className="text-error text-[.85rem] lg:text-[1rem]">{errors.email}</span>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <textarea
                            className='py-1 pl-4 pr-3 text-[.9rem] lg:text-[1.1rem]'
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={handleInputFocus}
                            placeholder="What's on your mind?"
                        />
                        {errors.message && <span className="text-error text-[.85rem] lg:text-[1rem]">{errors.message}</span>}
                    </div>
                    <div className='flex justify-end mr-4 '>
                        <button type="submit" disabled={loading} className='bg-light-green text-dark-blue text-[.95rem] lg:text-[1.2rem] px-4 py-1 rounded-[.625rem]'>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                    {successMessage && <span className="text-center text-fuchsia">{successMessage}</span>}
                </form>
            </div>
        </main>
    );
};

export default ContactForm;
