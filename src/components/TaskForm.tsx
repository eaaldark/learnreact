import React, { useEffect, useState } from "react"
import { useForm, Controller, useFieldArray } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { addTask, editTask } from "../reducers/tasks/taskSlice"
import { v4 as uuid } from "uuid"

const TasksForm = () => {
  const [task, setTask] = useState<any>()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks: any = useAppSelector((state) => state.tasks)

  const {
    register,
    // watch,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm()

  const {
    fields: phoneFields,
    append: phoneAppend,
    remove: phoneRemove,
  } = useFieldArray({
    control,
    name: "phone",
  })

  const handleChange = (e: any) => {
    e.preventDefault()
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (d: any) => {
    let tempTask = task
    let phoneKeys = Object.keys(tempTask).filter((key) =>
      key.startsWith("phone."),
    )
    let phoneNumbers = phoneKeys.map((key) => ({ number: tempTask[key] }))
    tempTask.phone = phoneNumbers
    phoneKeys.forEach((key) => delete tempTask[key])

    if (params.id) {
      dispatch(editTask({ ...tempTask, id: params.id }))
    } else {
      dispatch(
        addTask({
          ...tempTask,
          createAt: new Date().toISOString(),
          completed: false,
          id: uuid(),
        }),
      )
    }
    navigate("/")
  }

  const handleBack = () => {
    navigate("/")
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task: any) => task.id === params.id))
    }
  }, [params, tasks])

  useEffect(() => {
    if (!isDirty) reset(task)
  }, [isDirty, reset, task])

  return (
    <form
      className="w-80 flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <input
          id="title"
          type="text"
          {...register("title", {
            onChange: handleChange,
          })}
          className="bg-transparent peer h-10 w-80 border-b-2 border-gray-300 text-white placeholder-transparent focus:outline-none focus:border-rose-600"
          placeholder="Write a title"
        />
        <label
          htmlFor="title"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
          Write a title
        </label>
      </div>
      <div className="relative">
        <input
          id="description"
          {...register("description", {
            onChange: handleChange,
          })}
          className="bg-transparent peer h-10 w-80 border-b-2 border-gray-300 text-white placeholder-transparent focus:outline-none focus:border-rose-600"
          placeholder="Write a description"
        />
        <label
          htmlFor="description"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
          Write a description
        </label>
      </div>

      <input
        className={`bg-emerald-700 px-2 py-1`}
        type="button"
        value={`Add phone`}
        onClick={() => phoneAppend({ number: "" })}
      />
      {phoneFields.map((field: any, index: any) => (
        <div className="flex gap-3 relative" key={index}>
          <input
            id={`phone.${index}.number`}
            type="tel"
            {...register(`phone.${index}.number`, {
              onChange: handleChange,
              // pattern: {
              //   value:
              //     /^(\+?\d{1,3}\s)?\(?\d{2,4}\)?[\s.-]\d{2,5}[\s.-]\d{4}$/gm,
              //   message: "El numero de telefono no cumple el formato admitido",
              // },
            })}
            className="bg-transparent peer h-10 w-80 border-b-2 border-gray-300 text-white placeholder-transparent focus:outline-none focus:border-rose-600"
            placeholder={`Phone Number ${index + 1}`}
          />
          <label
            htmlFor={`phone.${index}.number`}
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            {`Phone Number ${index + 1}`}
          </label>
          {/* {errors.phone.[index].number && (
            <p className="text-sm text-red-600 mt-2">{errors.phone.[index].number.message }</p>
          )} */}
          <input
            type="button"
            className={`w-6 h-6 bg-red-500 rounded-full text-white`}
            onClick={() => phoneRemove(index)}
            value="X"
          />
        </div>
      ))}

      <div className="flex flex-row-reverse gap-4">
        <button type="submit" className="bg-indigo-600 px-2 py-1">
          Submit
        </button>
        <button
          type="submit"
          onClick={handleBack}
          className="bg-indigo-600 px-2 py-1">
          Back
        </button>
      </div>
    </form>
  )
}

export default TasksForm
