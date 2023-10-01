import { useEffect } from "react";

const ContactUs = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 shadow-md rounded-md flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 pr-0 sm:pr-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact Us</h2>
              <div className="mb-4">
                <p>Email: contact@example.com</p>
                <p>Location: 123 Main St, Country</p>
              </div>
            </div>

            <div className="w-full sm:w-1/3"></div>

            <div className="w-full sm:w-2/3">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Send Us a Message</h2>
              <form>
                <div className="mb-4 flex">
                  <div className="mr-4">
                    <label htmlFor="first_name" className="block mb-2">
                      First Name:
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="border border-gray-300 rounded-md py-2 px-4"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block mb-2">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="border border-gray-300 rounded-md py-2 px-4"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="mb-4 flex">
                  <div className="mr-4">
                    <label htmlFor="email" className="block mb-2">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border border-gray-300 rounded-md py-2 px-4"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border border-gray-300 rounded-md py-2 px-4"
                      placeholder="123-456-7890"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-2">
                    Select The Problem Encountered
                  </label>
                  <div className="flex mb-2">
                    <label className="flex items-center mr-4">
                      <input
                        type="checkbox"
                        name="Problem[]"
                        value="Option 1"
                        className="mr-2"
                      />
                      Child Illiteracy
                    </label>
                    <label className="flex items-center mr-4">
                      <input
                        type="checkbox"
                        name="Problem[]"
                        value="Option 2"
                        className="mr-2"
                      />
                      Child Labour
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="Problem[]"
                        value="Option 3"
                        className="mr-2"
                      />
                      Child Harassment
                    </label>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">Message Input Box</h2>
                <textarea
                  className="border border-gray-300 rounded-md p-2 w-full h-30 resize-none"
                  placeholder="Type your message here..."
                ></textarea>

                <h1 className="text-xl font-semibold mb-4">
                  Upload Images and Videos (Max 25 MB)
                </h1>
                <form
                  action="upload.php"
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <label htmlFor="file" className="block mb-2">
                    Select File:
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept="image/*,video/*"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    required
                  />
                  <p className="text-gray-600 text-sm mt-2">
                    Allowed file types: Images (jpeg, jpg, png, gif) and Videos
                    (mp4, mov)
                  </p>
                  <p className="text-gray-600 text-sm">Max file size: 25 MB</p>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
                  >
                    Upload
                  </button>
                </form>
                <div className="mb-4">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md absolute bottom-0 right-10">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
