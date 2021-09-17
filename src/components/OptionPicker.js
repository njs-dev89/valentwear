const OptionPicker = ({ name, options, onChange, selected }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{name}</label>
      <select
        id={name}
        onChange={onChange}
        value={selected}
        className="form-select border-2 px-2 py-4 border-black option-picker"
      >
        {options?.map((option) => (
          <option value={option} key={option} className="block my-4">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionPicker;
