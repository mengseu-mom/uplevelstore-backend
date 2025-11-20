const PhoneCard = (props) => {
  return (
    <div className="lg:w-[140px]  xl:w-[210px] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="xl:h-[230px] p-4  flex items-center justify-center">
        <img
          src={props.image}
          alt={props.model}
        //   className={`max-h-full object-contain  w-full`}
        className=" h-full w-50"
        />
      </div>
      <div className=" space-y-2 px-5 pb-5">
        <h3 className=" inter text text-gray-800">{props.model}</h3>
        <p className=" text-sm text-gray-500">{props.color}</p>
        <button className="px-2  py-1 text-sm font-medium text-yellow-500 bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-200">
          {props.btnBuy}
        </button>
      </div>
    </div>
  );
};
export default PhoneCard;








