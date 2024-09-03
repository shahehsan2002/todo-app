import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>Filters</button>
      </div>
      <div className="bg-red-500 w-full  rounded-xl p-5 space-y-3">
       <div className="bg-white p-5 flex justify-center items-center rounded-md font-bold text-2xl" >
        <p className="text-center" >There is no task pending</p>
       </div>
      </div>
    </div>
  );
};

export default TodoContainer;
