
export const Button = ({children}) => {
  return (
    <div>
      <button className="w-64 text-white text-xl bg-gradient-to-r from-cyan-600 to-blue-800 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium hover:from-white-500 hover:to-blue-500">
        {children}
      </button>
    </div>
  );
};
