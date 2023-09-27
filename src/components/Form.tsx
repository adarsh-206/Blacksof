import { TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';

interface FormData {
    fullName: string;
    country: string;
    email: string;
    contactNumber: string;
    requirements: string;
}

interface FormErrors {
    fullName: string;
    email: string;
    requirements: string;
}

export default function MyForm() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        country: '',
        email: '',
        contactNumber: '',
        requirements: '',
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({
        fullName: '',
        email: '',
        requirements: '',
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors: FormErrors = {
            fullName: '',
            email: '',
            requirements: '',
        };

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!formData.requirements.trim()) {
            newErrors.requirements = 'Tell us your requirements';
            isValid = false;
        }

        setFormErrors(newErrors);
        return isValid;
    };

    const isValidEmail = (email: string) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            setIsFormSubmitted(true);
            setTimeout(() => {
                setIsFormSubmitted(false);
            }, 2000);
            setFormData({
                fullName: '',
                country: '',
                email: '',
                contactNumber: '',
                requirements: '',
            });
        }
    };

    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined;

        if (isFormSubmitted) {
            timeout = setTimeout(() => {
                setIsFormSubmitted(false);
            }, 2000);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [isFormSubmitted]);

    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-300 p-5 rounded-lg">
            <form onSubmit={handleSubmit}>
                <div className='text-left mb-4'>
                    <p className='font-bold text-lg'>Fill out the form.</p>
                    <p className='text-sm'>Our team will touch base with you within 24 hours.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <TextField
                            fullWidth
                            id="standard-basic1"
                            label="Full Name*"
                            variant="standard"
                            sx={{ mb: 2 }}
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        {formErrors.fullName && <p className="text-red-500 text-left text-sm">{formErrors.fullName}</p>}
                        <TextField
                            fullWidth
                            id="standard-basic2"
                            label="Country"
                            variant="standard"
                            sx={{ mb: 2 }}
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            id="standard-basic3"
                            label="Email*"
                            variant="standard"
                            sx={{ mb: 2 }}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <p className="text-red-500 text-left text-sm">{formErrors.email}</p>}
                        <TextField
                            fullWidth
                            id="standard-basic4"
                            label="Contact Number"
                            variant="standard"
                            sx={{ mb: 2 }}
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <TextField
                    fullWidth
                    multiline
                    id="standard-textarea"
                    label="Tell us your requirements*"
                    variant="standard"
                    sx={{ mb: 3 }}
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                />
                {formErrors.requirements && <p className="text-red-500 text-left text-sm">{formErrors.requirements}</p>}
                <div className="text-center mt-4 flex items-center space-x-2">
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'slategray',
                                color: 'white',
                            },
                            '&.MuiButton-root': {
                                borderRadius: '9999px',
                                padding: '8px 16px',
                            },
                        }}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'slategray',
                                color: 'white',
                            },
                            '&.MuiButton-root': {
                                borderRadius: '50%',
                                padding: '7px 4px',
                            },
                        }}
                    >
                        <span className="text-lg">→</span>
                    </Button>
                </div>
                {isFormSubmitted && <p className="text-green-800 text-center mt-4">Thank you , we will get back to you soon!</p>}
            </form>
        </div>
    );
}