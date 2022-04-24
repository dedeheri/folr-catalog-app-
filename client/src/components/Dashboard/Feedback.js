import React, { useState } from "react";

// icons
import { AiOutlineClose } from "react-icons/ai";

import { useLocation } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../redux/action-types-style";
import * as actionType from "../../redux/reducer/dashboard/feedback/actionType";
import { addFeedback } from "../../redux/action/dashboard/feedback";

// conponents
import Button from "../Button";
import Spin from "../Spin";

function Feedback() {
  const { feedback: feedbacks } = useSelector((state) => state.style);
  const {
    feedback: { error, data, fetching },
  } = useSelector((state) => state.dashboardFeedback);
  const dispatch = useDispatch();
  const location = useLocation();

  function closeFeedBack() {
    dispatch({ type: actionTypes.FEEDBACK_DASHBOARD_OFF });
    dispatch({ type: actionType.REMOVE_FEEDBACK });
  }

  const expressions = [
    {
      id: 1,
      emot: "😣",
    },
    {
      id: 2,
      emot: "🙁",
    },
    {
      id: 3,
      emot: "😑",
    },
    {
      id: 4,
      emot: "😊",
    },
    {
      id: 5,
      emot: "😄",
    },
  ];

  const [expression, setExpression] = useState("");
  const [feedback, setFeedback] = useState("");

  const [active, setActive] = useState(Number);

  function clickExpression(id, emot) {
    setActive(id);
    setExpression(emot);
  }

  function handleAddFeedback(e) {
    e.preventDefault();
    dispatch(addFeedback(expression, feedback, location.pathname));
  }

  return (
    <form
      onSubmit={handleAddFeedback}
      className={`border z-40 fixed bg-white mb-4 bottom-0 right-4 w-96 h-[29rem] rounded-md shadow-md duration-300 transition  ease-in ${
        feedbacks
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 mb-0"
      }`}
    >
      <div className={`flex  justify-between items-center border-b px-4 py-2`}>
        <h1 className="text-lg font-medium">Masukan</h1>
        <div
          onClick={closeFeedBack}
          className="mt-2 text-gray-500 hover:text-black p-1 cursor-pointer hover:bg-gray-100 rounded-full duration-300"
        >
          <AiOutlineClose fontSize={24} />
        </div>
      </div>

      <div className="px-4 py-2 space-y-2 pt-8">
        <div className="flex justify-between">
          {expressions.map((emot) => (
            <div
              key={emot.id}
              onClick={() => clickExpression(emot.id, emot.emot)}
              className={`text-3xl hover:bg-yellow-100 bg-yellow-50 p-1 rounded-md duration-300 cursor-pointer ${
                active === emot.id ? "bg-yellow-200" : ""
              }`}
            >
              {emot.emot}
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-2">
        <div className=" space-y-2">
          <h1 className="text-md font-medium">Masukan</h1>
          <textarea
            onChange={(e) => setFeedback(e.target.value)}
            className={`border w-full rounded-md hover:border-slate-500 duration-300 outline-none p-2 ${
              error?.message?.feedback ? "border-red-500" : "border-gray-100"
            }`}
            rows={3}
          />
        </div>
        {error?.message?.feedback?.msg && (
          <p className="text-sm text-red-500">
            {error?.message?.feedback?.msg}
          </p>
        )}
      </div>
      {data?.message && (
        <div className="px-4 py-2">
          <p className="leading-4 text-sm text-green-500">{data?.message}</p>
        </div>
      )}
      <div className="px-4 py-2">
        {fetching ? <Spin /> : <Button name={"Kirim"} />}
      </div>

      <div className="px-4 py-2">
        <p className="leading-4 fixed bottom-6 text-gray-500 text-sm">
          Masukan berguna untuk developer terkait memperbaiki bug atau
          improvisasi fitur.
        </p>
      </div>
    </form>
  );
}

export default Feedback;
