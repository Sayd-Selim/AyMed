import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import { Select, MenuItem } from '@mui/material'

const UserBD = ({ stateUserBD, inputRef }) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [patronymic, setPatronymic] = useState('')
  const [position, setPosition] = useState('')
  const [education, setEducation] = useState('')
  const [experience, setExperience] = useState('')
  const [selectedOption, setSelectedOption] = useState('months') // отслеживает выбор месяцы или годы

  const handleOptionChange = e => {
    setSelectedOption(e.target.value)
  }

  return (
    <div className='mb-20'>
      <div className='flex justify-between mb-10'>
        <TextField
          className='p-1.5 border'
          // required
          type='text'
          name=''
          id=''
          label='Ваше имя'
          value={name}
          onChange={e => setName(e.target.value)}
          error={!stateUserBD && !name && true}
          helperText={!stateUserBD && !name && 'Это обязательное поле !'}
          inputRef={inputRef} // Привязываем реф к компоненту TextField
        />
        <TextField
          className='p-1.5 border'
          type='text'
          name=''
          id=''
          label='Ваша фамилия '
          value={surname}
          onChange={e => setSurname(e.target.value)}
          error={!stateUserBD && !surname && true}
          helperText={!stateUserBD && !surname && 'Это обязательное поле !'}
          inputRef={inputRef} // Привязываем реф к компоненту TextField
        />
        <TextField
          className='p-1.5 border'
          type='text'
          label='Ваша отчество'
          onChange={e => setPatronymic(e.target.value)}
          value={patronymic}
          error={!stateUserBD && !patronymic && true}
          helperText={!stateUserBD && !patronymic && 'Это обязательное поле !'}
          inputRef={inputRef} // Привязываем реф к компоненту TextField
        />
      </div>

      <div className='flex  mb-10 justify-around '>
        <TextField
          className='p-1.5 border'
          type='text'
          label='Ваша должность'
          onChange={e => setPosition(e.target.value)}
          value={position}
          error={!stateUserBD && !position && true}
          helperText={!stateUserBD && !position && 'Это обязательное поле !'}
          inputRef={inputRef} // Привязываем реф к компоненту TextField
        />
        <TextField
          className='p-1.5 border'
          type='text'
          label='Ваша образование'
          onChange={e => setEducation(e.target.value)}
          value={education}
          error={!stateUserBD && !education && true}
          helperText={!stateUserBD && !education && 'Это обязательное поле !'}
          inputRef={inputRef} // Привязываем реф к компоненту TextField
        />
      </div>

      <div className='flex mb-10 justify-center'>
        <TextField
          type='text'
          label=' Ваш опыт работы'
          onChange={e => {
            if (selectedOption === 'months' && parseInt(e.target.value) > 12) {
              setExperience('12') // Устанавливаем значение до 12, если выбраны месяцы
            } else if (parseInt(e.target.value) === 0) {
              setExperience('')
            } else {
              setExperience(e.target.value)
            }

            if (selectedOption === 'years' && parseInt(e.target.value) > 45) {
              setExperience('')
            }
          }}
          value={
            selectedOption === 'months'
              ? experience > 12
                ? '12'
                : experience
              : experience
          }
          error={!stateUserBD && !experience && true}
          helperText={!stateUserBD && !experience && 'Это обязательное поле !'}
          inputRef={inputRef}
          variant='outlined'
          InputProps={{
            endAdornment: (
              <Select
                value={selectedOption}
                onChange={e => setSelectedOption(e.target.value)}
              >
                <MenuItem disabled={experience > 12 && true} value='months'>
                  {(experience <= 1 && 'Месяц') ||
                    (experience >= 2 && experience <= 4 && 'Месяца') ||
                    (experience >= 5 && experience <= 12 && 'Месяцев') ||
                    (experience >= 13 && experience <= 20 && 'Месяцев') ||
                    (experience <= 21 && 'Месяца') ||
                    (experience >= 22 && experience <= 30 && 'Месяцев') ||
                    (experience <= 31 && 'Месяца') ||
                    (experience >= 32 && experience <= 40 && 'Месяцев') ||
                    (experience <= 41 && 'Месяца') ||
                    (experience >= 42 && experience <= 45 && 'Месяцев')}
                </MenuItem>
                <MenuItem value='years'>
                  {(experience <= 1 && 'Год') ||
                    (experience >= 2 && experience <= 4 && 'Года') ||
                    (experience >= 5 && experience <= 20 && 'Лет') ||
                    (experience <= 21 && 'Год') ||
                    (experience >= 22 && experience <= 24 && 'Года') ||
                    (experience >= 25 && experience <= 30 && 'Лет') ||
                    (experience >= 31 && experience <= 34 && 'Года') ||
                    (experience >= 35 && experience <= 40 && 'Лет') ||
                    (experience >= 41 && experience <= 44 && 'Года') ||
                    (experience <= 45 && 'Лет')}
                </MenuItem>
              </Select>
            )
          }}
        />
      </div>
    </div>
  )
}

export default UserBD
