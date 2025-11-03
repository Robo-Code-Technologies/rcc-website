import ContactBlob from '../../assets/contact_blob.svg';
export default function ContactUs() {
    return (
        <div className="relative w-full bg-white pb-16">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img
                    src={ContactBlob}
                    alt="blob"
                    className="absolute h-full w-full object-cover"
                />
            </div>
            <div className="relative flex flex-col items-center pt-48">
                <h1
                    className="text-5xl font-bold"
                    style={{ fontFamily: 'Fredoka' }}
                >
                    Ready to Build the Future?
                </h1>
                <p className="mt-6 max-w-[600px] text-center">
                    Take the first step toward innovation. Whether you’re a
                    student, parent, or school, Robo Code Club has a program for
                    you.
                </p>

                <form className="mt-12 flex w-full max-w-2xl flex-col space-y-6 px-4 sm:px-0">
                    {/* Name Field */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="name"
                            className="mb-2 text-lg font-semibold text-white"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Your Name Here"
                            className="rounded-full border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="mb-2 text-lg font-semibold text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter You Email Here"
                            className="rounded-full border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* I am a... Field */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="iam"
                            className="mb-2 text-lg font-semibold text-white"
                        >
                            I am a ...
                        </label>
                        <input
                            type="text"
                            name="iam"
                            placeholder="Teacher/Parent/School/Investor"
                            id="iam"
                            className="rounded-full border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Organization/School Field */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="organization"
                            className="mb-2 text-lg font-semibold text-white"
                        >
                            Organization / School
                        </label>
                        <input
                            type="text"
                            name="organization"
                            placeholder="Leave blank if N/A"
                            id="organization"
                            className="rounded-full border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="message"
                            className="mb-2 text-lg font-semibold text-white"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            placeholder="Leave blank if N/A"
                            className="resize-none rounded-3xl border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-16 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-red-600 hover:shadow-xl"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
