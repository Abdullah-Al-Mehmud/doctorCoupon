import { useContext } from "react";
import { ModalContext } from "../Pages/ModalContext/ModalProvider";

const Modal = ({ onClose }) => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  const handleNext = () => {
    closeModal();
    onClose();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {isModalOpen ? (
        <div className=" inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-3xl shadow-xl w-96 p-6">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-green-700">
                Add New Coupon
              </h2>
              <p className="text-gray-800 font-bold mt-4">
                Please Select the Number Of Coupon you want Redeem “Max
                Redemption 5”
              </p>
            </div>
            <form className="space-y-7">
              <div>
                <label
                  htmlFor="userType"
                  className="absolute transform mt-1  -translate-x-1/2  text-left text-gray-700 bg-white z-10 text-xs font-bold ml-14">
                  Select Number<span className="text-red-500">*</span>
                </label>
                <select
                  id="userType"
                  className="relative w-full mt-3 py-4 px-3 border-[2px] border-gray-[#eaebf6] rounded-xl text-sm font-medium outline-none">
                  <option value=""></option>
                  <option value="userType1">1</option>
                  <option value="userType2">2</option>
                  <option value="userType2">3</option>
                  <option value="userType2">4</option>
                  <option value="userType2">5</option>
                </select>
              </div>

              <button
                onClick={handleNext}
                type="button"
                className="w-full mt-5 py-4 font-bold bg-[#3a643b] text-white rounded-xl ">
                Next
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
