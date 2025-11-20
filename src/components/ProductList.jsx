import { useState } from "react";
import { Col, Row } from "antd";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const ProductList = (props) => {
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectSpace, setSelectedSpace] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 9;

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
    setCurrentPage(1);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    setCurrentPage(1);
  };

  const handleSpaceChange = (e) => {
    setSelectedSpace(e.target.value);
    setCurrentPage(1);
  };

  const filteredProducts = props.data.filter((product) => {
    const modelMatch = selectedModel
      ? product.name.toLowerCase().includes(selectedModel.toLowerCase())
      : true;
    const colorMatch = selectedColor
      ? product.color.toLowerCase().includes(selectedColor.toLowerCase())
      : true;
    const spaceMatch = selectSpace
      ? product.space.toLowerCase().includes(selectSpace.toLowerCase())
      : true;
    return modelMatch && colorMatch && spaceMatch;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div>
      <div className="mx-[5%] sm:mx-[8%] md:mx-[10%]">
        <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-[#009639]">
          More Devices
        </h3>
      </div>

      <div className="w-full flex justify-center mt-6 mb-4">
        <div className="w-11/12 sm:w-10/12 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <select
            name="Model"
            className="p-1 text-[1.25rem] sm:text-[2rem] border border-gray-300 rounded"
            value={selectedModel}
            onChange={handleModelChange}
          >
            <option value="">All Models</option>
            <option value="iphone">iPhone</option>
            <option value="samsung">Samsung</option>
            <option value="infinix">Infinix</option>
            <option value="vivo">Vivo</option>
          </select>
          {selectedModel === "Iphone" && (
            <div>
              <select
                name="Series"
                className="p-1 text-[1.25rem] sm:text-[2rem] border border-gray-300 rounded"
                value={selectedColor}
                onChange={handleColorChange}
              >
                <option value="">All S</option>
                <option value="Iphone11">Titanium</option>
                <option value="Iphone12">White</option>
                <option value="Iphone13">Black</option>
                <option value="Iphone14">Silver</option>
                <option value="Iphone15">Pink</option>
              </select>
            </div>
          )}

          <select
            name="Color"
            className="p-1 text-[1.25rem] sm:text-[2rem] border border-gray-300 rounded"
            value={selectedColor}
            onChange={handleColorChange}
          >
            <option value="">All Colors</option>
            <option value="titanium">Titanium</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="silver">Silver</option>
            <option value="pink">Pink</option>
          </select>

          <select
            name="Space"
            className="p-1 text-[1.25rem] sm:text-[2rem] border border-gray-300 rounded"
            value={selectSpace}
            onChange={handleSpaceChange}
          >
            <option value="">All Space</option>
            <option value="128">128GB</option>
            <option value="256">256GB</option>
            <option value="512">512GB</option>
          </select>
        </div>
      </div>
      {/* {data==="accessories" && (
        <div>
          <input type="text" />
        </div>
      )} */}
      <div className="w-full flex justify-center mt-6">
        <Row gutter={[16, 24]} className="w-11/12 sm:w-10/12">
          {paginatedProducts.map((product, index) => (
            <Col key={index} xs={24} sm={12} md={12} lg={8}>
              <div className="py-3 px-2 rounded-3xl shadow-md flex flex-row-reverse gap-x-5 md:flex-col mx-2 items-center space-y-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[150px] h-[190px] sm:w-[220px] sm:h-[260px]"
                />
                <div className="space-y-1 text-left sm:ml-[-30%]">
                  <p className="text-[#009639] text-xl font-bold">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-500">{product.space}</p>
                  <p className="text-sm text-gray-500">{product.color}</p>
                  <p className="text-[#009639]">{product.price}</p>
                  <button
                    onClick={() => navigate("/viewDetail")}
                    className="mt-2 bg-[#009639] text-yellow-500 rounded-lg px-4 py-2 text-sm shadow hover:bg-green-700 transition"
                  >
                    View Detail
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {filteredProducts.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-[#009639] p-2 rounded-full border-2 border-[#009639] hover:bg-[#009639] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronLeft />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-[10px] border-2 border-[#009639] cursor-pointer transition ${
                  currentPage === i + 1
                    ? "bg-[#009639] text-white"
                    : "text-[#009639] hover:bg-[#009639] hover:text-white"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="text-[#009639] p-2 rounded-full border-2 border-[#009639] hover:bg-[#009639] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
