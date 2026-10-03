import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleRegistration = (data) => {
        const profileImg = data.photo[0];

        registerUser(data.email, data.password)
            .then(() => {
                const formData = new FormData();
                formData.append('image', profileImg);

                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

                axios.post(image_API_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;
                        console.log(photoURL);

                        const userInfo = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoURL
                        };

                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user created in the database');
                                }
                            });

                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoURL
                        };

                        updateUserProfile(userProfile)
                            .then(() => {
                                navigate(location.state || '/dashboard');
                            })
                            .catch(error => console.log(error));
                    })
                    .catch(error => {
                        console.log('ImgBB Error:', error.response?.data);
                    });

            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="card bg-white w-full mx-auto max-w-md shrink-0 rounded-[18px] shadow-none">
            <h3 className="text-4xl font-bold text-secondary">
                Welcome to Zap Shift
            </h3>

            <p className="mt-2 text-base text-secondary">
                Please Register
            </p>


            <form
                className="mt-6"
                onSubmit={handleSubmit(handleRegistration)}
            >
                <fieldset className="space-y-3">

                    {/* Name */}
                    <div>
                        <label className="mb-2 block text-sm text-secondary">
                            Name
                        </label>

                        <input
                            type="text"
                            {...register('name', { required: true })}
                            className="h-10 w-full rounded-md border border-base-100 bg-white px-3 text-sm text-secondary outline-none placeholder:text-gray-400 focus:border-base-100 focus:bg-white focus:outline-none"
                            placeholder="Your Name"
                        />

                        {errors.name?.type === 'required' && (
                            <p className="mt-1 text-xs text-error">
                                Name is required.
                            </p>
                        )}
                    </div>

                    {/* Photo */}
                    <div>
                        <label className="mb-2 block text-sm text-secondary">
                            Photo
                        </label>

                        <input
                            type="file"
                            {...register('photo', { required: true })}
                            className="file-input h-10 w-full rounded-md border border-base-100 bg-white text-sm text-secondary file:border-0 file:bg-primary file:px-4 file:font-medium file:text-secondary"
                        />

                        {errors.name?.type === 'required' && (
                            <p className="mt-1 text-xs text-error">
                                Photo is required.
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm text-secondary">
                            Email
                        </label>

                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className="h-10 w-full rounded-md border border-base-100 bg-white px-3 text-sm text-secondary outline-none placeholder:text-gray-400 focus:border-base-100 focus:bg-white focus:outline-none"
                            placeholder="Email"
                        />

                        {errors.email?.type === 'required' && (
                            <p className="mt-1 text-xs text-error">
                                Email is required.
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm text-secondary">
                            Password
                        </label>

                        <input
                            type="password"
                            {...register('password', {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                            })}
                            className="h-10 w-full rounded-md border border-base-100 bg-white px-3 text-sm text-secondary outline-none placeholder:text-gray-400 focus:border-base-100 focus:bg-white focus:outline-none"
                            placeholder="Password"
                        />

                        {errors.password?.type === 'required' && (
                            <p className="mt-1 text-xs text-error">
                                Password is required.
                            </p>
                        )}

                        {errors.password?.type === 'minLength' && (
                            <p className="mt-1 text-xs text-error">
                                Password must be 6 characters or longer
                            </p>
                        )}

                        {errors.password?.type === 'pattern' && (
                            <p className="mt-1 text-xs text-error">
                                Password must have at least one uppercase,
                                at least one lowercase, at least one number,
                                and at least one special characters
                            </p>
                        )}
                    </div>



                    {/* Register Button */}
                    <button
                        type="submit"
                        className="h-10 w-full rounded-md bg-primary text-sm font-semibold text-secondary transition hover:brightness-95"
                    >
                        Register
                    </button>

                </fieldset>

                {/* Login */}
                <p className="mt-3 text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link
                        state={location.state}
                        className="font-medium text-secondary underline"
                        to="/login"
                    >
                        Login
                    </Link>
                </p>
            </form>

            <div className="mt-4">
                <SocialLogin />
            </div>

        </div>
    );
};

export default Register;