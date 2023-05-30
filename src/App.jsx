import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [formFields, setFormFields] = useState([
    { aspek_penilaian_1: 1, aspek_penilaian_2: 1, aspek_penilaian_3: 1, aspek_penilaian_4: 1  }
  ])

  const [data, setData] = useState({})

  const aspecOptions = [1,2,3,4,5,6,7,8,9,10];

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = Number(event.target.value);
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    dataMapping();
  }

  const dataMapping = () => {
    let aspek_penilaian_1 = {}
    let aspek_penilaian_2 = {}
    let aspek_penilaian_3 = {}
    let aspek_penilaian_4 = {}
    formFields.forEach((data, index) => {
      aspek_penilaian_1[`mahasiswa_${index+1}`] = data.aspek_penilaian_1
      aspek_penilaian_2[`mahasiswa_${index+1}`] = data.aspek_penilaian_2
      aspek_penilaian_3[`mahasiswa_${index+1}`] = data.aspek_penilaian_3
      aspek_penilaian_4[`mahasiswa_${index+1}`] = data.aspek_penilaian_4
    })
    const dataMap = {
      'aspek_penilaian_1': aspek_penilaian_1,
      'aspek_penilaian_2': aspek_penilaian_2,
      'aspek_penilaian_3': aspek_penilaian_3,
      'aspek_penilaian_4': aspek_penilaian_4
    }

    setData(dataMap)
  }


  const addFields = () => {
    let object = {
      aspek_penilaian_1: 1, aspek_penilaian_2: 1, aspek_penilaian_3: 1, aspek_penilaian_4: 1
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <>
      <h3>Aspek Penilaian Mahasiswa</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formFields.map((form, index) => {
            return (
              <tr key={index}>
                <td><img src={reactLogo} className="logo" alt="Vite logo" /> Mahasiswa {index+1}</td>
                <td>
                  <select name="aspek_penilaian_1" onChange={event => handleFormChange(event, index)} value={form.aspek_penilaian_1}>
                    {aspecOptions.map((row, index) => {
                      return (<option value={row} key={index}>{row}</option>)
                    })}
                  </select>
                </td>
                <td>
                  <select name="aspek_penilaian_2" onChange={event => handleFormChange(event, index)} value={form.aspek_penilaian_2}>
                    {aspecOptions.map((row, index) => {
                      return (<option value={row} key={index}>{row}</option>)
                    })}
                  </select>
                </td>
                <td>
                  <select name="aspek_penilaian_3" onChange={event => handleFormChange(event, index)} value={form.aspek_penilaian_3}>
                    {aspecOptions.map((row, index) => {
                      return (<option value={row} key={index}>{row}</option>)
                    })}
                  </select>
                </td>
                <td>
                  <select name="aspek_penilaian_4" onChange={event => handleFormChange(event, index)} value={form.aspek_penilaian_4}>
                    {aspecOptions.map((row, index) => {
                      return (<option value={row} key={index}>{row}</option>)
                    })}
                  </select>
                </td>
                <td>
                  <button onClick={() => removeFields(index)}>Hapus</button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <button onClick={addFields}>Tambah</button>
            </th>
            <th>
              <button onClick={submit}>Simpan</button>
            </th>
          </tr>
        </tfoot>
      </table>
      {Object.keys(data).length > 0 &&
        <pre>{JSON.stringify(data, null, 2)}</pre>
      }
    </>
  )
}

export default App
