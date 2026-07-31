import { RiArrowRightUpLine } from "react-icons/ri";
const Buttons = () => {
    return (
        <div className="my-5">
            <button className="btn bg-primary text-secondary rounded-full  sm:px-7 border-0 ">Track Your Parcel</button>
            <button className="btn bg-secondary  text-primary rounded-full text-xl  mx-1 sm:mx-4 border-0 "><RiArrowRightUpLine /></button>
            <button className="btn bg-neutral text-secondary rounded-full  sm:px-7 border-secondary ">Be A Rider</button>
        </div>
    );
};

export default Buttons;