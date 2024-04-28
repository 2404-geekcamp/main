export default function CheckButton(props) {
  return (
    <div>
      <label className="relative w-fit inline-block py-2 px-5 rounded-full text-sm bg-gray-200 has-[:checked]:bg-indigo-700 has-[:checked]:text-white cursor-pointer">
        <input
          type={props.type}
          name={props.inputName}
          value={props.value}
          className="opacity-0 absolute left-0"
        />
        {props.Name}
      </label>
    </div>
  );
}
