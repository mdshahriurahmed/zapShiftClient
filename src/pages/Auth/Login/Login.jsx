import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (data) => {
        console.log('form data', data);
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                const from = location?.state?.from || '/';
                console.log('NAVIGATING TO:', from);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="card bg-white w-full mx-auto max-w-md shrink-0 rounded-[18px] shadow-none">

            <h3 className="text-4xl font-bold text-secondary">
                Welcome Back
            </h3>

            <p className="mt-2 text-base text-secondary">
                Login with ZapShift
            </p>

            <form
                className="mt-6"
                onSubmit={handleSubmit(handleLogin)}
            >
                <fieldset className="space-y-3">

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm text-secondary">
                            Email
                        </label>

                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className="h-10 w-full rounded-md border border-base-100 bg-white focus:bg-white active:bg-white px-3 text-sm text-secondary outline-none placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder="Email"
                        />

                        {
                            errors.email?.type === 'required' &&
                            <p className="mt-1 text-xs text-error">
                                Email is required
                            </p>
                        }
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
                                minLength: 6
                            })}
                            className="h-10 w-full rounded-md border border-base-100 bg-white focus:bg-white active:bg-white px-3 text-sm text-secondary outline-none placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder="Password"
                        />

                        {
                            errors.password?.type === 'required' &&
                            <p className="mt-1 text-xs text-error">
                                Password is required
                            </p>
                        }

                        {
                            errors.password?.type === 'minLength' &&
                            <p className="mt-1 text-xs text-error">
                                Password must be 6 characters or longer
                            </p>
                        }
                    </div>

                    {/* Forgot Password */}
                    <div className="pt-1">
                        <a
                            href="#"
                            className="text-sm text-gray-500 underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="h-10 w-full rounded-md bg-primary text-sm font-semibold text-secondary transition hover:brightness-95"
                    >
                        Login
                    </button>

                </fieldset>

                {/* Register */}
                <p className="mt-3 text-sm text-gray-500">
                    Don’t have any account?{' '}
                    <Link
                        state={location.state}
                        className="font-medium text-primary font-bold underline"
                        to="/register"
                    >
                        Register
                    </Link>
                </p>
            </form>

            {/* Social Login */}
            <div className="mt-4">
                <SocialLogin />
            </div>

        </div>
    );
};

export default Login;