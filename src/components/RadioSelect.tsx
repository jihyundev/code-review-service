import React, { useEffect, useState } from 'react'

type Option = {
  value: string
  label: string
}

type RadioSelectProps = {
  options: Option[]
  name?: string
  onSelect?: (value: string) => void
}

export default function RadioSelect({
  options,
  name = 'radio group',
  onSelect = () => {},
}: RadioSelectProps) {
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setSelectedOption(newValue)
    onSelect(newValue)
  }

  useEffect(() => {
    if (options.length) {
      setSelectedOption(options[0].value)
    }
  }, [options])

  return (
    <div className="flex gap-4 p-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center text-sm">
          <input
            type="radio"
            name={name}
            value={option.value}
            onChange={handleChange}
            checked={selectedOption === option.value}
            className="mr-1"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  )
}
