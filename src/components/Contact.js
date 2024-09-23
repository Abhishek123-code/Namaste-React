const Contact = () => {
  return (
    <div className="contactUs">
      <h1 className=" flex justify-center m-4 p-4 font-bold text-2xl">
        This is Contact Us Page
      </h1>
      <div className="w-6/12 m-auto p-4 ">
        <form className=" flex flex-col ">
          <input
            type="text"
            className="m-2 p-2 border-gray-400 border-2 rounded-lg "
            placeholder="Name"
            required
          ></input>
          <input
            type="email"
            className="m-2 p-2 border-gray-400 border-2 rounded-lg "
            placeholder="Email"
            required
          ></input>
          <textarea
            type="text"
            className="m-2 p-2 border-gray-400 border-2 rounded-lg"
            placeholder="Message"
            required
          ></textarea>
          <button className="m-auto p-2 bg-black text-white rounded-lg w-3/12 my-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
